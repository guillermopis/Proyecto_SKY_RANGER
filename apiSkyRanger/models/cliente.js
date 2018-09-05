'use strict';
module.exports = (sequelize, DataTypes) => {
  var cliente = sequelize.define('cliente', {
    nombre: DataTypes.STRING,
    nit: DataTypes.STRING,
    direccion_fiscal: DataTypes.STRING,
    direccion_facturacion: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    estado: DataTypes.STRING,
    tipo_pago: DataTypes.STRING,
    tipo_servicio: DataTypes.STRING,
    fecha_ingreso: DataTypes.STRING,
    tipo_mora: DataTypes.STRING,
    saldo_Q: DataTypes.STRING,
    anticipo: DataTypes.STRING
  }, {
    timestamps: false,
  });
  cliente.associate = function(models) {
    // associations can be defined here
  };
  return cliente;
};
