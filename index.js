let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next)=>{
    res.render('index',
     { title: 'Car Page'
       });
  
}

module.exports.displayAboutPage = (req, res, next)=>{
    res.render('About',
     { title: 'About'
       });
  
}
module.exports.displayProjectPage = (req, res, next)=>{
    res.render('project',
     { title: 'Project'
       });
  
}
module.exports.displayContactPage = (req, res, next)=>{
    res.render('contact',
     { title: 'Contact'
       });
  
}