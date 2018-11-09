select * from marcas
insert into marcas(nombre, descripcion)values('TELTONICA', 'GPS');

select * from lotes
insert into lotes(codigo_lote,fecha_compra,precio_total,precio_unitario,id_proveedor,numero_dispositivos,
duracion_plan_datos,fecha_vencimiento_plan,fecha_activacion)values('GPS_FechaImport_2018/01/01','2018/01/01',
2000,100,1,20,'18 meses','2019/06/01','2018/01/01');

select * from usuarios

select * from proveedores

update lotes set fecha_activacion='NULL' where id =1

