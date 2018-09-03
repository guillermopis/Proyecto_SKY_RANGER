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






