go
-- first step
if db_id('SkyrangerDB') is not null begin
   print 'db exists'
   alter database SkyrangerDB set single_user with rollback immediate
   drop database SkyrangerDB;
end

--second step creacion de base de datos
create database SkyrangerDB;
go

--third step usamos la base de datos
use SkyrangerDB;
go


--four step, tabla usuario
create table usuarios(
	id int primary key not null identity,
	usuario varchar(50),
	contraseña varchar(100),
	puesto varchar(50),
	estado varchar(50),
	rol int not null,
	constraint id_rol foreign key(rol) references roles(id)
);
go


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

-- nine step tabla clientes
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



--ten step tabla marcas


--tabla lote
create table lotes(
	id int primary key not null identity,
	codigo_lote varchar(40),
	fecha_compra date,
	fecha_activacion date,
	precio_total float,
	precio_unitario float,
	id_proveedor int,
	numero_dispositivos int,
	duracion_plan_datos varchar(50),
	fecha_vencimiento_plan date,
	constraint id_proveedor foreign key(id_proveedor) references proveedores(id) 
);
go


--eleven step tabla sims


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

--tabla de vehiculos
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

--aca estoy trabajando
create table historialVehiculo(
	id int not  null identity primary key,
	fecha date,
	id_gps_entrada int not null,
	id_gps_salida int not null,
	id_vehiculo int not null,
	id_tecnico int not null,
	comentario varchar(max),
	constraint fk_idVehiculo foreign key(id_vehiculo) references vehiculos(id),
	constraint fk_idTecnico foreign key(id_tecnico) references usuarios(id),
	constraint fk_gpsSalida foreign key(id_gps_salida) references gps(id),
	constraint fk_gpsEntrada foreign key(id_gps_entrada) references gps(id)
);

--tabla de GPS
create table gps(
	id int not null identity primary key,
	id_lote int not null,
	id_marca int not null,
	modelo varchar(50),
	idsis varchar(50),
	imei varchar(50),
	numero_carcaza int not null,
	version_firmware varchar(50),
	estado varchar(30),
	constraint fk_idMarca_marcas foreign key(id_marca) references marcas(id),
	constraint fk_idLote_lotes foreign key(id_lote) references lotes(id)
);