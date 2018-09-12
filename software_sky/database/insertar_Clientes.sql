--base de datos
use SkyrangerDB

--insertar tipos de servicios
insert into tipo_servicios(nombre) values('Alquilado');
insert into tipo_servicios(nombre) values('Vendido');

--insertar tipos de paago
insert into tipo_de_pagos(nombre) values('Anticipado');
insert into tipo_de_pagos(nombre) values('30 dias Vencidos');
insert into tipo_de_pagos(nombre) values('60 dias Vencidos');
insert into tipo_de_pagos(nombre) values('90 dias Vencidos');

--insertar tipos de moras
insert into tipo_moras(descripcion, porcentaje) values('Pago atrasado', 5);


--inserttar clientes
insert into clientes (nombre, nit,direccion_fiscal,direccion_facturacion,correo,telefono,
estado,tipo_pago,tipo_servicio, fecha_ingreso,tipo_mora,saldo_Q, anticipo)values(
'Guillermo Pisqui','333232-4','Avenida circunvalacion, Reu','calzada las palmas','guillermo.pisqui@gmail.com',
'3456-9876', 'ACTIVO',1,1,'2018-08-12',1,23,6
);