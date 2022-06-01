import mongoose from 'mongoose';
import { OrderStatus } from '../common/order-status';

/// ORDER MODEL ///
// Interface and schema for spell order

// Document
interface OrderDocument {
  userId: mongoose.Types.ObjectId;
  spellId: mongoose.Types.ObjectId;
  status: OrderStatus;
}

// Schema
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
  spellId: { type: mongoose.Types.ObjectId, ref: 'spells', required: true },
  status: { type: String, required: true },
});

// Build
const Order =
  mongoose.models.Order || mongoose.model<OrderDocument>('Order', orderSchema);

export default Order;
