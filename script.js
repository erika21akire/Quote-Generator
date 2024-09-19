// Array of quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The best way to predict your future is to create it. – Abraham Lincoln"
];

// Function to generate a random quote and change the background
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the random quote
    document.getElementById('quote-text').innerText = randomQuote;

    // Change background color randomly between 0-4
    const randomBackgroundIndex = Math.floor(Math.random() * 5);
    const quoteContainer = document.querySelector('.quote-container');

    // Remove existing background classes
    quoteContainer.classList.remove('background-0', 'background-1', 'background-2', 'background-3', 'background-4');

    // Add the new background class
    quoteContainer.classList.add(`background-${randomBackgroundIndex}`);
}
