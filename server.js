const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');


const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

// Index Route
app.get('/fruits', (req, res) => {
    res.render("fruits/Index", { fruits });
});

app.get('/vegetables', (req, res) => {
    res.render("vegetables/Index", { vegetables })
})

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