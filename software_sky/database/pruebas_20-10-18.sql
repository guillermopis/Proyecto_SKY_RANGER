select * from vehiculos where placa='P234BMF2'

select * from usuarios

SELECT  * from historialVehiculos

insert into historialVehiculos(fecha,id_gps_entrada, id_gps_salida, id_vehiculo,id_tecnico, comentario)values(
	'18/06/12 10:34:19 PM',2,NULL,1,2,'se asigno gps a vehiculo por primera vez'
);

select * from gps
insert into gps(id_lote,id_marca,modelo,idsis,imei,numero_carcaza,version_firmware,estado)values(
1,1,'af23','2323232','2329042aas',35,'2.32','ACTIVO');

select top(1) id_vehiculo=1 from historialVehiculos

update gps set estado='STOCK' where id not in(2)

exec sp_asignarGPS '18/06/12 10:34:22 PM',1002,2,1,2,'se cambio GPS porque dejo de trasmitir',1002

select * from sims

select SYSDATETIME()

update gps set estado='STOCK'where id not in(2,1012)