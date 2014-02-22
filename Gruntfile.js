module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist: {
				files: {
					'app/dist/app.min.js': ['app/dist/app.js']
				}
			}
		},
		concat: {
			dist: {
				src: ['app/scripts/**/*.js'],
				dest: 'app/dist/app.js',
			}
		},
		less: {
			styles: {
				options: {
					paths: ['app/styles']
				},
				files: {
					'app/dist/main.css': 'app/styles/less/main.less'
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'app/dist',
				src: ['*.css', '!*.min.css'],
				dest: 'app/dist',
				ext: '.min.css',
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
						'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
						'<%= pkg.author.name %> */'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			views: {
				files: ['app/**/*.html']
			},
			styles: {
				files: ['app/styles/**/*.less'],
				tasks: ['less', 'cssmin']
			},
			scripts: {
				files: ['app/scripts/**/*.js'],
				tasks: ['concat', 'uglify']
			}
		},
		connect: {
			options: {
				port: 9000,
				hostname: 'localhost'
			},
			site: {
				options: {
					open: true,
					base: 'app',
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('server', ['connect:site', 'watch']);

	grunt.registerTask('default', ['less', 'cssmin', 'concat', 'uglify']);
}