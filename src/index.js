console.log('%c HI', 'color: firebrick')

// challenge 1
// add event listener that allows the DOM content to load fully
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())//parse JSON
      .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container');
        // adds image elements to the DOM for each
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      });
  });

//   challenge 2
document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreedsList = document.getElementById('dog-breeds');//access the element dog-breeds
        // adds the breeds to the page in the <ul> provided 
        for (const breed in data.message) {
          const li = document.createElement('li');
          li.innerText = breed;
          dogBreedsList.appendChild(li);
        }
      });
  });
// challenge 3
document.addEventListener("DOMContentLoaded", () => {

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreedsList = document.getElementById('dog-breeds');
        for (const breed in data.message) {
          const li = document.createElement('li');
          li.innerText = breed;
          dogBreedsList.appendChild(li);
        }
      });
    //   add event listener that changes the font color of the <li> clicked
    const dogBreedsList = document.getElementById('dog-breeds');
    dogBreedsList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change font color to blue
      }
    });
  });

//   challenge 4

document.addEventListener("DOMContentLoaded", () => {

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreedsList = document.getElementById('dog-breeds');
        for (const breed in data.message) {
          const li = document.createElement('li');
          li.innerText = breed;
          dogBreedsList.appendChild(li);
        }
      });
    const dogBreedsList = document.getElementById('dog-breeds');
    dogBreedsList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change font color to blue
      }
    });
    // filter breeds that start with a particular letter using a dropdown
    const breedDropdown = document.getElementById('breed-dropdown');
  breedDropdown.addEventListener('change', (event) => {
    const selectedLetter = event.target.value;
    const dogBreeds = document.querySelectorAll('#dog-breeds li');
    dogBreeds.forEach(breed => {
      if (breed.innerText.startsWith(selectedLetter)) {
        breed.style.display = 'block';
      } else {
        breed.style.display = 'none';
      }
    });
  });
  });