
module.exports = function(grunt) {

	var globalConfig = {
		src: 'core/themes/site',
		partials: 'partials',
		modules: 'modules',
		plugins: 'plugins',
		snippets: 'snippets'
	};

	// Project Configuration
	grunt.initConfig({

		globalConfig: globalConfig,
		pkg: grunt.file.readJSON('package.json'),

		/////////////////
		// DEFAULT
		/////////////////

		//Concat
		concat: {
			options: {
				separator: '\n\n;'
			},
			bodyjs: {
				src: ['<%= globalConfig.src  %>/assets/js/jquery.js', '<%= globalConfig.src  %>/assets/js/jquery-ui.min.js', '<%= globalConfig.src  %>/assets/js/plugins/*.js', '<%= globalConfig.plugins  %>/*/*.js', '<%= globalConfig.partials  %>/*/*.js', '<%= globalConfig.snippets  %>/*/*.js', '<%= globalConfig.src  %>/assets/js/init.js' ],
				dest: '<%= globalConfig.src  %>/assets/scripts.js'
			},
			headjs: {
				src: ['<%= globalConfig.src  %>/assets/js/head/*.js'],
				dest: '<%= globalConfig.src  %>/assets/head.js'
			},
			sasscon: {
				src: [ '<%= globalConfig.src  %>/assets/sass/plugins/*.scss','<%= globalConfig.src  %>/assets/sass/style.scss', '<%= globalConfig.partials  %>/*/*.scss', '<%= globalConfig.snippets  %>/*/*.scss', '<%= globalConfig.modules  %>/*/scss/*.scss', '<%= globalConfig.plugins  %>/*/style.scss' ],
				dest: '<%= globalConfig.src  %>/assets/sass/precomp.scss'
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
					'<%= globalConfig.src  %>/assets/style.css': '<%= globalConfig.src  %>/assets/sass/precomp.scss'
				}
			}
		},

		// Uglify
		uglify: {
				options: {
					mangle: false,
					//beautify: true, // debug js
					compress: true,
					preserveComments: 'none'
				},
				my_target: {
					files: {
						'<%= globalConfig.src  %>/assets/scripts.js': ['<%= globalConfig.src  %>/assets/scripts.js'],
						'<%= globalConfig.src  %>/assets/head.js': ['<%= globalConfig.src  %>/assets/head.js']
					}

				}
		},

		// Watch
		watch: {
				sass: {
					files: ['<%= globalConfig.src  %>/assets/sass/style.scss', '<%= globalConfig.src  %>/assets/sass/site/*/*.scss', '<%= globalConfig.src  %>/assets/sass/core/*/*.scss', '<%= globalConfig.src  %>/assets/sass/core/*.scss', '<%= globalConfig.partials  %>/*/*.scss', '<%= globalConfig.snippets  %>/*/*.scss', '<%= globalConfig.modules  %>/*/scss/*.scss', '<%= globalConfig.plugins  %>/*/style.scss'],
					tasks: ['concat','sass']
				},
				scripts: {
					files: ['<%= globalConfig.src  %>/assets/js/*.js', '<%= globalConfig.src  %>/assets/js/plugins/*.js', '<%= globalConfig.src  %>/assets/js/head/*.js', '<%= globalConfig.plugins  %>/*/*.js',  '<%= globalConfig.partials  %>/*/*.js',  '<%= globalConfig.snippets  %>/*/*.js'],
					tasks: 'concurrent'
				}
		},

		// Concurrent
		concurrent: {
			first: ['concat'],
			second: ['uglify']
		},


	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Tasks
	grunt.registerTask('default', ['concat', 'sass', 'uglify', 'watch', 'concurrent:first', 'concurrent:second']);

};
