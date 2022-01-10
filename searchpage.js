




var format = $("#format-select").val()
var input = "flower"

$.getJSON("https://www.loc.gov/" + format + "/?q=" + input + "&fo=json", function (data) {

    console.log(data)

    var featuredItems = data.featured_items

    for (i = 0; i < featuredItems.length; i++) {

        // let url = $("<a>")
        // let link = "https://loc.gov" + data.featured_items[i].url
        // url.attr("href", link)
        // url.text("Link")

        let title = data.featured_items[i].title

        $("#results").append($("<li>" + title + "</li>"));

    }

})

// var link = $("<a>")



