insert into usuarios(usuario, contrase�a) values('david','abc');
insert into usuarios(usuario, contrase�a) values('pancho','abc');
insert into usuarios(usuario, contrase�a) values('daniel','abc');
insert into usuarios(usuario, contrase�a) values('guillermo','abc');

update usuarios set  rol=1 where id in(1,2,3,4)
update usuarios set  estado='ACTIVO' where id in(1,2,3,4)

update usuarios set  puesto='TECNICO' where id in(1,2)

select * from usuarios

select * from roles

insert into roles(nombre)values('admin')
