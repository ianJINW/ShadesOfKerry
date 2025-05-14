const express = require("express");
const Article = require("../models/Article");

const router = express.Router();

// Get all articles
router.get("/", async (req, res) => {
	try {
		const articles = await Article.find();
		res.json(articles);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch articles" });
	}
});

// Create an article
router.post("/", async (req, res) => {
	const { title, content } = req.body;
	try {
		const article = new Article({ title, content });
		await article.save();
		res.status(201).json(article);
	} catch (err) {
		res.status(500).json({ error: "Failed to create article" });
	}
});

module.exports = router;
