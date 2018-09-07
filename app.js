var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var recipes = [
		{name: "Strawberry & Watermelon Cake", image: "https://www.pedestrian.tv/content/uploads/2017/08/5-619-386.png"},
		{name: "Tres Leches Cake with Strawberries", image: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201104-r-xl-tres-leches-cake-with-strawberries.jpg%3Fitok%3Dy16nsB8_&w=1600&q=70"},
		{name: "Brown Butter and Toffee Chocolate Chip Cookies", image: "https://assets.bonappetit.com/photos/58e2844b65366d7ba90812ea/16:9/w_5120,c_limit/0417-Brown-Butter-Toffee-ChocolateChip%20Cookie-group.jpg"}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/recipes", function(req, res){
	res.render("recipes", {recipes: recipes});
});

app.post("/recipes", function(req, res){
	//get data from form and add to recipes array
	//redirect to recipes page
	var name = req.body.name;
	var image = req.body.image;
	var newRecipe = {name:name, image:image};
	recipes.push(newRecipe);
	res.redirect("/recipes");
}); 

app.get("/recipes/new", function(req, res){
	res.render("new");
});

app.listen(3000, function(){
	console.log("Serving Recipe App on Port 3000");
});
