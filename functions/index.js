const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors"); 
// const { response, request } = require("express");
const stripe = require("stripe")('sk_test_51LOHb9SJpOuXkVqlVy5y6lcZHqOlta1S61KY9caohRNEDc9A8WFG05RbyBd5EB81Kj19MZTr5mOC584vJv9DClpG00kvO7lFcC');

//so we are setting up an API here

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true })); // cors is like a security
// app.use(express.static("public"));
app.use(express.json()); // this will allow us to send data and pass it in the json format

// - API routes
app.get('/', async (request, response) => response.status(200).send('hello world'));
// app.get('/secret', async (req, res) => {
//   const intent = // ... Fetch or create the PaymentIntent
//   res.json({client_secret: intent.client_secret});
// });

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: parseInt(total), // subunits of the currency
        currency: "usd",
        automatic_payment_methods: {
            enabled: true
        },      
        // payment_method_types: ['card']
    });
    console.log(paymentIntent)

    // OK- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);
// app.listen(8000, () => {
//     console.log("Sever listenning at port 5000 \nGo to http://localhost:8000/hello")
// })

//Example endpoint
// http://localhost:5001/challenge-2375f/us-central1/api