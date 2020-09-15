const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const sms = require("./send_sms");
app = express();

cron.schedule("27 16 * * *", function () {
  sms.sendMessage();
  console.log("Sending check-in message");
});

app.listen(3128);
