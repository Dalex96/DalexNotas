import pymysql.cursors

class Db:

	def connection(self, datos):	
		self.cnx = pymysql.connect(**datos, cursorclass=pymysql.cursors.DictCursor)
		print("Conectado!!");
		return self.cnx

	def cur(self):
		self.cnx.close()

















#dat = Db()
#datos = {
#	  	'user': 'esclavo',
#	  	'password': '1234',
#	  	'host': '127.0.0.1',
#	  	'database': 'esclavo'
#			}

#a = dat.connection(datos)


		#self.cursor.execute("INSERT INTO persona (nombre,password) VALUES ('','')")
		#self.cnx.commit()	
		#self.cursor.close()

	#"MOSTRAR REGISTRO EN LA DB"

#cursor.execute("SELECT nombre,password FROM persona")

#for (nombre,password) in cursor:
 #   print("nombre: " + nombre + ", password: " + password)
