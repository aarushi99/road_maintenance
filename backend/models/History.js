const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = new Schema(
	{
		latitude: {
			type: Number,
			required: true,
		},
		longitude: {
			type: Number,
			required: true,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		address: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: false,
		},
		markerId: {
			type: Schema.Types.ObjectId,
			ref: "Marker",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("History", HistorySchema);
