import json
from flask import Flask, request, jsonify, make_response
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

@app.route('/users/<id>', methods=['PUT'])
def put_users(id):
    return jsonify({"Status":"Updated"})
    """ return jsonify({'postcode': '2515', 'gender': 0, 'age': 45}) """

@app.route('/users/<id>/recommendations', methods=['GET'])
def get_users_recommendations(id):
    return jsonify({'predictions': [{'cafe': 'GP8pJPxal1uiaiorF2mlYgOyTdVK93fF', 'ranking': 1.0}, {'cafe': 'LhtGFngEUFwQZY4sGPYIz7E9wOBBERVy', 'ranking': 0.94}, {'cafe': 'aBKnArkPDomsvZPsT17j3sxkVczjcOpb', 'ranking': 0.82}]})

@app.route('/users/<id>/responses', methods=['PUT'])
def put_responses(id):
    message = request.json
    """ return f"user ID: {id}, questions answered: {message["questionsIDList"]}" """
    return 204

@app.route('/users/<id>/ranking', methods=['PUT'])
def put_ranking(id):
    message = request.json
    return 204
    """ return f"user ID: {id}, marks: {message["cafeID"]}" """



#Run swagger 
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)
#Run flask
app.run(debug=True)