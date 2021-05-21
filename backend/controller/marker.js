const marker = require("../models/Marker");

exports.getMarker = (req, res, next) => {
	res.status(200).json({
		markers: [
			{
				latitude: 30.7333,
				longitude: 76.7794,
				no_of_flags: 4,
				priority: "low",
				isCompleted: false,
				address: "hello there",
				isFalse: false,
			},
		],
	});
};
