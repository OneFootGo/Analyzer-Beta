from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename

#app instance
app = Flask(__name__)
CORS(app)

#/api/home route
@app.route('/api/home', methods=['GET'])
def return_home():
    return jsonify({
        'message': 'Welcome to the home page',
    })

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({
            'error': 'No file part'
        }), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({
            'error': 'No selected file'
        }), 400
    
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join('uploads/', filename)
        file.save(file_path)

        return jsonify({
            'message': 'File uploaded successfully',
            'filename': filename
        }), 200


if __name__ == "__main__":
    app.run(debug=True, port=8080)