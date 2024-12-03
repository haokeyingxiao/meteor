# stylelint-plugin-meteor

This stylelint plugin adds a handful of rules for the Meteor Design System.

## Installation

Add this package to your project:

```sh
npm i -D @haokeyingxiao/stylelint-plugin-meteor
```

Add this package to your stylelint config.

```json
{
  "plugins": ["@haokeyingxiao/stylelint-plugin-meteor"],
  "rules": {
    "meteor/prefer-sizing-token": [
      true,
      {
        "severity": "warning"
      }
    ]
  }
}
```

# Rules

- `meteor/prefer-sizing-token`
