var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/recipes", function(req, res){
	var recipes = [
		{name: "Strawberry & Watermelon Cake", image: "https://www.pedestrian.tv/content/uploads/2017/08/5-619-386.png"},
		{name: "Tres Leches Cake with Strawberries", image: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201104-r-xl-tres-leches-cake-with-strawberries.jpg%3Fitok%3Dy16nsB8_&w=1600&q=70"},
		{name: "Tomato, Corn, and Avocado Salad with Spicy Vinaigrette", image: "https://www.eatwell101.com/wp-content/uploads/2018/03/avocado-salad-recipe.jpg"}
	];

	res.render("recipes", {recipes: recipes});
});

app.listen(3000, function(){
	console.log("Serving Recipe App on Port 3000");
});
