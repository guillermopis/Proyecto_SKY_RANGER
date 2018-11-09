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


--six step tipo de pago
create table tipo_de_pago(
	id int primary key not null identity,
	nombre varchar(50)
);
go

--seven step creacion tipo de mora
create table tipo_mora(
	id int primary key not null identity,
	descripcion varchar(50),
	porcentaje int not null
);
go
-- eight step tipo de servicio  
create table tipo_servicio(
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
	constraint fk_tipoPago foreign key(tipo_pago) references tipo_de_pago(id),
	constraint fk_tipoServicio foreign key(tipo_servicio) references tipo_servicio(id),
	constraint fk_tipoMora foreign key(tipo_mora) references tipo_mora(id)
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

--select *from sims
--drop table sims
--eleven step tabla sims
create table sims(
	id int primary key not null identity,
	id_marca varchar(40),
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
	constraint fk_idlote foreign key(id_lote) references lotes(id)
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
