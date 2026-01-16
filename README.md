## Fun Fact Server 
An Express.js API server that fetches a random fun fact from the Useless Facts API and serves them to clients in a clean, simple format.

## How to Run:
1. Install dependencies: `npm install`
2. Start the server either with `npm start` or nodemon: `npx nodemon`
3. Visit `http://localhost:3001` in your browser and test api route `/api/fun-fact`

## Reflections
- Reformatting data from an external API can help frontend developers extract data from their internal server without having to go through unneccessary fields and only pull what is needed for the UI. For this case, instead of getting the whole object for the fun fact directly from the external API, I sent the text field only and created my own structure
- I also learned how to handle errors with detailed codes matched with generic messages to help make errors understandable
- Some interesting improvements could be using the query parameter provided by the external API to display the fact in a different language.