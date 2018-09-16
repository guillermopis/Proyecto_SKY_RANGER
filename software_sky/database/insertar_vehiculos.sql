insert into vehiculos(clienteId, marca, modelo,color,tipo,placa,estado,precio_servicio,fecha_instalacion,linea)values(
1,'Toyota','2018','verde','automovil','P233DFY','ACTIVO',250,'2018-02-10 ','Hilux'
);
insert into vehiculos(clienteId, marca, modelo,color,tipo,placa,estado,precio_servicio,fecha_instalacion,linea)values(
1,'Honda','2018','verde','automovil','P233DFY','ACTIVO',250,'2018-02-10 ','Civic'
);
insert into vehiculos(clienteId, marca, modelo,color,tipo,placa,estado,precio_servicio,fecha_instalacion,linea)values(
5,'Toyota','2018','azul','automovil','P254DFY','ACTIVO',250,'2018-02-10 ','corolla'
);

select * from vehiculos
select * from clientes

update vehiculos set linea='civic' where id=1

select * from usuarios