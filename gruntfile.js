module.exports = function(grunt){
  grunt.initConfig({
     jade: {
       compile: {
         options: {
           pretty: true
         },
         files: [{
           expand: true,
           cwd: 'structure/base/jade',
           src: ['**/*.jade', '!**/_*.jade'],
           dest: 'structure/dist',
           ext: '.html'
         }]
       }
     },
     sass: {
         options: {
             outputStyle: 'compressed'  // - minified version
             // determines the output css style. There are also
             // 'nested' - heirarchical format
	           // 'compact' - normal format
             // 'expanded' - single line per selector format
         },
         dist: {
             files: [{
                 expand: true,
                 cwd: 'structure/base/sass',
                 src: ['**/*.scss'],
                 dest: 'structure/dist/css',
                 ext: '.css'
             }]
         }
     },
      watch: {
          sass: {
            files: ['structure/base/sass/**/*.scss'],
            tasks: ['sass']
          },
          jade: {
            files: ['structure/base/jade/**/*.jade'],
            tasks: ['jade']
          }
      }
  });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerTask('default', ['watch', 'sass', 'jade']);

};
