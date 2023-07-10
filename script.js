// JavaScript code for the image search page

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', searchImages);

// Event listener for the next button
document.getElementById('next-button').addEventListener('click', nextPage);

// Event listener for the previous button
document.getElementById('prev-button').addEventListener('click', previousPage);

function searchImages() {
  const query = document.getElementById('search-input').value;

  // Make an AJAX request to the back-end API to search for images
  // Use the query parameter to send the user's search query
  // Handle the response and update the results container
}

function nextPage() {
  // Retrieve the next page of search results from the back-end API
  // Handle the response and update the results container
}

function previousPage() {
  // Retrieve the previous page of search results from the back-end API
  // Handle the response and update the results container
}
