var toggleButton = document.getElementById('toggle_record');
var downloadButton = document.getElementById('download');
var resultElement = document.getElementById('result');

var recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;
recognition.continuous = true;

var isRecording = false;
var finalTranscript = '';

toggleButton.addEventListener('click', () => {
  if (isRecording) {
    recognition.stop();
    toggleButton.textContent = 'Start';
    downloadButton.style.display = 'inline'; // Show the download button
  } else {
    recognition.start();
    toggleButton.textContent = 'Stop';
    downloadButton.style.display = 'none'; // Hide the download button
  }
  isRecording = !isRecording;
});

recognition.addEventListener('result', (event) => {
  var interimTranscript = '';
  
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      finalTranscript += event.results[i][0].transcript;
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  
  resultElement.value = finalTranscript + interimTranscript;
});

downloadButton.addEventListener('click', () => {
  var blob = new Blob([resultElement.value], { type: 'text/plain' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'transcript.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

recognition.addEventListener('error', (event) => {
  console.error('Speech recognition error detected: ' + event.error);
  toggleButton.textContent = 'Start';
  isRecording = false;
  downloadButton.style.display = 'inline'; // Show the download button
});

recognition.addEventListener('end', () => {
  if (isRecording) {
    recognition.start(); // Restart recognition if it ended unintentionally
  }
});
