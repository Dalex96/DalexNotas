from flask import Flask
from flask import render_template,request
import werkzeug
import newclass
import json
import forms

app = Flask(__name__)

#######################---API---#############################
@app.route('/')
def signUp():
    return render_template('index.html')

@app.route('/x')
def sign():
    return "hola", 200  


@app.route('/signUp', methods=['GET'])
def MostrarMsj():
	person = newclass.Registro()
	persons = person.mostrarid()
	todojson = json.dumps(persons)
	return todojson, 200

@app.route('/signUp', methods=['POST'])
def signUpUser():
	person = newclass.Registro()
	data_json = json.loads(request.data.decode())
	data = werkzeug.MultiDict(mapping=data_json)
	form = forms.RegistrationForm(data)
	person.mensaje = data_json["mensaje"]
	valid = form.validate()
	err = form.errors
	
	if not valid:
		return "%s"%err, 400		
	
	persons = person.insertar()
	return "", 204

@app.route('/signUp', methods=['DELETE'])
def signUpDelUser():
	person = newclass.Registro()
	data_json = json.loads(request.data.decode())
	person.id = data_json["delnum"]
	persons = person.delet()
	return "", 204

@app.route('/signUp', methods=['PUT'])
def editartxt():
	person = newclass.Registro()
	data_json = json.loads(request.data.decode())
	data = werkzeug.MultiDict(mapping=data_json)
	form = forms.RegistrationForm(data)
	person.mensaje = data_json["mensaje"]
	person.id = data_json["id_msj"]
	valid = form.validate()
	err = form.errors
	
	if not valid:
		return "%s"%err, 400		
	
	persons = person.editar()
	return "", 204

if __name__ == '__main__':
	app.run(debug = True, port= 5000)