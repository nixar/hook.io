
// hook.io api
// the api exposes methods to the public for interacting with the hook.io platform


var hookIO = require('../../hookio').hookIO;

exports.VERSION = '0.0';
exports.WEBSITE = 'http://hook.io/';

process.mixin(global, require('./hooks'));