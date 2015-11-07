var debug = require('debug')('spd');
var exec = require('child_process').exec;

function exec_sp(project_name){
	
	var cmdString = 'sudo shipit ' + project_name + ' deploy'


	console.log('start cmd');

	exec(cmdString, function (err, stout, stderr) {
		if(err){
			console.log(err);
		}
		console.log(stout);
		
		console.log('cmd end...')

	})

}

module.exports = exec_sp;




