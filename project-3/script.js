// JavaScript to center the scroll
window.addEventListener('load', () => {
    const textElement = document.querySelector('.text');
    const scrollWidth = textElement.scrollWidth; // Total scrollable width
    const clientWidth = textElement.clientWidth; // Visible width

    // Calculate the center scroll position
    const centerScrollPosition = (scrollWidth - clientWidth) / 2;

    // Set the scroll position to the center
    textElement.scrollLeft = centerScrollPosition;
});