var searchInput = $('#searchTerm');
var formatInput = $('#format-select');
console.log(document.location)
$('#submit').on("click", function (event) {
    event.preventDefault();

    var format = formatInput.val();
    var search = searchInput.val().trim().replace(" ","-");
    console.log('format:',format);
    console.log('search:',search);
    

    if(!format){
        document.location.replace('./search-results.html?q='+search)
    }else if(format){
        document.location.replace('./search-results.html?q='+search+'&format='+format);
    }
})

