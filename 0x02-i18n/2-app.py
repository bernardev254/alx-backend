#!/usr/bin/env python3
"""babel config module"""


import os
from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


class Config(object):
    """configurations for babel instance"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object("2-app.Config")


@babel.localeselector
def get_locale() -> str:
    """get best match locale for our app"""
    return request.accept_languages.best_match(app.config["LANGUAGES"])


@app.route("/")
def hello() -> str:
    """root route"""
    return render_template("2-index.html")


if __name__ == "__main__":
    host = os.getenv("API_HOST", "0.0.0.0")
    port = os.getenv("API_PORT", "5000")
    app.run(host=host, port=port)
