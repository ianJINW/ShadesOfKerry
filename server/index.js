const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.routes");
const roomRoutes = require("./routes/room.routes");
const articleRoutes = require("./routes/article.routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/articles", articleRoutes);

// Connect to MongoDB and start server
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
	console.error(
		"Error: MONGO_URI is not defined in the environment variables."
	);
	process.exit(1);
}

mongoose
	.connect(mongoUri, {
		// No additional options needed as defaults are sufficient
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Failed to connect to MongoDB", err);
	});
