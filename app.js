// Import express module
const express = require("express");

var randomstring = require("randomstring");

var app = new express();
const port = process.env.PORT || 3333;

// To use css, image and js files with express 
app.use(express.static('./public'));

// Set ejs as template engine
app.set('view engine','ejs');
app.set('views', __dirname + '/src/views');

// For root page ie /
app.get('/',function(req,res){
  res.render("index",{
    title: 'Happy Independence Day'
  });
});

const rdm = randomstring.generate(4);
console.log(rdm);

app.get('/greetin',function(req,res){
  res.render("greetin",{
    title: 'Greet | Info',
    rdm
  })
});

app.get('/greetin/:id',function(req,res){
  const id = req.params.id;
  console.log(id);
  const uname = req.query.username;
  console.log(uname);

  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  res.render("greetings",{
    id,
    uname,
    title: 'Greetings By ' + uname,
    fullUrl
  })
});

app.get('/sendmail', function(req,res){
  const id = req.params.id;
  console.log(id);
  const uname = req.query.username;
  console.log(uname);
  const mail = req.query.email;
  console.log(mail);
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  res.render('greetings',{
    id,
    uname,
    title: 'Greetings By ' + uname,
    fullUrl,
    mail
  })


})


app.listen(port,()=>{console.log(`Server ready at ${port}`)});