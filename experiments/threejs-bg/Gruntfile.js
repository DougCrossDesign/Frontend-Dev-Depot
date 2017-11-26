// AYC Grunt Base Auto 2

module.exports = function(grunt) {

	
	// Project Configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		/////////////////
		// DEFAULT
		/////////////////

		//Concat
		concat: {
			options: { 
				separator: '\n\n;'
			},		
			sasscon: {
				src: [ 'sass/style.scss' ],
				dest: 'sass/out.scss'
			}
		},

		// Sass
		sass: {
			dist: {
				options: {
					style: 'compressed',
					compass: true
				},
				files: {
					'style.css': 'sass/out.scss'
				}
			}
		}, 

	

		// Watch
		watch: {
				sass: {
					files: ['sass/style.scss'], 
					tasks: ['concat','sass']
				}, 
				
		},

		// Concurrent
		concurrent: {
			first: ['concat'],
		}, 


	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Tasks
	grunt.registerTask('default', ['concat', 'sass', 'watch', 'concurrent:first', 'concurrent:second']);

};