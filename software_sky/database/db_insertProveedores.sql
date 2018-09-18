select *from proveedores
select *from usuarios
select *from clientes

--insert providers
insert into proveedores(nombre,nit,direccion,telefono,extension,correo_empresa,estado,contacto,fecha_relacion,correo_contacto)
						values('El lobo ','3737872-9','colonia pedregal alla mero','54672343','112','prueba1@gmail.com','activo','pedro de alvarado',
								'2018/12/10', 'contacto1@gmail.com'),
								('El miau','3737972-9','hay donde los topos','54672343','112','prueba2@gmail.com','activo','pirulo estas ahi',
								'2017/10/2', 'contacto2@gmail.com');
						go

drop table proveedores
--delete from proveedores where  id=1