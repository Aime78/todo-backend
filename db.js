const Pool = require("pg").Pool;

const pool = new Pool({
  user: "default",
  host: "ep-round-block-68034902-pooler.us-east-1.postgres.vercel-storage.com",
  database: "verceldb",
  password: "lZzTmPrNFX18",
  port: 5432,

  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgreSQL successfully!");
});

module.exports = pool;

// const { Pool } = require('pg')

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=disable",
// });

// pool.connect((err, client, release) => {
//     if (err) {
//       console.error('Error connecting to PostgreSQL:', err.message);
//       if (err.stack) {
//         console.error(err.stack);
//       }
//       return;
//     }

//     console.log("Connected to PostgreSQL successfully!");

//   });

// module.exports = pool;
