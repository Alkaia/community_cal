'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	validate = require('mongoose-validator');

var now = new Date();

var alphanumLenValidator = [
	validate({
		validator: 'isAlphanumeric',
		message: 'Name should contain alpha-numeric characters only'
	}),
	validate({
		validator: 'isLength',
		argument: [1, 150],
		message: 'Name should contain text, but not longer than {ARGS[0]} characters'
	})
];

var EventSchema = new Schema({

	title: {
		type: String,
		required: true,
		validate: alphanumLenValidator
	},
	description: {
		type: String,
		required: true,
		validate: alphanumLenValidator
	},
	//start_date: {type: Date, required: true, default: now}
	//end_date: {type: Date, required: true, default: now.setHours(now.getHours() + 1);}
	createdOn: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Event', EventSchema, 'collection');
