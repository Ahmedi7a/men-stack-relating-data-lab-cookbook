const User = require('../models/user')

//index page and show all books
async function index(req, res) {
    try {
        const currentUser = await User.findById(req.params.userId);
        res.render('foods/index.ejs', { title: 'All CookBooks', pantry: currentUser.pantry })

    } catch (err) {
        console.log(err)
        res.redirect('/');
    }

}

//add new page
function addFoodBook(req, res) {
    res.render('foods/new.ejs', { title: 'Add FoodBook' },)
}

//post new
async function createFoodBook(req,res){
    try {
        const currentUser = await User.findById(req.params.userId);
        currentUser.pantry.push(req.body);
        await currentUser.save();
        console.log(req.body);
        res.redirect(`/users/${currentUser._id}/foods`);

    } catch (err) {
        console.log(err)
        res.redirect('/');
    }

}









//================
module.exports = {
    index,
    addFoodBook,
    createFoodBook,

}