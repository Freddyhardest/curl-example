const Curl = require('node-libcurl').Curl;

const url = 'https://example.com';

const curl = new Curl();
curl.setOpt(Curl.option.URL, url);

// Capture response headers and body
let responseData = '';
curl.on('header_function', (info) => {
  return 0; // Continue processing
});

curl.on('write_header', (buf) => {
  responseData += buf.toString();
  return buf.length;
});

curl.on('write', (buf) => {
  responseData += buf.toString();
  return buf.length;
});

curl.on('end', () => {
  console.log(`Response:\n${responseData}`);
  curl.close();
});

curl.on('error', (err) => {
  console.error(`Error: ${err.message}`);
  curl.close();
});

curl.perform();
