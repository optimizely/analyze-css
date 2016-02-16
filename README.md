# analyze-css

A simple Node.JS application to track the payload of a stylesheet over time using [Parker](https://github.com/katiefenn/parker).

## Getting Started

1. `npm install` installs dependencies.
2. `npm start` sets up the database using credentials in `knexfile.js`.
3. Fetch a stylesheet, analyze it, and store in a database using:
    ```bash
    node index.js app https://example.com/styles.css
    ```
