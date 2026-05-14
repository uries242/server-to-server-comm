Reflection Questions

- 1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
It was important to re-format the data first to avoid receiving uneccessary, sensitive, and/or irrelevant  information to the client. A minimal response not only ensures only what is explicity requested is sent, but is also lightweight and increases transfer speed. 

- 2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
This is a more 'graceful' way of handling error. Errors can be presented in simple, non-technical jargon. In this way, we can ensure that no details about the API would be exposed to the client. 

- 3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
I would use the query param to read the ISO language code from the URL and append it to axios request URL. A client could then call /api/fun-fact?language=de to get the fact in German (de). 