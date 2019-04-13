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
            $("#gifDiv").prepend("<img src='" + responsePlusData[i].images.fixed_height.url + "'>");
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

