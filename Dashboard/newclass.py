import Mysql
import time

class Registro:
	def __init__(self):
		self.mensaje = "",
		self.id = None,
		self.hora = time.strftime("%X"),
		self.fecha = time.strftime("%d/%m/%y"),
		datos = {
		  	'user': 'esclavo',
		  	'password': '1234',
		  	'host': '127.0.0.1',
		  	'database': 'esclavo'
			}
		self.conx = Mysql.Db().connection(datos)
		self.cursor = self.conx.cursor()
	def insertar(self):
		self.cursor.execute("INSERT INTO notas (anotacion,fecha,hora) VALUES(%s,%s,%s)",(self.mensaje,self.fecha,self.hora))
		self.conx.commit()
	def editar(self):
		self.cursor.execute("UPDATE notas SET anotacion = %s, fecha = %s, hora = %s WHERE id = %s",(self.mensaje,self.fecha,self.hora,self.id))
		self.conx.commit()
	def delet(self):
		self.cursor.execute("DELETE FROM notas WHERE id = %s",(self.id))		
		self.conx.commit()
	def mostrar(self):
		self.cursor.execute("SELECT * FROM notas")
		result = self.cursor.fetchall()
		return result
	def mostrarid(self):
		self.cursor.execute("SELECT id,anotacion FROM notas")
		resulta = self.cursor.fetchall()
		return resulta
		

#_______________________________________
#										|	
#			PRUEBAS DE LA CLASE			|
#										|	
#										|
#llamado = Registro()				
#	cursor = llamado.conx.cursor()		|
#	llamado.delet("")					|
#	llamado.insertar("","")				|
#	llamado.editar("","","")			|
#llamado.prac()						
#	llamado.conx.commit()				|
#										|
#_______________________________________|