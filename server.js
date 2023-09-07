require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Fruit = require('./models/fruit');
const Vegetable = require('./models/vegetable');
const mongoose = require('mongoose')
/// Database Connection

//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})

//////


const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

app.use(express.urlencoded({ extended: false }));

// Index Route
app.get('/fruits', async (req, res) => {
    try {
        const foundFruits = await Fruit.find({})
        res.status(200).render('fruits/Index', {
            fruits: foundFruits,
        })
    } catch {
        res.status(400).send(err)
    }
});

app.get('/vegetables', async (req, res) => {
    try {
        const foundVegetables = await Vegetable.find({})
        res.status(200).render('vegetables/Index', {
            vegetables: foundVegetables,
        })
    } catch {
        res.status(400).send(err)
    }
})

// New Route
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

// Post Route
app.post('/fruits', async (req, res) => {
    try {

        // if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
        //     req.body.readyToEat = true;
        // } else { //if not checked, req.body.readyToEat is undefined
        //     req.body.readyToEat = false;
        // }

        req.body.readyToEat = req.body.readyToEat === "on" ? true : false

        const createdFruit = await Fruit.create(req.body)

        res.status(201).redirect('/fruits')
    } catch (err) {
        res.status(400).send(err)
    }

});

app.post('/vegetables', async (req, res) => {

    try {
        req.body.readyToEat = req.body.readyToEat === "on" ? true : false

        const createdVegetable = await Vegetable.create(req.body)

        res.status(201).redirect('/vegetables')
    } catch (err) {
        res.status(400).send(err)
    }
});



//Show Route
app.get('/fruits/:id', async (req, res) => {
    try {
        const foundFruit = await Fruit.findById(req.params.id)

        res.render('fruits/Show', {
            fruit: foundFruit,
        });
    } catch (err) {
        res.status(400).send(err)
    }
});

app.get('/vegetables/:id', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id)

        res.render('vegetables/Show', {
            vegetable: foundVegetable
        })
    } catch (err) {
        res.status(400).send(err)
    }
})





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});