from flask import Flask, jsonify
import pandas as pd
import json
import plotly
import plotly.express as px
app = Flask(__name__)
@app.route('/')
def mass_shootings():
    df=pd.read_csv('data/Mass_Shooting_SQL_Export_data.csv')
    results = df.to_dict()
    return jsonify(results)
