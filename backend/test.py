from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/doctor', methods=['POST'])
def doctor():

    data = request.get_json(force=True)
    input_features = [data['input_features']]
    print(input_features)

    model = joblib.load("doctor_model.pkl")
    y_pred = model.predict(input_features)
    prediction_label = 'Capable' if y_pred[0] == 1 else 'Not Capable'
    return jsonify(prediction_label=prediction_label)

    
@app.route('/engineer', methods=['POST'])
def engineer():

    data = request.get_json(force=True)
    input_features = [data['input_features']]
    print(input_features)

    model = joblib.load("engineer_model.pkl")
    y_pred = model.predict(input_features)
    prediction_label = 'Capable' if y_pred[0] == 1 else 'Not Capable'
    print('engineer')
    return jsonify(prediction_label=prediction_label)

@app.route('/accountant', methods=['POST'])
def accountant():

    data = request.get_json(force=True)
    input_features = [data['input_features']]
    print(input_features)

    model = joblib.load("accountant_model.pkl")
    y_pred = model.predict(input_features)
    prediction_label = 'Capable' if y_pred[0] == 1 else 'Not Capable'
    print('accountant')
    return jsonify(prediction_label=prediction_label)  

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # if 'PORT' env var is not found, default to 5000
    
    app.run(host='0.0.0.0', port=port)
