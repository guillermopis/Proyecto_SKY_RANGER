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

--five step
create table tipo_de_pago(
	id int primary key not null identity,
	nombre varchar(50)
);
go

--six step
create table tipo_mora(
	id int primary key not null identity,
	descripcion varchar(50),
	porcentaje int not null
);
go
-- seven step
create table tipo_servicio(
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
	constraint fk_tipoPago foreign key(tipo_pago) references tipo_de_pago(id),
	constraint fk_tipoServicio foreign key(tipo_servicio) references tipo_servicio(id),
	constraint fk_tipoMora foreign key(tipo_mora) references tipo_mora(id)
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
