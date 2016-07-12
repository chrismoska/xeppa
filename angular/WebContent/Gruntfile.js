module.exports = function(grunt){
	  grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          uglify: {
                  source: {
                       files: {
                           '../build/js/app.min.js': [ 'js/.tmp/app-annotate.js']
                       }
                   }
          },
          ngAnnotate: {
        	    options: {
        	        singleQuotes: true
        	    },
        	    app: {
        	        files: {
        	            'js/.tmp/app-annotate.js': ['app/app.js','app/**/*.js']
        	        }
        	    }
        	},
//         concat: {
//        	    options: {
//        	      separator: ';',
//        	    },
//        	    dist: {
//        	      src: ['lib/*.js'],
//        	      dest: 'js/lib.min.js',
//        	    },
//         },
           clean: ['js/.tmp/']
     });
     grunt.loadNpmTasks('grunt-contrib-uglify');     
     grunt.loadNpmTasks('grunt-ng-annotate');
     grunt.loadNpmTasks('grunt-contrib-clean');
     grunt.loadNpmTasks('grunt-contrib-concat');
     
     grunt.registerTask('default', ['ngAnnotate','concat','uglify', 'clean']);
}