'use strict';
var path = require('path');

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};


module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
          main: {
            options: {
                hostname: '0.0.0.0',
              port: 9003,
              middleware: function(connect, options) {
                return [folderMount(connect, options.base)]
              }
            }
          }
        },
        watch: {
          main: {
            options: {
                livereload: 35730
            },
            files: ['p-elements/**/*','scripts/**/*','index.html'],
            tasks: ['jshint']
          }
        },
        jshint: {
          options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: false,
            boss: true,
            eqnull: true,
            browser: true,
            smarttabs: true
          },
          files: ['scripts/**/*.js']
        },
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            },
            production: {
                options: {
                    paths: ["less"],
                    yuicompress: true
                },
                files: {
                    "css/main.min.css": "less/main.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['less']);
    grunt.registerTask('server', ['jshint','connect', 'watch']);
};
