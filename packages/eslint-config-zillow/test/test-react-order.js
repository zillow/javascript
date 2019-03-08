/* eslint prettier/prettier: off */

import { CLIEngine } from 'eslint';
import eslintrc from '..';
import reactRules from '../rules/react';
import reactA11yRules from '../rules/react-a11y';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,

  rules: {
    // It is okay to import devDependencies in tests.
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    // this doesn't matter for tests
    'lines-between-class-members': 0,
    // overrides indent to match upstream
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    // prettier is irrelevant here
    'prettier/prettier': 'off',
  },
});

function lint(text) {
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);

  return linter.results[0];
}

function wrapComponent(body) {
  return `
import React from 'react';

export default class MyComponent extends React.Component {
/* eslint no-empty-function: 0, class-methods-use-this: 0 */
${body}
}
`;
}

describe('validate react prop order', () => {
  test('make sure our eslintrc has React and JSX linting dependencies', () => {
    expect(reactRules.plugins).toEqual(['react', 'react-hooks']);
    expect(reactA11yRules.plugins).toEqual(['jsx-a11y', 'react']);
  });

  test('passes a good component', () => {
    expect.assertions(3);

    const result = lint(wrapComponent(`
  componentWillMount() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  someMethod() {}
  renderDogs() {}
  render() { return <div />; }`));

    expect(result.warningCount).toBe(0);
    expect(result.errorCount).toBe(0);
    expect(result.messages).toHaveLength(0);
  });

  test('order: when random method is first', () => {
    expect.assertions(2);

    const result = lint(wrapComponent(`
  someMethod() {}
  componentWillMount() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }
`));

    expect(result.errorCount).toBeGreaterThan(0);
    expect(result.messages[0].ruleId).toBe('react/sort-comp');
  });

  test('order: when random method after lifecycle methods', () => {
    expect.assertions(2);

    const result = lint(wrapComponent(`
  componentWillMount() {}
  componentDidMount() {}
  someMethod() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }
`));

    expect(result.errorCount).toBeGreaterThan(0);
    expect(result.messages[0].ruleId).toBe('react/sort-comp');
  });
});
