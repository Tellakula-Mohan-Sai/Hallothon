from pymongo import MongoClient
from pymongo.server_api import ServerApi
uri = "mongodb+srv://mohannitin28:Hallothon@hallothon.ivu6u5i.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri)

mydb = client['Hallothon']
mycol = mydb['User_details']
print(mydb.list_collection_names())

def authenticate(email,password):
    query = {'email':email,'password':password}
    return mycol.find_one(query)

