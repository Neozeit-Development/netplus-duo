"""Flask backend for NetPlus Duo. Serves the SPA and the questions API."""
import json
import re
from pathlib import Path

from flask import Flask, jsonify, render_template

BASE_DIR = Path(__file__).resolve().parent
QUESTIONS_JS_PATH = BASE_DIR / "static" / "questions.js"

app = Flask(__name__)


def load_questions():
    js_source = QUESTIONS_JS_PATH.read_text()
    match = re.search(r"const QUESTIONS = (.*);\s*$", js_source, re.DOTALL)
    return json.loads(match.group(1))


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/questions")
def api_questions():
    return jsonify(load_questions())


if __name__ == "__main__":
    app.run(debug=True, port=5000)
