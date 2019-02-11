const EventEmitter = require('events');
const eventEmitterObj = new EventEmitter();
const userModel = require('../app/models/user.model');

/**
 * @description registration service
 */
eventEmitterObj.on('registration', function(req, callback) {

    // console.log('req on service', req);
    
    registration.findAndSaveTokenModel(req, (err, data) => {
        if (err) {
            return callback(err);
        }
        else {

            let userDetails = {
                to: data.email_id,
                subject: 'Registration Successful on Fundoo Notes',
                html: '<p>Your are most Welcome to Fundoo Notes anytime. Thank You!</p>'
            }
            // utility.eventEmitterObj.emit("registration", userDetails);
            // return callback(null, data);
        }
    })    
})