import mongoose from 'mongoose';

/// SPELL MODEL ///
// Interface and schema for spell to purchase

// Document
export interface SpellDocument {
  name: string;
  desc: string[];
  attack_type: string;
  range: string;
  level: number;
  price: number;
  school: string;
}

// Schema
const spellSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: Array },
  attack_type: { type: String },
  range: { type: String },
  level: { type: Number, required: true },
  price: { type: Number, required: true },
  school: { type: String, required: true },
});

// Index for spell search
spellSchema.index({
  name: 'text',
});

// Build
const Spell =
  mongoose.models.Spell || mongoose.model<SpellDocument>('Spell', spellSchema);

export default Spell;
