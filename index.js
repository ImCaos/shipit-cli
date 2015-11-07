#!/usr/bin/env node
var sd = require('./bin/spd')
var argv = require('yargs').argv;

if (!argv.p) {
	console.log('use -p to define project.');
}

var project_name = argv.p;

sd(project_name);