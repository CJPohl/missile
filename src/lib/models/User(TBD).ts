import mongoose from 'mongoose';

/// USER MODEL ///
// Interfaces and Schema for users of Missile

// Document
interface UserDocument {
  first_name: string;
  last_name: string;
  email: string;
}

// Schema
const userSchema = new mongoose.Schema<UserDocument>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
});

// Build
const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
