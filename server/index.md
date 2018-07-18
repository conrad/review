# Notes on index.js

## app object 
  - Represents underlying express server
  - `app.get(...)` 
    - create new route handling
    - for specific HTTP method type 
      - others: .post, .put, .delete, .patch
    - going to `localhost:5000` assumes a `/` at the end of the url/route.
    - callback arguments: `req, res`
      - objects representing the incoming request & outgoing response
      - the callback function is called by express any time a request comes in that matches the route
  - `app.listen(5000)`
    - Express is telling NodeJS to watch for traffic on that port.




