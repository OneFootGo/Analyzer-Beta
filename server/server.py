from flask import Flask, jsonify
from flask_cors import CORS

#app instance
app = Flask(__name__)
CORS(app)

#/api/home route
@app.route('/api/home', methods=['GET'])
def return_home():
    return jsonify({
        'message': 'Welcome to the home page',
        'people': ["jack", "jill", "john"],
        "test": "test"
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)