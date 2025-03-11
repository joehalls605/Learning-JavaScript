/*
How to calculate the position of the progress bar

The goal is to figure out where the blue progress bar should start and end based on where the two sliders (thumbs) are positioned.
 */




const rangeMin = document.querySelector('.range-min');
const rangeMax = document.querySelector('.range-max');
const progress = document.querySelector('.progress');

const inputMin = document.querySelector('.input-min');
const inputMax = document.querySelector('.input-max');

const priceMin = document.getElementById('filterByPriceMinInput');
const priceMax = document.getElementById('filterByPriceMaxInput');

// Function to update slider UI
function updateSlider() {
    const minVal = parseInt(rangeMin.value);
    const maxVal = parseInt(rangeMax.value);

    // Ensure min is always less than max
    if (minVal >= maxVal) {
        rangeMin.value = maxVal - 100;
    }

    // Calculate progress position

    /*
    rangeMin.value is the position of the left slider
    We divide rangeMin.value by rangeMin.max to get a fraction of how far the left slider is along the total range.
    If the slider is at 1000, the fraction would be 1000 / 7500 = 0.1333 (about 13% of the way).
    */
    const minPercent = (rangeMin.value / rangeMin.max) * 100;

    /*
    This works the same way as minPercent, but for the right slider (rangeMax).
    If the right slider is at 6000, the percentage would be 6000 / 7500 = 0.8, or 80%
    */
    const maxPercent = (rangeMax.value / rangeMax.max) * 100;

    /*
    We need to move the progress bar (the blue filled area) based on those percentages.
    This sets the starting point of the progress bar.
    If minPercent is 13%, then the left side of the progress bar will start at 13% of the total slider width.
    */
    progress.style.left = `${minPercent}%`;
    /*
    We use 100 - maxPercent because we want the right side to be positioned based on how far the right slider is.
    For example, if maxPercent is 80%, 100 - 80% will be 20%, so the right side of the progress bar will be at 20% from the end of the slider.
    */
    progress.style.right = `${100 - maxPercent}%`;

    // Update displayed values
    inputMin.value = rangeMin.value;
    inputMax.value = rangeMax.value;

    priceMin.value = rangeMin.value;
    priceMax.value = rangeMax.value;
}

// Event listeners
rangeMin.addEventListener('input', updateSlider);
rangeMax.addEventListener('input', updateSlider);

// Sync number inputs with range
inputMin.addEventListener('change', () => {
    rangeMin.value = inputMin.value;
    updateSlider();
});

inputMax.addEventListener('change', () => {
    rangeMax.value = inputMax.value;
    updateSlider();
});

// Initial Setup
updateSlider();

/*
How this all works together:
- The two range inputs (range-min and range-max) sit on top of each other within the slider container.
- Both inputs share the same track (the long horizontal bar that you see as the background of the slider), but they are positioned at slightly different places along that track.
- The left slider (range-min) controls the minimum value and can be moved along the track, while the right slider (range-max) controls the maximum value and moves independently from the left one.


 */