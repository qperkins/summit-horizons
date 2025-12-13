# Stripe Integration Setup Guide

This guide will help you set up Stripe payment processing for the Summit Horizons shop.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Access to your Stripe Dashboard

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** → **API keys**
3. Copy your **Publishable key** and **Secret key**
   - For testing, use the test mode keys (they start with `pk_test_` and `sk_test_`)
   - For production, use the live mode keys (they start with `pk_live_` and `sk_live_`)

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the root of your project (if it doesn't exist) and add:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Application Base URL
# For local development:
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# For production, replace with your actual domain:
# NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Step 3: Set Up Webhooks (For Production)

Webhooks allow Stripe to notify your application about payment events.

### For Local Development:

1. Install the Stripe CLI: https://stripe.com/docs/stripe-cli
2. Login to Stripe CLI: `stripe login`
3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
4. Copy the webhook signing secret (starts with `whsec_`) and add it to your `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   ```

### For Production:

1. In your Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Set the endpoint URL to: `https://yourdomain.com/api/webhooks/stripe`
4. Select events to listen to (recommended):
   - `checkout.session.completed` (Essential - successful payments)
   - `checkout.session.async_payment_succeeded` (Recommended - async payment success)
   - `checkout.session.async_payment_failed` (Recommended - async payment failure)
   - `payment_intent.succeeded` (Optional - backup for successful payments)
   - `payment_intent.payment_failed` (Optional - backup for failed payments)
   
   **Destination Type:** Select "Webhook endpoint URL" (HTTP endpoint)
5. Copy the **Signing secret** and add it to your production environment variables:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   ```

## Step 4: Test the Integration

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Add items to your cart and proceed to checkout
3. Use Stripe's test card numbers:
   - **Success:** `4242 4242 4242 4242`
   - **Decline:** `4000 0000 0000 0002`
   - Use any future expiry date, any CVC, and any ZIP code

## Step 5: Go Live

When you're ready to accept real payments:

1. Switch to **Live mode** in your Stripe Dashboard
2. Update your environment variables with live keys:
   ```env
   STRIPE_SECRET_KEY=sk_live_your_live_secret_key
   STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key
   ```
3. Set up production webhooks as described in Step 3
4. Update `NEXT_PUBLIC_BASE_URL` to your production domain

## Features

- ✅ Secure checkout with Stripe Checkout
- ✅ Cart management with localStorage persistence
- ✅ Success and cancel pages
- ✅ Webhook handling for payment events
- ✅ Error handling and user feedback

## Troubleshooting

### Webhook signature verification fails
- Make sure `STRIPE_WEBHOOK_SECRET` is set correctly
- For local development, use the secret from `stripe listen`
- For production, use the secret from your webhook endpoint in the dashboard

### Checkout session creation fails
- Verify your `STRIPE_SECRET_KEY` is correct
- Check that your API keys match the mode (test vs live)
- Ensure your environment variables are loaded (restart your dev server after adding them)

### Redirect URLs not working
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- Make sure the success/cancel pages exist at `/checkout/success` and `/checkout/cancel`

## Support

For Stripe-specific issues, refer to:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Support](https://support.stripe.com)
