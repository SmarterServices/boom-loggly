var err = require('./index.js');
var e = new err({
    loggly:{
        token:'',
        subdomain:'',
        username:'',
        password:'',
        tags:['']
    }
});
//boom will be generated based on the status code of the error
var error = e.addError('testerror',404,{data:"this is an example error",data2:"example here"},'What the user will see in boom');
