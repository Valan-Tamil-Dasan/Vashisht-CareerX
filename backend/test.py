from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():

    data = request.get_json(force=True)
    input_features = [data['input_features']]
    print(input_features)

    model = joblib.load("doctor_model.pkl")
    y_pred = model.predict(input_features)
    prediction_label = 'Capable' if y_pred[0] == 1 else 'Not Capable'
    return jsonify(prediction_label=prediction_label)

    
   

if __name__ == '__main__':
    app.run(port=5000, debug=True)
