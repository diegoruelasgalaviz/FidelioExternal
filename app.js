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

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });
