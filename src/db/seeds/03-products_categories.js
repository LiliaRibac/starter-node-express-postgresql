// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('table_name').del()
//   await knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// };

const productsCategories = require('../fixtures/productsCategories');

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('products_categories').insert(productsCategories);
    });
};
