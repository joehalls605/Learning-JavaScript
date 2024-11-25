/*
DOMContentLoaded is an event that fires when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images, and subframes to finish loading. 

This means it triggers as soon as the browser has constructed the DOM (Document Object Model) for the page.

Handling DOMContentLoaded:

Why it's useful: 
It allows JavaScript to interact with the HTML document as soon as it's ready, even if other resources like images or stylesheets are still loading.

How to use it: You can attach event listeners to the DOMContentLoaded event using JavaScript. 
*/

document.addEventListener("DOMContentLoaded", function(){
    // Code here will run when the DOM is fully loaded.
    console.log("DOM is ready!");
});



/*
Real world example:

developing a website that showcases a gallery of images. Each image is represented by an <img> tag in your HTML. 
I want to dynamically load additional images into the gallery as the user scrolls down the page.


HTML:
<div id="image-gallery">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <!-- More images could be here initially -->
</div>

I want to fetch more images from a server-side endpoint or a predefined array of image URLs and append them to the existing gallery when the user reaches the bottom of the page.
*/
document.addEventListener("DOMContentLoaded", function(){

    // Function to load more images into the gallery
    function loadMoreImages(){
        const gallery = document.getElementById("image-gallery");

        const imageUrls = [
            "image3.jpg",
            "image4.jpg",
            "image5.jpg",
        ];

        imageUrls.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "New Image";
            gallery.appendChild(img);
        });
    }

    window.addEventListener("scroll", function(){
        if(this.window.innerHeight + this.window.scrollY >= this.document.body.offsetHeight){
            loadMoreImages();
        }
    });
});

/*
DOMContentLoaded Event: The DOMContentLoaded event ensures that the JavaScript code inside the event listener runs as soon as the DOM is fully loaded and ready for manipulation.

loadMoreImages Function: This function is responsible for dynamically creating new <img> elements and appending them to the #image-gallery container whenever the user scrolls to the bottom of the page.

Scroll Event Listener: Listens for the user scrolling down the page. When the user reaches the bottom (window.innerHeight + window.scrollY >= document.body.offsetHeight), it triggers the loadMoreImages function to add more images.

*/