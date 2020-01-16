'use strict';

function getDogImages(breed) {
    fetch(`https://dog.ceo/api/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Ruh Roh'));
}

function displayResults(responseJson) {
    let url = responseJson.message;
    console.log(responseJson);
}

function createTemplate(url) {
    return `<img class="dogPic" src="${url}"/>`
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        // $('.results').empty();
        const breed = $('.search').val();
        console.log(breed);
        getDogImages(breed);
    });
}

function handleDogApp() {
    watchForm();
}

$(handleDogApp());