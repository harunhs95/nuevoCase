module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  rules: {
    "react/jsx-one-expression-per-line": 0,
    "linebreak-style": ["error", "windows"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "implicit-arrow-linebreak": 0,
    "react/forbid-prop-types": [0],
    "react/destructuring-assignment": "off",
    'no-plusplus': 'off',
    "linebreak-style": 0,
    "no-nested-ternary" : "off",
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/href-no-hash": "off",
    "camelcase": "off",
    "no-script-url": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0
  },
  globals: {
    window: true,
    document: true,
    sessionStorage: true,
    localStorage: true,
    fetch: true
  }
};
