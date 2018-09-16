insert into vehiculos(clienteId, marca, modelo,color,tipo,placa,estado,precio_servicio,fecha_instalacion,linea)values(
1,'Toyota','2018','verde','automovil','P232DFY','ACTIVO',250,'2018-02-10 ','Hilux'
);
insert into vehiculos(clienteId, marca, modelo,color,tipo,placa,estado,precio_servicio,fecha_instalacion,linea)values(
1,'Honda','2018','verde','automovil','P233DFY','ACTIVO',250,'2018-02-10 ','Civic'
);
insert into vehiculos(clienteId, marca, modelo,color,tipo,placa,estado,precio_servicio,fecha_instalacion,linea)values(
5,'Toyota','2018','azul','automovil','P254DFY','ACTIVO',250,'2018-02-10 ','corolla'
);

insert into vehiculos(clienteId, marca, modelo,color,tipo,placa,estado,precio_servicio,fecha_instalacion,linea)values(
5,'Nissan','2014','blanco','automovil','P544MXF','ACTIVO',250,'2018-02-10 ','Altima'
);

insert into vehiculos(clienteId, marca, modelo,color,tipo,placa,estado,precio_servicio,fecha_instalacion,linea)values(
5,'Mazda','2009','negro','automovil','P999BMF','ACTIVO',250,'2018-02-10 ','Mazda3'
);

select * from vehiculos
select * from clientes

update vehiculos set linea='civic' where id=1

select * from usuarios