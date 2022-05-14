#!/usr/bin/env python3
"""basic flask app"""


from flask import Flask, request
from flask import render_template
import os

app = Flask(__name__)


@app.route("/")
def my_root():
    """handles the root route"""
    return render_template("0-index.html")


if __name__ == "__main__":
    port = os.getenv("API_PORT", "5000")
    host = os.getenv("API_HOST", "0.0.0.0")
    app.run(host=host, port=port)
