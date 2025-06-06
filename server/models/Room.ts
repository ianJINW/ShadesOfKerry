import mongoose, { Schema, Document } from "mongoose";

export interface IRoom extends Document {
	name: string;
}

const RoomSchema: Schema = new Schema({
	name: { type: String, required: true },
});

export default mongoose.model<IRoom>("Room", RoomSchema);
