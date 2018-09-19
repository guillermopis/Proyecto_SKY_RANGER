go
-- first step
if db_id('SkyrangerDB') is not null begin
   print 'db exists'
   alter database SkyrangerDB set single_user with rollback immediate
   drop database SkyrangerDB;
end

--second step
create database SkyrangerDB;
go

--third step
use SkyrangerDB;
go


--four step, table user
create table usuarios(
	id int primary key not null identity,
	usuario varchar(50),
	contraseña varchar(100)
);
go

--drop table proveedores
--select *from proveedores
--five step tabla proveedores
create table proveedores(
	id int primary key not null identity,
	nombre varchar(50),
	nit varchar(30),
	direccion varchar(60),
	telefono varchar(50),
	extension int,
	correo_empresa varchar(25),
	estado varchar(25),
	contacto varchar(50),
	fecha_relacion date,
	correo_contacto varchar(25)
);
go

--five step
create table tipo_de_pagos(
	id int primary key not null identity,
	nombre varchar(50)
);
go

--six step
create table tipo_moras(
	id int primary key not null identity,
	descripcion varchar(50),
	porcentaje int not null
);
go
-- seven step
create table tipo_servicios(
	id int primary key not null identity,
	nombre varchar(50),
);
go

-- eight step
create table clientes(
	id int primary key not null identity,
	nombre varchar(50),
	nit varchar(25),
	direccion_fiscal varchar(100),
	direccion_facturacion varchar(100),
	correo varchar(50),
	telefono varchar(25),
	estado varchar(25),
	tipo_pago int,
	tipo_servicio int,
	fecha_ingreso date,
	tipo_mora int ,
	saldo_Q float,
	anticipo float,
	constraint fk_tipoPago foreign key(tipo_pago) references tipo_de_pagos(id),
	constraint fk_tipoServicio foreign key(tipo_servicio) references tipo_servicios(id),
	constraint fk_tipoMora foreign key(tipo_mora) references tipo_moras(id)
);
go

--ten step tabla marcas
create table marcas(
	id int primary key not null identity,
	nombre varchar(50),
	descripcion varchar(100)
);go

--tabla lote
create table lotes(
	id int primary key not null identity,
	codigo_lote varchar(40),
	fecha_compra date,
	precio_total float,
	precio_unitario float,
	id_proveedor int,
	numero_dispositivos int,
	duracion_plan_datos varchar(50),
	fecha_vencimiento_plan date
);
go 


--eleven step tabla sims
create table sims(
	id int primary key not null identity,
	id_marca int,
	compania_telefonica varchar(70),
	plan_de_datos varchar(50),
	fecha_vencimiento_plan date,
	fecha_inicio_plan date,
	precio_del_plan float,
	numero_telefono varchar(25),
	iccid varchar(50),
	apn varchar(60),
	id_lote int,
	estado varchar(35),
	constraint fk_idlote foreign key(id_lote) references lotes(id),
	constraint fk_idmarca foreign key(id_marca)	references marcas(id)
);
go




-- Modulo de seguridad
create table Modulos (
  id	    int		  identity	not null	primary key,
  nombre    varchar(30)	  unique	not null 	
)

create table Formularios (
  id		int		not null	identity	primary key,
  nombre	varchar(30)	not null	unique,
  ruta		varchar(100)			unique,
  modulo	int		not null	foreign key references Modulos(id)
)

create table Roles (
  id		int		not null	identity	primary key,
  nombre	varchar(30)	not null	unique
)

create table Permisos (
  id		int		not null	identity	primary key,
  descripcion	varchar(30)	not null	unique
)

alter table usuarios 
add rol int 

alter table usuarios
add foreign key (rol) references Roles(id)


create table FormRoles (
  id		int	not null	identity	primary key,
  formulario	int	not null	foreign key	references Formularios(id),
  rol		int		not null,
  constraint	fk_rolformulario	foreign key (rol)	references Roles(id)
)


create table PermisoFormRoles (
  id		int	not null	identity	primary key,
  formrol	int	not null	foreign key references FormRoles(id),
  permiso	int	not null	foreign key references Permisos(id)
)


--modulo de vehiculos

-- crear tabla de vehiculos
--drop table vehiculos
go
create table vehiculos(
	id int not null identity primary key,
	clienteId	int,
	marca varchar(50),
	linea varchar(50),
	modelo varchar(50),
	color varchar (50),
	tipo varchar(50),
	placa varchar(15),
	motor varchar(50),
	chasis varchar(50),
	estado varchar(20),
	precio_servicio float,
	fecha_instalacion date,
	constraint fk_idcliente foreign key(clienteId) references clientes(id)
);
go
