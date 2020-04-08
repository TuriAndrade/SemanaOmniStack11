
exports.up = function(knex) { //usado para criar tabelas
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) { //usado caso algo dê errado
  return knex.schema.dropTable('ongs');
};
