// LEC PART 1 minute 1 to minute 51...
// let express = require('express');
// let app = express();
// let morgan=require('morgan');

// app.use(morgan('common'));

// app.use(express.static(__dirname+"/public"));
// app.use(express.static(__dirname+"/img"));

// app.use(function(req,res){
//     let date= new Date();
//     console.log("I got a request at " +date.getHours());
// })


// app.get('/', function(req,res){
//     console.log('Hello from app.get');
//     res.send('Hello');
// });

// app.get('/',function(req,res){
//     console.log('I got a REQUEST');
//     // res.send("Thank you for your response")
//     res.sendFile("index.html");
// });

// app.get('/about',function(req,res){
//     console.log('I got a GET about!!');
//     res.sendFile(__dirname + "/public/"+'about.html');
// });

let express = require('express');
let bodyParser = require('body-parser');
let ejs=require('ejs');

let app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let db = [];



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));



// parse application/json
app.use(bodyParser.json())


app.get('/',function(rqe, res) {
    // res.sendFile(__dirname +'/public' +'/index.html');
    res.render('index.html',{userName: 'Tim',ar:db});


});

app.post('/data',function(req,res){
    console.log('I got a post request!!!');
    console.log(req.body);
    db.push(req.body);
    console.log("I have " + db.length + " records");



    res.send('Thank you!!!');
});

app.listen(8080);
