
exports.up = function(knex) { //usado para criar tabelas
    return knex.schema.createTable('incidents', function(table){
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      table.integer('ong_id').notNullable();
      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  exports.down = function(knex) { //usado caso algo dê errado
    return knex.schema.dropTable('incidents');
  };
  