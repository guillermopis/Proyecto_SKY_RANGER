select *from proveedores

--insert providers
insert into proveedores(nombre,nit,direccion,telefono,extension,correo_empresa,estado,contacto,fecha_relacion,correo_contacto)
						values('El damás','3737872-9','colonia pedregal alla mero','54672343','112','prueba1@gmail.com','activo','pedro de alvarado',
								'23/12/2018', 'contacto1@gmail.com'),
								('El te quito','3737972-9','hay donde los topos','54672343','112','prueba2@gmail.com','activo','pirulo estas ahi',
								'11/9/2018', 'contacto2@gmail.com')		
								;
						go


--delete from proveedores where  id=1