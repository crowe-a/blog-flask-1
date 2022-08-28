from flask import Flask,render_template

app=Flask(__name__)



@app.route("/makale1")
def makale1():
    return render_template("includes/makaleler/makale1.html")

@app.route("/makale2")
def makale2():
    return render_template("includes/makaleler/makale2.html")

@app.route("/")
def giriş():
    return render_template("anasayfa.html")
@app.route("/anasayfa")
def anasayfa():
    return render_template ("anasayfa.html")

@app.route("/hakkımda")
def hakkımda():
    return render_template("hakkımda.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/makaleler")
def makaleler():
    return render_template("makaleler.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/fullpack")
def full():
    return render_template("fullpack.html")













