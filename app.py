from flask import Flask, render_template
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

if __name__ == "__main__":
    app.run()
