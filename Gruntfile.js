module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
		// concat task configuration goes here.
			app: {
				dest: "generated/js/<% pkg.name %>.js",
				src: ["node_module/**/*.js"]
			}
		},
		watch:{
			app:{
				files:["<% concat.app.src %>"],
				task: ["concat"],
			}
		}

	});
	/*creating structure*/
	grunt.file.mkdir("app/shared");
	grunt.file.mkdir("app/components");
	grunt.file.mkdir("app/services");
	grunt.file.mkdir("assets/img");
	grunt.file.mkdir("assets/css");
	grunt.file.mkdir("assets/js");
	grunt.file.mkdir("assets/libs");

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask('default',['concat','watch']);


};