const express = require( 'express' );
const keys = require("../config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
/**
 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 */
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req);
    await stripe.charges.create({
        amount: parseFloat(req.body.amount)*100,
        currency: 'MXN',
        description: 'Fidelio Shop',
        source: req.body.token.id
    });
    res.send({msg: "success"})
});

module.exports = router;