import whisper

def transcribe_audio(file_path):
    try:
        # Load the model
        model = whisper.load_model("base")
        
        # Transcribe the audio file
        result = model.transcribe(file_path)
        
        # Print the transcribed text
        return (result["text"])
        
    except Exception as e:
        print(f"An error occurred: {e}")

# Specify the path to your audio file
audio_file_path ="C:/Users/LENOVO/Downloads/multiple speakersmp3 audio file.mp3"
# Transcribe the audio file
transcribe_audio(audio_file_path)
