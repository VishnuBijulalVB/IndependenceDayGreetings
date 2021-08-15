// import express module
const express = require("express");

// Route handler for /authors page
const greetRouter = express.Router();

function router(){
  var authors = [
    {
      name: 'JK Rowling',
      publications: 'Harry Potter Series',
      country: 'England',
      img: "rowling.jpg"
    },
    {
      name: 'Rick Riordan',
      publications: 'Heroes of Olympus, Trials of Apollo',
      country: 'USA',
      img: "riordan.jpg"
    },
    {
      name: 'Brandon Sanderson',
      publications: 'Stormlight Archive, Mistborn',
      country: 'USA',
      img: "sanderson.jpg"
    }
  ];
  
  // For greetin.ejs is the root for greetRouter
  greetRouter.get('/',function(req,res){
    res.render("greetin",{
      title: 'Greet | Input'
      // authors
    })
  });
  
  // eg: /books/1  1 is the parameter
  // this parameter from url is accessed using :
  // greetRouter.get('/:id',function(req,res){
  //   const id = req.params.id;
  //   res.render("author",{
  //     nav,
  //     title: 'Greetings By | ' + authors[id].name,
  //     author: authors[id]
  //   })
  // })

  return greetRouter;
}

module.exports = router;