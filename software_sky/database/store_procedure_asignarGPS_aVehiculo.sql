--procedimiento almacenado para asignar de pgs
create procedure sp_asignarGps
	@fecha date,
	@id_gps_entrada int,
	@id_gps_salida int,
	@idVehiculo int,
	@id_tecnico int,
	@comentario varchar(max),
	@id_gps int
	as
begin
	begin try
		begin transaction
			--ingresarmos el movimiento en historialVehiculo
			insert into historialVehiculos(fecha,id_gps_entrada,id_gps_salida,id_vehiculo,id_tecnico,comentario)values(
			@fecha,@id_gps_entrada,@id_gps_salida,@idVehiculo,@id_tecnico,@comentario);
			--actualizamos el estado del gps de entrada
			update gps set estado='ACTIVO' where id=@id_gps
		commit transaction;
	end try
	begin catch
	--se produjo un error, deshacemos los cambios
		rollback transaction
	end catch
end
go