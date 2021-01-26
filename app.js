let breed=$('#js-select-breed').val().toLowerCase()

function updateBreed(){
breed=$('#js-select-breed').val().toLowerCase();

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
if(responseJson.status==='error'){
  $('.results-img').addClass('hidden'); 
  alert('Something went wrong. Please try again later.')  
}else{
  $('.results-message').addClass('hidden');
  $('.results-img').removeClass('hidden');
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`)
}
}

function watchForm() {
  $('#js-select-breed-form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});



