import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Item } from '../../../lib/cart/cartSlice';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Parse amount, quantity from body
    const { items } = req.body;

    // Map cart items for stripe line_items format
    const cartItems = items.map((item: Item) => ({
      name: item.spell.name,
      amount: item.spell.price * 100, // multiply price by 100 (cents to dollars)
      quantity: item.quantity,
      currency: 'usd',
    }));

    // Create checkout session from body params
    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [...cartItems],
      success_url: 'http://localhost:3000/store/success',
      cancel_url: 'http://localhost:3000/store/checkout',
    };

    // Init session
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    res.status(200).json({ id: checkoutSession.id });
  } catch (err) {
    console.error(err.raw.message);
    res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
  }
};
