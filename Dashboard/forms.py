from wtforms import Form, StringField, PasswordField, validators

class RegistrationForm(Form):

    mensaje = StringField('mensaje', [validators.Length(min=1, max=320),
    	validators.DataRequired()])

    

