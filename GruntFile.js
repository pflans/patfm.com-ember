'use strict';
 
module.exports = function(grunt) {
 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		project: {
		  app: 'site',
		  assets: '<%= project.app %>/assets',
		  css: [
			'<%= project.app %>/sass/style.scss'
		  ],
		  js: [
			'<%= project.app %>/js/*.js'
		  ]
		},
		sass: {
		  dev: {
			options: {
			  style: 'expanded'
			},
			files: {
			  '<%= project.app %>/css/style.css': '<%= project.css %>'
			}
		  },
		  dist: {
			options: {
			  style: 'compressed'
			},
			files: {
			  '<%= project.app %>/css/style.css': '<%= project.css %>'
			}
		  }
		},
		watch: {
		  sass: {
			files: '<%= project.app %>/sass/{,*/}*.{scss,sass}',
			tasks: ['sass:dev']
		  }
		}
	});
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
	  'sass:dev',
	  'watch'
	]);
};

