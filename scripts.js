// Function to fetch a random joke from the API
async function fetchJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const joke = await response.json();
    return joke;
}

// Function to display the joke
async function showJoke() {
    const jokeElement = document.getElementById('joke');
    const joke = await fetchJoke();
    jokeElement.innerText = `${joke.setup} - ${joke.punchline}`;
}