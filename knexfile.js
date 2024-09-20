// knexfile.js
module.exports = {
 development: {
   client: 'pg',
   connection:{
     host: 'localhost',
     database: 'hosiptalPatient',
     user:'postgres',
     password:'admin',
     },

     migrations: {
        directory: './db/migrations',
     },

     seeds: {
        directory: './db/seeds',
     },
    },
};