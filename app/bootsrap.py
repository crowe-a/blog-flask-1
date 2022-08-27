from flask import Flask,render_template

app=Flask(__name__)


@app.route("/")
def giriş():
    return render_template("giriş.html")
@app.route("/anasayfa")
def anasayfa():
    return render_template ("anasayfa.html")

@app.route("/hakkımda")
def hakkımda():
    return render_template("hakkımda.html")




    