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
    if request.method == 'POST':
        username = request.json['email']
        password = request.json['password']
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

@app.route('/register',methods=['GET','POST'])
def registration():
        name = request.json['name']
        email = request.json['email']
        password = request.json['password']
        mobile = request.json['mobile']
        role = 0
        score = 1000
        msg = 'Failure'
        status = 201
        account = db.register(name,email,mobile,score,role,password)
        if(account):
             msg =  "Success"
             status = 200
        elif(account == False):
            msg = "User already exists/Invalid data"
            status = 250
        response = Response(msg, status=status)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

@app.route('/leaderboard',methods=['GET','POST'])
def leaderboard(id,points):
     id = request.args.get('id')
     points = request.args.get('points')
     val = db.update_score(id,points)
     response = Response(val, status=200)
     response.headers.add("Access-Control-Allow-Origin", "*")
     return response
     

if __name__ == "__main__":
    app.run()