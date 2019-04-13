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

//Need to add to stop and start//
//ON click static should change to moving
//var static= responsePlusData[i].images.fixed_height_still.url > var moving
$(document).on("click", "<img>", function pauseOrPlay() {


});