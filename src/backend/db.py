from pymongo import MongoClient
from pymongo.server_api import ServerApi
uri = "mongodb+srv://mohannitin28:Hallothon@hallothon.ivu6u5i.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri)

mydb = client['Hallothon']
mycol = mydb['User_details']
print(mydb.list_collection_names())

def authenticate(email,password):
    query = {'_id':email,'password':password}
    return mycol.find_one(query)

def register(name,email,mobile,score,role,password):
    my_dict = {"name":name,"_id":email,"mobile":mobile,"score":score,"role":role,"password":password}
    try:
        if(mycol.find_one({"_id":email})):
            return False
        mycol.insert_one(my_dict)
        return True
    except Exception as e:
        print(e)
        return False
    
def update_score(id,points):
    my_dict = {"_id":id}
    val = mycol.findone(my_dict)
    val['score'] = val['score'] + points
    return True