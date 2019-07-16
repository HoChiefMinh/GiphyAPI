// in this assignment I will use the giphy API to create a dynamic web page
// it will populate based on the value passed into it through text

$(document).ready(function() {

// array that holds buttons
var cars = ['BMW', 'Mercedes', 'Audi', 'Lexus', 'Ferrari', 'Lamborghini'];


// function that makes button and adds them to the page
function renderButtons() {

    // erases everything in the div so there aren't duplicates
    $("#button-View").empty();

    // looping through the array of movies
    for (let i = 0; i < cars.length; i++){

        // dynamically generating buttons for each movie in the array.
         let a = $("<button>");
         //adding a class
         a.addClass("car");
        // Adding a data-attribute with a value of the cars at index i
        a.attr("data-name", cars[i]);
        // Providing the button's text with a value of the movie at index i
          a.text(cars[i]);
        // Adding the button to the HTML
         $("#button-View").append(a);
        }
    }

// create a function that will populate images from Giphy API
$(document).on("click", ".car-button", function(){
    $("#images").empty();

    $(".car-button").removeClass("active");
    $(this).addClass("active");

    let type = $(this).attr("data-type");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    car + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    //ajax call

    $.ajax({
        url:queryURL,
        method: "GET"
    })

    .then(function(response){
        let results = response.data;

        for(var i = 0; i < results.length; i++){
            let carDiv = $("<div class=\"car-item\">");

            let rating = results[i].rating;

            let p = $("<p>").text("Rating: " + rating);

            let animation = results[i].images.fixed_height.url;
            let still = results[i].images.fixed_height_still.url;

            let carImages = $("<img>");
            carImage.attr("src", still);
            carImage.attr("data-still", still);
            carImage.attr("data-animate", animated);
            carImage.attr("data-state", "still");
            carImage.addClass("car-image");

            carDiv.append(p);
            carDiv.append(carImage);

            $("#images").append(foodDiv);
        }
    });
});

// Toggles between still and animate when clicking individual pictures 
$(document).on("click", ".car-image", function(){
    let state = $(this).attr("data-state");

    if (state === "still",){
         $(this).attr("src", $(this).attr("data-animate"));
         $(this).attr("data-state", "animate");
        
    }
    else{
        $(this).attr("src", $(this),attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
    $("#add-car").on("click", function(event){
        event.preventDefault();
        let newFood = $("input").eq(0).val();

        if (newcar.length > 2) {
            cars.push(newCar);

        }
        populateButtons(cars, "car-button", "#car-buttons");
    });
    populateButtons(cars, "car-button", "#car-buttons");
});

