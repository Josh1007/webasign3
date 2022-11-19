let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

const Car = require('../models/Car');

module.exports.displayCarList = (req,res,next)=>{
    Car.find((err, carslist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('Car/list',{
                title:' Cars'  ,
                Carslist: carslist

            })
        }
        
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('Car/add',{title:'Add Car'})
}
module.exports.processAddPage = (req,res,next)=>{
    let newCar = Car ({
    "Car_Model":req.body.Car_Model,
    "Owner":req.body.Owner,
    "Year":req.body.Year,
    "Description":req.body.Description,
    "Price":req.body.Price,

    });

    Car.create(newCar,(err,Car) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Cars-list');
        }
    })

}
module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Car.findById(id,(err,carToEdit) =>{
        if(err)
    {
        console.log(err);
        res.end(err);

    }
    else
    {
        res.render('car/edit',{title:'Edit Car', car: carToEdit})
    }
    })

}

module.exports.processEditPage = (req,res,next)=> {
    let id=req.params.id;
    let updateCar = Car({
        "_id":id,
        "Car_Model":req.body.Car_Model,
        "Owner":req.body.Owner,
        "Year":req.body.Year,
        "Description":req.body.Description,
        "Price":req.body.Price,

    });

    Car.updateOne({_id:id},updateCar,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
    
        }
        else
        {
            res.redirect('/Cars-list');  
        }

    })

}

module.exports.displayDeletePage = (req,res,next)=>{
    let id =req.params.id;
    Car.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Cars-list');
        }
    })

}