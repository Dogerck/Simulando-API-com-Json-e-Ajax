module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        browserSync: {
            bsFiles: {
                src: './'
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },

        sass: { // Task
            dist: { // Target

                files: { // Dictionary of files
                    'style.css': 'style.scss' // 'destination': 'source'
                }
            }
        },

        watch: {
            scripts: {
                files: ['*.js', '*.scss', '*.html'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};