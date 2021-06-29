const express = require( 'express' );
const bodyParser = require('body-parser');

const checkout = require('./server/routes/checkout');


    const server = express();
    // Static files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    
    server.use(bodyParser.json());

    /**
     * @route POST api/upload
     * @route POST api/upload-hover 
     * @route POST api/upload-first
     * @route POST api/upload-second
     * @route POST api/upload-thirt
     * @route POST api/upload-fourth
     * @desc Upload post image
     * @access public
     */
    server.use( '/api/checkout', checkout );

    const router = express.Router();

    router.post('*',  async (req, res) => {
        await stripe.charges.create({
            amount: parseFloat(req.body.amount)*100,
            currency: 'MXN',
            description: 'Fidelio Shop',
            source: req.body.token.id
        });
        res.send({msg: "success"})
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });
