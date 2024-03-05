import json
from flask import Flask, request, jsonify
from flask_swagger import swagger
from flask_swagger_ui import get_swaggerui_blueprint

SWAGGER_URL="/swagger"
API_URL="/static/swagger.json"

swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config = {
        'app_name': 'Access API'
    }
)

app = Flask(__name__)

@app.route('/users/<id>', methods=['GET'])
def get_users(id):
    return jsonify({'postcode': '2515', 'gender': 0, 'age': 45})

@app.route('/users/<id>/recommendations', methods=['GET'])
def get_users_recommendations(id):
    return jsonify({'predictions': [{'cafe': 'GP8pJPxal1uiaiorF2mlYgOyTdVK93fF', 'ranking': 1.0}, {'cafe': 'LhtGFngEUFwQZY4sGPYIz7E9wOBBERVy', 'ranking': 0.94}, {'cafe': 'aBKnArkPDomsvZPsT17j3sxkVczjcOpb', 'ranking': 0.82}]})


app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)

app.run(debug=True)