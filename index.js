const cors = require("cors");
const express = require("express");
const stripe = require('stripe')(keys.stripeSecretKey);

const app = express();
app.use(cors());
app.use(express.json());

app.options('*', cors())
app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {

  console.log("Request:", req.body);

  let error;
  let status;
  try {
    
    const charge = await stripe.charges.create({
        amount: parseFloat(req.body.amount)*100,
        currency: 'MXN',
        description: 'Fidelio Shop',
        source: req.body.token.id
    });
    res.send({msg: "success"}),
      
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(8080);
