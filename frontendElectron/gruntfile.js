var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({

        browserify: {
            dist: {
                options:{
                    debug: true,
                    transform: ['babelify']
                },
                files:{ 'dist/pettycash.js' : [
                        'app/**/*.js',
                    ]
                }
            },
        },

        watch:{
            options: {livereload: true},
            browserify: {
                files: ['app/**/*.js'],
                tasks: ['browserify']
            }
        },

        freddie: {
            dev: {
                options: {
                    port: 3000,
                    proxy: {
                        '/api': 'http://localhost:8000/'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-freddie');

    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('default', ['freddie', 'watch']);
};
