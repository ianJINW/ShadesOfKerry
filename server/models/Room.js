const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
	name: { type: String, required: true },
});

module.exports = mongoose.model("Room", RoomSchema);
