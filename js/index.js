const apiUrl = 'https://pixabay.com/api'
const apiKey =  '8653965-67fc8570b61c58e735d9adade'


// Make a GET Request to the Pixabay API like the one above to fetch images.
$('#search-form').submit(function (e) {
  e.preventDefault();
  const searchQuery = $('.is-medium').val();
  const sampleRequestUrl = `${apiUrl}/?key=${apiKey}&q=${searchQuery}s&image_type=photo&per_page=15&safesearch=true`;
  const thisEle = $(this);
  $.ajax({
    type: 'GET',
    url: sampleRequestUrl,
    success: function(data){
      let html = '';
      for (var i = 0; i < data['hits'].length; i++) {
        html += '<div class="image">';
        html += '<img src="'+data['hits'][i]['previewURL']+'" alt="">';
        html += '</div>';
      }
      $('.container').html(html);
    },
    error: function(xhr, type, exception) {
      console.log("ajax error response type "+type);
    },
    complete: function(){
      thisEle.animate({height: "20vh"});
    }
  });
});
