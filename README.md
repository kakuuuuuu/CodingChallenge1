# Coding Challenge 1

#Assumptions Made
Challenge asked for me to serve the strings 'universe' as text/plain, current UNIX timestamp as text/HTML and 'not found' as text/plain for POST /hello, GET /, and otherwise respectively.
It did not ask to serve files, so the server does not include view files aside from 'text.ejs', which is used to trigger POST /hello.
The route used to serve 'test.ejs', is found with GET /hello and renders a button to POST to /hello.

For enabling CORS I wasn't sure how to test it, but the headers enabling it are found in 'server.js'.
