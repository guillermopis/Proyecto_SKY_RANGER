use SkyrangerDB
select *from sims

insert into sims(id_marca, compania_telefonica, plan_de_datos, fecha_vencimiento_plan,
				fecha_inicio_plan, precio_del_plan, numero_telefono, iccid, apn, id_lote,estado)values(1, 'clarokk','PREMIUN', '23/10/2014',
				'12/10/2013', 123.13, '23435467', '9328KDKDKE9', '93844ff',1,'En stock');
				go

select *from marcas

	insert into marcas(nombre,descripcion)values('El gran leon', 'leonardo lo das');


select *from lotes
  
 insert into lotes(codigo_lote,fecha_compra,fecha_activacion, precio_total,precio_unitario, id_proveedor,numero_dispositivos,duracion_plan_datos,fecha_vencimiento_plan)
  values ('sim_2018_2','2019-10-12','2019-12-09',123,10,2,23,'un mes', '2019-10-28');

