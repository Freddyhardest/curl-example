const Curl = require('node-libcurl').Curl; // Import the Curl class from node-libcurl

// Define the target URL
const url = 'https://example.com';

// Create a new Curl instance
const curl = new Curl();

// Configure the request
curl.setOpt(Curl.option.URL, url); // Set the URL to fetch
curl.setOpt(Curl.option.WRITEDATA, ''); // Store the response in memory

// Handle successful request completion
curl.on('end', (statusCode, data) => {
  console.log(`HTTP Status Code: ${statusCode}`); // Log the status (e.g., 200)
  console.log(`Response from ${url}:\n\n${data.toString()}`); // Log the fetched content
  curl.close(); // Release resources
});

// Handle errors (e.g., network issues)
curl.on('error', (err) => {
  console.error(`Error: ${err.message}`); // Log the error details
  curl.close();
});

// Execute the request
curl.perform();
