'use strict'
module.exports = (sequelize, DataTypes) => {

  //creamos modulo proveedor definimos los datos a utilizar
  var proveedore = sequelize.define('proveedore', {
      //id: DataTypes.DataTypes,
      nombre: DataTypes.STRING,
      nit: DataTypes.STRING,
      direccion: DataTypes.STRING,
      telefono: DataTypes.STRING,
      estado: DataTypes.STRING
  }, {
    timestamps: false,
  });

  proveedore.associate = function(models) {
    // associations can be defined here
  };
  return proveedore;
};