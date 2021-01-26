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
//   $('.results-img').addClass('hidden'); 
//   $('.results-message').removeClass('hidden');
//   $('.results-message').replaceWith(
//     `<p>Something went wrong. Please try again later.
//     </p>`
// )
}else{
  $('.results-message').addClass('hidden');
  $('.results-img').removeClass('hidden');
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`)

//     $('.results-message').replaceWith(
//     `${breed}:`
// )
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



// v2 
// function displayResults(responseJson) {
// console.log(responseJson);  
// if(responseJson.status==='error'){
//   $("section">"p").removeClass('hidden');
//   $("section">"p").replaceWith(
//     `<p>Something went wrong. Please try again later.
//     </p>`
// )
//   $('.results-img').addClass('hidden'); 
// }else{
//   $('#results').removeClass('hidden');
//   $('.results-img').replaceWith(
//     `<img src="${responseJson.message}" class="results-img">`)
//   $('.results-img').removeClass('hidden');
//     $("section">"p").replaceWith(
//     `${breed}:`
// )
// }
// }
