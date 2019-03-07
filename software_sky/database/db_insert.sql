use SkyrangerDB;
insert into usuarios(usuario, contraseña, rol, puesto,estado) values('guillermo','123',1,'TECNICO','ACTIVO');
insert into usuarios(usuario, contraseña) values('pancho','abc');
insert into usuarios(usuario, contraseña) values('daniel','abc');
insert into usuarios(usuario, contraseña) values('guillermo','abc');

update usuarios set  rol=1 where id in(1,2,3,4)
update usuarios set  estado='ACTIVO' where id in(1,2,3,4)

update usuarios set  puesto='TECNICO' where id in(1,2)

select * from usuarios

select * from roles

insert into roles(nombre)values('admin')

