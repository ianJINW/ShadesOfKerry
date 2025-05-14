import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
	title: string;
	content: string;
}

const ArticleSchema: Schema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
});

export default mongoose.model<IArticle>("Article", ArticleSchema);
