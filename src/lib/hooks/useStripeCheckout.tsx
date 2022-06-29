import axios from 'axios';
import { Item } from '../cart/cartSlice';
import getStripe from '../payment/stripe';

// Stripe checkout hook
const useStripeCheckout = () => {
  const stripeSubmit = async (
    cartTotal: number,
    cartQuantity: number,
    cartItems: Item[]
  ) => {
    // Checkout session

    const { data: checkoutSession } = await axios.post(
      'https://missile.vercel.app/api/checkout_sessions',
      {
        amount: cartTotal,
        quantity: cartQuantity,
        items: cartItems,
      }
    );
    // Checkout redirect
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    console.warn(error.message);
  };
  return stripeSubmit;
};

export default useStripeCheckout;
