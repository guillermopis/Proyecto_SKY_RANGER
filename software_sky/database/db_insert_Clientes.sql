insert into tipo_de_pago(nombre) values('30 dias vencidos')
insert into tipo_de_pago(nombre) values('60 dias vencidos')
insert into tipo_de_pago(nombre) values('90 dias vencidos')

insert into tipo_mora(descripcion, porcentaje) values('pago atrasado','5')

insert into tipo_servicio(nombre) values('Alquiler de gps')

update clientes set tipo_pago=1 where id=5

insert into clientes(nombre, nit,direccion_fiscal, direccion_facturacion, correo, telefono, estado, tipo_pago,
					 tipo_mora, tipo_servicio, fecha_ingreso, saldo_Q,anticipo) values(
					 'Guillermo Pisqui','3335650-5', 'Calzada las palmas reu','av. circunvalacion','guillermo.pisqui@gmail.com','2345-6576','ACTIVO',2,
					 1,1,'02/09/2018',237.6,0
);

select * from clientes