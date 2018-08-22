'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('participantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      carnet: {
        type: Sequelize.STRING
      },
      facultad: {
        type: Sequelize.STRING
      },
      ciclo: {
        type: Sequelize.STRING
      },
      evento: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('participantes');
  }
};
