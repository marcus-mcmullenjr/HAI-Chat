// Node.js imports
var express = require ('express')
var ejs = require ('ejs')

// Declare variables
var app = express();
const port = 3200;

// Render Pages
app.use(express.static('Main'));
app.set('view engine', 'ejs');

// Run application with link
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/',function(req, res){
    res.render('pages/index');
});