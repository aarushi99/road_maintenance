const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const markerSchema = new Schema({
	latitude: {
		type: Number,
		required: true,
	},
	longitude: {
		type: Number,
		required: true,
	},
	no_of_flags: {
		type: Number,
		required: true,
	},
	priority: {
		type: String,
		required: true,
	},
	isCompleted: {
		type: Boolean,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	isFalse: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model("Marker", markerSchema);
