import mongoose from 'mongoose';

/// SCHOOL MODEL ///
/// Interface and schema for schools

// Document
export interface SchoolDocument {
  name: string;
  index: string;
  desc: string[];
}

// Query type checking
export interface SchoolQuery {
  _id: string;
  name: string;
  index: string;
  desc: string[];
  __v: number;
}

// Schema
const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  index: { type: String, required: true },
  desc: { type: Array, required: true },
});

// Build
const School =
  mongoose.models.School ||
  mongoose.model<SchoolDocument>('School', schoolSchema);

export default School;
