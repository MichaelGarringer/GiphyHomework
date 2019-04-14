var buttons = ["bear", "dog", "cat", "duck"]



//Loop through buttons array and create buttons
function displayButtons() {
    $("#buttons-container").empty()
    for (var i = 0; i < buttons.length; i++) {
        var newButton = $("<button>")
        newButton.text(buttons[i])
        newButton.addClass("each-button")
        $("#buttons-container").append(newButton)

    };
}

displayButtons()

//Click Event for buttons
$(document).on("click", ".each-button", function (event) {
    var searchTerm = $(this).text()
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=4YH971Skk7dE3erBkplFkZ4bMnUHdza7&limit=10`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var responsePlusData = response.data
        for (var i = 0; i < responsePlusData.length; i++) {
            var moving = responsePlusData[i].images.fixed_height.url;
            var static = responsePlusData[i].images.fixed_height_still.url;
            $("#gifDiv").prepend("Rating: " + responsePlusData[i].rating + "<img src='" + static + "'>");
            var image = $("<img>");
            image.attr("src", static);
            image.addClass("gif");
            image.attr("data-state", "still");
            image.attr("data-still", static);
            image.attr("data-animate", moving);
            ;
        }
    });
});

//Submit even from search form
$("#search").on("submit", function (event) {
    event.preventDefault();
    var newButton = $("#userInput").val().trim();
    console.log(newButton);
    buttons.push(newButton);
    displayButtons();

});
$(document).on("click", "gif", pauseOrPlay);

function pauseOrPlay() {
    var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
}