# laravel-mix-stylelint

This extension is designed to allow you add stylelint to your laravel-mix chain.

## Installation
1. Require the package through ```yarn``` or ```npm```.
Laravel-mix will install the required dependencies as needed.
```
yarn add laravel-mix-stylelint
```


2. Add a configuration file to your project root. By default, this package looks for a called ```.stylelintrc.js``` in your project root. This can be overridden during the follow step.


3. Import package into your laravel webpack config file (```webpack.mix.js```) and call it.
```
require( 'laravel-mix-stylelint' );
...
mix.stylelint();
```

Defaults may be overridden by passing an object to the mix call:
```
mix.stylelint({configFile:  path.join( {'default.js'} });
```

Currently, the default is to use SCSS syntax and scan all ```SCCS```, ```VUE```, & ```BLADE``` files.
```
    configFile:  path.join( __dirname, '../../.stylelintrc.js' ),
    context:     './resources',
    failOnError: false,
    files:       ['**/*.scss', '**/*.vue', '**/*.blade.php'],
    quiet:       false,
    syntax:      'scss',
```
