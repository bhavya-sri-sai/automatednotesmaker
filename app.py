from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
from my_speech_recognition import transcribe_audio
from summarizationfeature import extractive_summary
from keywordextraction import extract_keywords
from NER import analyze_text # type: ignore
app = Flask(__name__)
CORS(app)

# import speech_recognition as sr
# import os



# @app.route('/api/send-message', methods=['POST'])
# def receive_message():
#     message = request.json['message']
#     print(message)
#     # Process the message (e.g., perform some computation)
#     # For demonstration, let's just return the message reversed
#     return jsonify({'response': message[::-1]})


@app.route('/save_audio', methods=['POST'])
def save_audio():
    print('check from server')
    print('body',request.form.get('jsonData'))
    features = json.loads(request.form.get('jsonData'))
    # print('Summarize?:',features['Summarize'])
    # print('Keywords?:',features['Keywords'])
    audio_file = request.files['audioFile']
    # audio_file = None
    save_path = 'C:/Users/LENOVO/OneDrive/Documents/new folder/Pybackend/Audios'
    if audio_file:
        audio_file.save(os.path.join(save_path, audio_file.filename))
        text = transcribe_audio(os.path.join(save_path, audio_file.filename))
        print('recognized')
        print(text)
        if features['Summarize'] == 1:
            print('summarizing')
            text= extractive_summary(text)
            print('summarized')
        if features['Keywords'] ==1:
            text = extract_keywords(text)
        if features['Entities']==1:
            text=analyze_text(text)
        return jsonify({'status':'success',"text":text})
    else:
        return jsonify({'status':'fail'})

if __name__ == '__main__':
    extra_dirs = ['I:/JS/notes-maker-main copy/Audios'] 
    app.run(debug=False, port=5501, use_reloader=False, extra_files=extra_dirs)
