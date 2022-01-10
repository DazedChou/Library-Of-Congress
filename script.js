var searchInput = $('#searchTerm');
var formatInput = $('#format-select');
console.log(document.location)
$('#submit').on("click", function (event) {
    event.preventDefault();

    var format = formatInput.val();
    var search = searchInput.val().trim().replace(" ", "-");

    var requestUrl = 'https://www.loc.gov/' + format + '/?q=' + search + '&fo=json';

    if(!format){
        document.location.replace('./search-page.html?q='+search)
    }else if(format){
        document.location.replace('./search-page.html?q='+search+'&format='+format);
    }
})

