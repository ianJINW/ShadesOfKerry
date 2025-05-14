const express = require("express");
const Room = require("../models/Room");

const router = express.Router();

// Get all rooms
router.get("/", async (req, res) => {
	try {
		const rooms = await Room.find();
		res.json(rooms);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch rooms" });
	}
});

// Create a room
router.post("/", async (req, res) => {
	const { name } = req.body;
	try {
		const room = new Room({ name });
		await room.save();
		res.status(201).json(room);
	} catch (err) {
		res.status(500).json({ error: "Failed to create room" });
	}
});

module.exports = router;
