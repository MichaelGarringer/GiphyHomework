
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=4YH971Skk7dE3erBkplFkZ4bMnUHdza7&tag=&rating=G";
console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response.type);
      });