const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let photosArray=[];

//Helper function to set Attributes on Dom Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttributes(key, attributes[key]);
    }
}

//Create elements for links and photos, Add to DOM
function displayPhotos() {
    //Run function for each object in photosArray
    photosArray.forEach((photo) =>{
       // Create <a> to link to unsplash
       const item = document.createElement('a');
          setAttributes(item,{
            href: photo.links.html,
            target: '_blank',
          });
       //Create image for photo
       const img = document.createElement('img');
         setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_descrption,
            title: photo.alt_descrption,
         });
       //Put <img> inside <a> , then put both inside imageContainer Element
       item.appendChild(img);
       imageContainer.appendChild(item);
    });
}

// Unsplash API
const count = 10;
const apiKey='rEZezvM_XUp3f_EkKN1xpzQXj_oR0EI3AQdERAPWIVM';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
        // Catch Error Here
    }
}




//On Load
getPhotos();