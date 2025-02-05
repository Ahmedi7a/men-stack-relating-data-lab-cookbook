const User = require('../models/user')

function index(req,res){
    res.render('foods/index.ejs',{title:'All CookBooks'},)
}

function addFoodBook(req,res){
    res.render('foods/new.ejs',{title:'Add FoodBook'},)
}









//================
module.exports = {
index,
addFoodBook,

}