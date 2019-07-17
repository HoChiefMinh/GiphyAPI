// in this assignment I will use the giphy API to create a dynamic web page
// it will populate based on the value passed into it through text

$(document).ready(function() {

    // array that holds buttons
    let cars = ['BMW', 'Mercedes', 'Audi', 'Lexus', 'Ferrari', 'Lamborghini'];

    //function that will make the buttons and add them to page 
    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();
    
        // looping through the array of movies
        for (let i = 0; i < arrayToUse.length; i++){

            let a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }
    }

    // create function that will populate images from giphy API
    $(document).onabort("click",".car-button", function(){
        $("#images").empty();

        $(".car-button").removeClass("active");
        $(this).addClass("active");

        let car = $(this).attr("data-type");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        car + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    });

    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        let results = response.data;
        
        for (let i = 0; i < results.length; i++){
            let carDiv = $("<div class=\"car-item\">");

            let rating =results[i].rating;

            let p = $("<p>").text("Rating: " + rating);

            let animate = results[i].images.fixed_height.url;
            let still = results[i].images.fixed_height_still.url;

            let carImages = $("<img>");
            carImage.attr("src", still);
            carImage.attr("data-still", still);
            carImage.attr("data-animated", animated);
            carImage.attr("data-state", still);
            carImage.addClass("car-image");
            
            carDiv.append(p);
            carDiv.append(carImage);

            $("#gifs").append(carImages);
        }
    });
});

        $(document).on("click", ".car-image", function() {
            let state = $(this).attr("data-state");

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
            
        });
       $("#add-car").on("click", function(event) {
           event.preventDefault();
           let newCar = $("input").eq(0).val();

         if(newCar.length > 2) {
             cars.push(newCar);
         }
         populateButtons(cars, "car-button", "#food-buttons");  
       }
    });
 