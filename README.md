# analyze-css

A simple Node.js application to track the payload of a stylesheet over time.


## How to use locally

1. Install [PostgreSQL](http://www.postgresql.org/) and set a `DATABASE_URL` environment variable on your system that points to a database. You can set the environment variable by adding `export DATABASE_URL=postgres://username:password@host/database-name` to your `.bash_profile`.
2. Run `npm install` in the repository root. This requires [Node.js](https://nodejs.org/).
3. Run `node worker.js https://example.com/style.css`. This stores the stylesheet analysis in the PostgreSQL database.
