var prompt = require('prompt'),
    _ = require("lodash");

module.exports = function(grunt) {
    
    grunt.registerTask('wordpress-reactjs-starter-makeyours', function() {
        var done = this.async(),
            tmpl = grunt.file.read("./build/grunt-makeyours-index.tmpl");
            
        prompt.start();
        prompt.get({
            properties: {
                pluginName: {
                    message: 'Step 1 / 12: Plugin name',
                    default: 'WP ReactJS Starter'
                },
                pluginURI: {
                    message: 'Step 2 / 12: Plugin URI',
                    default: 'https://github.com/matzeeeeeable/wp-reactjs-starter'
                },
                pluginDescription: {
                    message: 'Step 3 / 12: Plugin Description',
                    default: 'This WordPress plugin demonstrates how to setup a plugin that uses React and ES6 in a WordPress plugin.'
                },
                author: {
                    message: 'Step 4 / 12: Plugin author',
                    required: true
                },
                authorURI: {
                    message: 'Step 5 / 12: Plugin author URI'
                },
                version: {
                    message: 'Step 6 / 12: Plugin initial version',
                    default: '0.1.0'
                },
                textDomain: {
                    description: 'Step 7 / 12: Text domain (example: wp-reactjs-starter)',
                    pattern: /^[^ ]+$/,
                    message: 'The text domain may not contain whitespaces',
                    required: true
                },
                minPHP: {
                    message: 'Step 8 / 12: Minimum PHP version',
                    default: '5.3.0'
                },
                namespace: {
                    description: 'Step 9 / 12: PHP file namespace prefix (example: MatthiasWeb\\WPRJSS)',
                    pattern: /^[^ ]+$/,
                    message: 'The namespace may not contain whitespaces',
                    required: true
                },
                optPrefix: {
                    description: 'Step 10 / 12: WordPress option names prefix (example: wprjss)',
                    pattern: /^[A-Za-z0-9]+$/,
                    message: 'The option prefix must match the [A-Za-z0-9] pattern',
                    before: function(value) {
                        return value.toLowerCase();
                    },
                    required: true
                },
                dbPrefix: {
                    description: 'Step 11 / 12: WordPress database tables prefix (example: wprjss)',
                    pattern: /^[A-Za-z0-9]+$/,
                    message: 'The database table prefix must match the [A-Za-z0-9] pattern',
                    before: function(value) {
                        return value.toLowerCase();
                    },
                    required: true
                },
                constantPrefix: {
                    description: 'Step 12 / 12: PHP constants prefix for the above options (example: WPRJSS)',
                    pattern: /^[A-Za-z0-9]+$/,
                    message: 'The constant prefix must match the [A-Za-z0-9] pattern',
                    before: function(value) {
                        return value.toUpperCase();
                    },
                    required: true
                }
            }
        }, function (e, result) {
            // We have all the informations, let's parse the index.php file
            var indexPHP = tmpl;
            _.each(result, function(value, key) {
                indexPHP = indexPHP.replace(new RegExp('\\$\\{' + key + '\\}'), 'g', value);
            });
            
            console.log(indexPHP);
            done();
        });
        
        // /languages, /inc, /index.php
        // .generated file anlegen
    });
    
};