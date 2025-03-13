const sliderMin = document.querySelector('.range-min');
const sliderMax = document.querySelector('.range-max');
const progressBar = document.querySelector('.progress');

const numberInputMin = document.querySelector('.input-min');
const numberInputMax = document.querySelector('.input-max');

const displayedMinValue = document.getElementById('filterByPriceMinInput');
const displayedMaxValue = document.getElementById('filterByPriceMaxInput');

// Function to update slider UI
function updateSliderUI() {
    const minValue = parseInt(sliderMin.value);
    const maxValue = parseInt(sliderMax.value);

    // Ensure min value is always less than max value
    if (minValue >= maxValue) {
        sliderMin.value = maxValue - 100;
    }

    const minPosition = (sliderMin.value / sliderMin.max) * 100;
    const maxPosition = (sliderMax.value / sliderMax.max) * 100;

    progressBar.style.left = `${minPosition}%`;
    progressBar.style.right = `${100 - maxPosition}%`;

    numberInputMin.value = sliderMin.value;
    numberInputMax.value = sliderMax.value;

    displayedMinValue.value = sliderMin.value;
    displayedMaxValue.value = sliderMax.value;
}

// Event listeners to sync sliders with input fields
sliderMin.addEventListener('input', updateSliderUI);
sliderMax.addEventListener('input', updateSliderUI);

numberInputMin.addEventListener('change', () => {
    sliderMin.value = numberInputMin.value;
    updateSliderUI();
});

numberInputMax.addEventListener('change', () => {
    sliderMax.value = numberInputMax.value;
    updateSliderUI();
});

// Initial setup
updateSliderUI();
