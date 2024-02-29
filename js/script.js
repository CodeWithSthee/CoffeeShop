// Ratings
document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class 'stars'
    let starContainers = document.querySelectorAll('.stars');

    // Iterate over each star container
    starContainers.forEach(function (starContainer) {
        // Get the rating from the 'data-rating' attribute
        let rating = parseFloat(starContainer.getAttribute('data-rating'));

        // Calculate the number of filled and half stars
        let filledStars = '★'.repeat(Math.floor(rating));
        let hasHalfStar = rating % 1 !== 0;
        let halfStar = hasHalfStar ? '½' : '';

        // Calculate the number of unfilled stars
        let unfilledStars = '☆'.repeat(Math.floor(5 - rating));

        // Update the innerHTML of the star container
        starContainer.innerHTML = filledStars + halfStar + unfilledStars;
    });
});



//UP-Arrow
document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTop");

    // Show or hide the arrow based on scroll position
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add("active");
        } else {
            scrollToTopBtn.classList.remove("active");
        }
    });

    // Smooth scroll to the top when arrow is clicked
    scrollToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
