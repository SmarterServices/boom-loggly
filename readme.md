boom-loggly
===
Description: Error wrapper that logs to loggly and outputs a boom error object

##Getting started:

	npm install boom-loggly --save
Usage:	
	
	var boom-loggly = require('boom-loggly')
	var e = new boom-loggly({
		loggly:{
        token:'',
        subdomain:'',
        username:'',
        password:'',
        tags:['']
    }
	})
	
###constructor params:

because boom-loggly post to loggly when an error happens you need to include loggly object for your account.

###Method:
addError()

Description: Generates and returns a dynamic boom object and logs an object to loggly.

	e.addError(request_id,status,log_object,output,tags);
	
	request_id(required):Will be a unique id used to track an error.
	status_id(required): The status number of the error. Used to generate a dynamic boom object.
	log_object(required): The object that will be sent to loggly.
	output(required): What the user will see as the message in actual boom error.
	tags(optional): tags set when sending to loggly.
	