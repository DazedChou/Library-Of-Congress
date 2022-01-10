console.log(document.location.search);

var queryString = document.location.search;
var queryterms = queryString.split('&');
console.log(queryterms);

var searchTerm;
var searchFormat;
if(queryString){
    if(queryterms.length>1){
        searchFormat = queryterms[1].split("=")[1];
    }
    searchTerm = queryterms[0].split("=")[1];
}

if(!searchFormat){
    var requestUrl = 'https://www.loc.gov/?q=' + search + '&fo=json';
}else if(searchFormat){
    var requestUrl = 'https://www.loc.gov/' + searchFormat + '/?q=' + searchTerm + '&fo=json';
}
console.log("url: ",requestUrl);

$.getJSON(requestUrl, function (data) {

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



