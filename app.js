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
if(status==='error'){
  $('.results-img').addClass('hidden'); 
  $('.results-message').removeClass('hidden');
  $('#results p')[0].innerHTML="Something went wrong. Please try again later."  

}else{
  $( ".results-message").empty();
  $('.results-img').removeClass('hidden');
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`)
  $('#results p')[0].innerHTML=""
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
