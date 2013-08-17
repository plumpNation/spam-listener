module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

    // Default task(s).
    grunt.registerTask('default', ['less']);

};
