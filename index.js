var loggly = require('loggly');
var boom = require('boom');

var err = function (config) {
    if (config.loggly) {
        this.client = loggly.createClient({
            token: config.loggly.token,
            subdomain: config.loggly.subdomain,
            auth: {
                username: config.loggly.username,
                password: config.loggly.password
            },
            json: config.loggly.json || true,
            tags: config.loggly.tags || ['']
        });
    }
};

err.prototype.addError = function (request_id, status_id, log_object, output, tags) {
    if (this.client) {
        log_object.request_id = request_id;
        this.client.log(log_object, tags || ['']);
    }

        var b = boom.create(status_id, output, {request_id: request_id}).output.payload
        b.request_id = request_id;
    return b;
};

module.exports = err;