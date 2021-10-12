# laravel-mix-stylelint

This extension is designed to allow you add stylelint to your laravel-mix chain.

## Installation

1. Require the package through `yarn` or `npm`.
Laravel-mix will install the required dependencies as needed.

    ```bash
    yarn add laravel-mix-stylelint
    ```

2. Add a configuration file to your project root.

   By default, this package looks for `.stylelintrc.js` in your project root.

   This can be overridden during the follow step.

3. Import the package into your laravel webpack config file (`webpack.mix.js`).

    ```js
    require( 'laravel-mix-stylelint' );
    ...
    mix.stylelint();
    ```

- Defaults may be overridden by passing an object to the mix call:

    ```js
    mix.stylelint({configFile:  path.join( {'default.js'} });
    ```

- The default is to use SCSS syntax and scan all `SCCS`, `VUE`, & `BLADE` files.

    ```js
        configFile:  path.join( __dirname, '../../.stylelintrc.js' ),
        context:     './resources',
        failOnError: false,
        files:       ['**/*.scss', '**/*.vue', '**/*.blade.php'],
        quiet:       false,
        syntax:      'scss',
    ```
