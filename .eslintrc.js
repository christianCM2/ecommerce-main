export default{
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "prettier"
    ],
    "plugins": [
        "jsx-a11y",
        "react",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "prettier/prettier": ["error"],
        "react/jsx-uses-react": "error", //Prevent react from being incorrectly marked as unused
        "react/jsx-uses-vars": "error",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-key": 2, //Verify that JSX has the key attribute in an array or iterator
        "import/no-dynamic-require": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-unresolved": 2,
        "import/no-webpack-loader-syntax": 0,
        "import/prefer-default-export": 0,
        "arrow-body-style": [2, "as-needed"], //Arrow function
        "class-methods-use-this": 0, //Force class methods to use this
        //Indent with 4 spaces
        "indent": ["error", 4],
        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],
        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],
        "no-console": 0, //Do not disable console
        "no-debugger": 2 //Disable debugger
    }
}