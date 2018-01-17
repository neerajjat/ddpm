from flask import Flask, render_template, request
from flask_pymongo import PyMongo
import pickle
import hashlib

attributes = ["code","bug","test", "review"]

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://admin:password@ds157653.mlab.com:57653/ddpm'

mongo = PyMongo(app)

@app.route("/")
def hello():
    return render_template('index.html', attributes=attributes)

@app.route("/testmongo")
def testmongo():
    mongo.db.employees.insert({'abcd':'abcd'})
    return "Inserted"

@app.route("/save_template", methods=['POST'])
def save_template():
    data = request.get_json()
    checksum = hashlib.md5(pickle.dumps(data)).hexdigest()
    data.update({'checksum':checksum})
    status = mongo.db.templates.insert(data)
    print 'Inserted template with data:%s with status:%s' % (data, status)
    return str(data)

@app.route("/get_templates", methods=['GET'])
def get_templates():
    data = mongo.db.templates.find()
    result = []
    for item in data:
        result.append(item)
    print 'Result:', result
    return str(result)

if __name__ == "__main__":
    app.run()
