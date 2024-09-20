/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  //delete ALL existing entries

  return knex('registrations')
   .del()
   .then(function () {
    // Inserts seed entries
    return knex('registrations').insert([
        { firstname: 'John', lastname: 'Doe', dob: '2000-01-01'},
        { firstname: 'Jane', lastname: 'Smith', dob: '1995-05-15'},
    ]);

   });

};
