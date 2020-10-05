from flask import Flask,jsonify,request,make_response
from flask_mysqldb import MySQL
from datetime import datetime
from flask_cors import CORS 
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

app=Flask(__name__)

app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']=''
app.config['MYSQL_DB']='mydatabase'
app.config['MYSQL_CURSORCLASS']='DictCursor'
app.config['JWT_SECRET_KEY']='secret'

mysql=MySQL(app)

bcrypt=Bcrypt(app)
jwt=JWTManager(app)
CORS(app)


@app.route('/user/register',methods=['POST'])
def register():
    cur=mysql.connection.cursor()
    first_name=request.get_json()['first_name']
    last_name=request.get_json()['last_name']
    email=request.get_json()['email']
    password=bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created=datetime.utcnow()

    cur.execute("INSERT INTO user (first_name,last_name,email,password,created) VALUES ('"
    +str(first_name)+"','"
    +str(last_name)+"','"
    +str(email)+"','"
    +str(password)+"','"
    +str(created)+"')"
    )

    mysql.connection.commit()

    result ={
     "first_name":first_name,
     "last_name":last_name,
     "email":email,
     "password":password,
     "created":created

    }
    return jsonify({"result":result})

@app.route('/user/login',methods=['POST'])
def login():
    cur=mysql.connection.cursor()
    email=request.get_json()['email']
    password=request.get_json()['password']
    result = ""
    cur.execute("SELECT * FROM user where email='"+str(email)+"'")

    rv=cur.fetchone()
    if bcrypt.check_password_hash(rv['password'],password):
        access_token=create_access_token(identity={'first_name':rv['first_name'],'last_name':rv['last_name'],'email':rv['email']})
        result=jsonify({'token':access_token})
    else:
        result=jsonify({"error":"invalid username and password"})

    return result



@app.route('/home/merchant',methods=['GET'])
def merchant():
    cur=mysql.connection.cursor()    
    cur.execute("SELECT * FROM transactiondatabase")

    res = cur.fetchall()    
    merchantRes = []

    '''jsonify({"Result":res})`indx``Date_time``merchantId``StoreId``TerminalId`,
     `TransactionId`, `Amount`, `PaymentStatus`, `VendStatus`, `Balance`
    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)'''

    for row in res:
        response_body = {
            "index": row['indx'],
            "date_time": row['Date_time'],
            "merchantId": row['merchantId'],
            "storeId": row['StoreId'],
            "terminalId": row['TerminalId'],
            "transactionId": row['TransactionId'],
            "amount": row['Amount'],
            "paymentStatus": row['PaymentStatus'],
            "vendorStatus": row['VendStatus'],
            "error": '',
            "userCancel": '',
            "balance": row['Balance'],
        }
        merchantRes.append(response_body)

    result = make_response(jsonify(merchantRes), 200)

    return result

@app.route('/home/device',methods=['GET'])
def device():
    cur=mysql.connection.cursor()    
    cur.execute("SELECT d.MerchantId, d.StoreId, d.TerminalId, d.Location, u.email as UserId, d.Status FROM device as d JOIN user as u on u.Id = d.userId")

    res = cur.fetchall()    
    deviceRes = []
    
    '''jsonify({"Result":res})`indx``Date_time``merchantId``StoreId``TerminalId`,
     `TransactionId`, `Amount`, `PaymentStatus`, `VendStatus`, `Balance`
    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)'''

    for row in res:
        response_body = {
            "merchantId": row['MerchantId'],
            "storeId": row['StoreId'],
            "terminalId": row['TerminalId'],
            "userId": row['UserId'],
            "location": row['Location'],
            "status": row['Status']
        }
        deviceRes.append(response_body)

    result = make_response(jsonify(deviceRes), 200)

    return result

@app.route('/home/userDevice',methods=['POST'])
def userDevice():
    cur=mysql.connection.cursor()
    email=request.get_json()['email']

    cur.execute("SELECT d.MerchantId, d.StoreId, d.TerminalId, d.Location, u.email as UserId, d.Status FROM device as d JOIN user as u on u.Id = d.userId where u.email='"+str(email)+"'")

    res = cur.fetchall()    
    deviceRes = []
    
    '''jsonify({"Result":res})`indx``Date_time``merchantId``StoreId``TerminalId`,
     `TransactionId`, `Amount`, `PaymentStatus`, `VendStatus`, `Balance`
    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)'''

    for row in res:
        response_body = {
            "merchantId": row['MerchantId'],
            "storeId": row['StoreId'],
            "terminalId": row['TerminalId'],
            "userId": row['UserId'],
            "location": row['Location'],
            "status": row['Status']
        }
        deviceRes.append(response_body)

    result = make_response(jsonify(deviceRes), 200)

    return result

