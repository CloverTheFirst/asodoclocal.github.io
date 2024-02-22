from flask import Flask, render_template, request, flash
from waitress import serve

app = Flask(__name__)
app.secret_key="hi"

@app.route("/")
def index():
    flash("namae wa?")
    return render_template("index.html")

@app.route("/greet", methods=["POST", "GET"])
def greet():
    flash("Hi" + str(request.form['name_input']) + ", ureshi!")
    return render_template("index.html")

if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=8080)