const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN,
  MESSAGE_BODY = process.env.MESSAGE_BODY,
  TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER,
  OUTBOUND_PHONE_NUMBER = process.env.OUTBOUND_PHONE_NUMBER;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});

client.messages
  .create({
    body: `${MESSAGE_BODY}`,
    from: `${TWILIO_PHONE_NUMBER}`,
    to: `${OUTBOUND_PHONE_NUMBER}`,
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.log(error));
