#!/usr/bin/python

from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
CORS(app)


class BackEnd(Resource):
    @staticmethod
    def get():
        return {"items": "item"}


api.add_resource(BackEnd, "/")


if __name__ == '__main__':
    app.run(debug=True)
