# Grunt demo

This is a demo of how to setup [Grunt JS](http://gruntjs.com/) with basic funtionality such as

- [JS concatination](https://github.com/gruntjs/grunt-contrib-concat)
- [JS minificaiton](https://github.com/gruntjs/grunt-contrib-uglify)
- [CSS minification](https://github.com/gruntjs/grunt-contrib-cssmin)
- [Watch](https://github.com/gruntjs/grunt-contrib-watch) with [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- [Connect server](https://github.com/gruntjs/grunt-contrib-connect)

## Getting started

To get started, you need [Node.js](http://nodejs.org/) installed.

After installing Node.js, run the following commands to install [Bower](http://bower.io/) and the [Grunt command line interface](https://github.com/gruntjs/grunt-cli) globally:

	npm install -g bower
	npm install -g grunt-cli


Next, run the following commands from the root directory to download npm and bower packages:

	npm install
	bower install

## Grunt Tasks

#### Compile

	grunt

#### Watch with livereload

	grunt watch

#### Server with watch and livereload
	
	grunt server