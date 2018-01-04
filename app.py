from flask import Flask, render_template, request
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://admin:password@ds157653.mlab.com:57653/ddpm'

mongo = PyMongo(app)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/testmongo")
def testmongo():
    mongo.db.employees.insert({'abcd':'abcd'})
    return "Inserted"

@app.route("/save_template", methods=['POST'])
def save_template():
    data = request.get_json()
    status = mongo.db.employees.insert(data)
    print 'Inserted template with data:%s with status:%s' % (data, status)
    return str(data)

if __name__ == "__main__":
    app.run()
