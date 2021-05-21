const Marker = require("../models/Marker");

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

exports.postMarker = (req, res, next) => {
	const latitude = req.body.latitude;
	const longitude = req.body.longitude;
	const priority = req.body.priority;
	const address = req.body.address;

	const marker = new Marker({
		latitude: latitude,
		longitude: longitude,
		no_of_flags: 0,
		priority: priority,
		isCompleted: false,
		address: address,
		isFalse: false,
	});
	marker
		.save()
		.then((result) => {
			console.log("Marker Added Successfully");
			res.status(201).json({
				message: "Marker created successfully",
				marker: result,
			});
		})
		.catch((err) => {});
};
