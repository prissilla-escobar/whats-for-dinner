// query selectors
var letsCookButton = document.querySelector(".cook-button")
var potImage = document.querySelector(".pot")
var dishSuggestion = document.querySelector(".dish-suggestion")
var sideButton = document.querySelector("#side-dish")
var mainButton = document.querySelector("#main-dish")
var dessertButton = document.querySelector("#dessert")
var entireMealButton = document.querySelector("#entire-meal")


// DOM elements

var sides= [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
]

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesan",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]

var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]

var mainOption = mains[getRandomIndex(mains)]
var dessertOption = desserts[getRandomIndex(desserts)]
var sideOption = sides[getRandomIndex(sides)]



// event listeners
letsCookButton.addEventListener("click", displayDish)



// functions

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function hidePot() {
    potImage.classList.add("hidden")
    dishSuggestion.classList.remove("hidden")
}

function displayDish() {
    if (sideButton.checked) {
        hidePot()
        dishSuggestion.innerText = sides[getRandomIndex(sides)]
    } else if (mainButton.checked) {
        hidePot()
        dishSuggestion.innerText = mains[getRandomIndex(mains)]
    } else if (dessertButton.checked) {
        hidePot()
        dishSuggestion.innerText = desserts[getRandomIndex(desserts)]
    // } else if (entireMealButton.checked) {
    //     hidePot()
    //     dishSuggestion.innerText = 
    }
}

