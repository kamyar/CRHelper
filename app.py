
"""
    Main file, used to bootstrap flask app
"""

import os

import json

from flask import Flask, render_template, g

import config


app = Flask(__name__)





@app.route('/')
def hello_world():
    context = {
        'cards' : config.cards_info
    }
    return render_template("index.html", context=context)

@app.route('/static/')
def send_js(path):
    return send_from_directory('static', path)



app.run(port=8888, host='0.0.0.0', debug=config.is_debug)
