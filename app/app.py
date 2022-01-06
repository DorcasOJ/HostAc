from flask import Flask, redirect, render_template, request, Markup, jsonify
from os import path, walk
import random, time
import requests
import pandas as pd, numpy as np

app = Flask(__name__)

@app.route('/')
def home_page():
    return render_template('home.html')