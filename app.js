let breed=$('#js-select-breed').val().toLowerCase()

function updateBreed(){
breed=$('#js-select-breed').val().toLowerCase();
$( ".results-message").empty();
}

function getDogImages() {
  updateBreed();
  fetch(`https://dog.ceo/api/breed/${breed}/images/random
  `)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Please try again later.'));
}


function displayResults(responseJson) {
console.log(responseJson);  
status=responseJson.status
if(status==='success'){
  $( ".results-message").empty();
  $('.results-img').removeClass('hidden');
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`)
}else{
  if(status==='error'){
  $('.results-img').addClass('hidden'); 
  // alert('Something went wrong. Please try again later.')
  $('.results-message').removeClass('hidden');
  $('.results-message').replaceWith(
    `<p>Something went wrong. Please try again later.
    </p>`
)

  }
}
}

function watchForm() {
  $('#js-select-breed-form').submit(event => {
    event.preventDefault();
    getDogImages();
    $( ".results-message").empty();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});



