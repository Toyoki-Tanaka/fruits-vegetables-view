const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');


const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

app.use(express.urlencoded({ extended: false }));

// Index Route
app.get('/fruits', (req, res) => {
    res.render("fruits/Index", { fruits });
});

app.get('/vegetables', (req, res) => {
    res.render("vegetables/Index", { vegetables })
})

// New Route
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

// Post Route
app.post('/fruits', (req, res) => {
    if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits'); //send the user back to /fruits
});

app.post('/vegetables', (req, res) => {
    if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    vegetables.push(req.body);
    res.redirect('/vegetables'); //send the user back to /fruits
});



//Show Route
app.get('/fruits/:id', (req, res) => {
    res.render('fruits/Show', {
        fruit: fruits[req.params.id]
    });
});

app.get('/vegetables/:id', (req, res) => {
    res.render('vegetables/Show', {
        vegetable: vegetables[req.params.id]
    })
})





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});