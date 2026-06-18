export const configuration = () => ({
  db: {
    url: process.env.DATABASE_URL,
  },
  telegram: {
    token: process.env.TELEGRAM_BOT_TOKEN,
    paymentToken: process.env.PAYMENT_TOKEN,
  },
});
