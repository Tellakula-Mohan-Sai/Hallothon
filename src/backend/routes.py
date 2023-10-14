from flask import Flask, request,Response
import db
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/')
@app.route('/login', methods =['GET', 'POST'])
def login():
    msg = ''
    status = 201
    if request.method == 'GET':
        username = request.args.get('email')
        password = request.args.get('password')
        print(username,password)
        account = db.authenticate(username,password)
        if account:
            msg = 'Success'
            status = 200
        else:
            msg = 'Incorrect username / password !'
    
    response = Response(msg, status=status)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == "__main__":
    app.run()