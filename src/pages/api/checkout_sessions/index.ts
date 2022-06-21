import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Parse amount, quantity from body
    const { amount, quantity } = req.body;

    // Create checkout session from body params
    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          name: 'Missile Payment',
          amount,
          quantity,
        },
      ],
      success_url: 'http://localhost:3000/',
      cancel_url: 'http://localhost:3000/',
    };

    // Init session
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    res.status(200).json({ id: checkoutSession.id });
  } catch (err) {
    res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
  }
};
