const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_CLIENT_SECRET);

// - App config
const app = express();

// - Middlewares
app.use(cors());
app.use(express.json());

// - API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
