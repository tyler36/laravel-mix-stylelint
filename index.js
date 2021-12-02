/* eslint-disable class-methods-use-this */

let mix = require( 'laravel-mix' );
const path = require( 'path' );

/**
 * Lint stylesheets via ESLINT
 *
 * return {void}
 *
 */
class StylelintMixin {
    /**
     * The optional name to be used when called by Mix.
     *
     * @return {String|Array}   Name
     */
    name() {
        return ['stylelint'];
    }

    /**
     * All dependencies that should be installed by Mix.
     *
     * @return {Array}  Dependencies
     */
    dependencies() {
        return [
            'stylelint',
            'stylelint-webpack-plugin',
            'postcss-scss'
        ];
    }

    /**
     * Merge configuration with defaults
     *
     * @param {Object} settings         An object containing user configuration option overrides
     * @returns {void} false
     */
    register( settings ) {
        let defaults = {
            configFile:   path.join( __dirname, '../../.stylelintrc.js' ),
            context:      './resources',
            failOnError:  false,
            files:        ['**/*.scss', '**/*.vue', '**/*.blade.php'],
            quiet:        false,
            customSyntax: 'postcss-scss',
        };

        this.config = Object.assign( defaults, settings );
    }

    /**
     * Plugins to be merged with the master webpack config.
     *
     * @return {Array|Object}   Plugin
     */
    webpackPlugins() {
        let StyleLintPlugin = require( 'stylelint-webpack-plugin' );

        return new StyleLintPlugin( this.config );
    }
}

mix.extend( 'stylelint', new StylelintMixin() );
