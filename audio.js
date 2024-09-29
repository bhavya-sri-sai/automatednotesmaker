const speechBtn = document.querySelector('#convert_btn');
const text = document.querySelector('#text');

const voiceList = document.querySelector('select');
const isLoading = false;

// const voices = [
//   { name: 'Kevin', voiceGender: 'en-US_Kevin' },
// ];

// function getVoices() {
//   for (let voice of voices) {
//     let option = `<option value="${voice.voiceGender}" data-gender="${voice.voiceGender}">${voice.name}</option>`;
//     voiceList.insertAdjacentHTML('beforeend', option);
//   }
// }
// getVoices();

const func = async () => {
  if (document.querySelector('#download')) {
    document.querySelector('#download').remove();
  }
  // console.log(voiceList.value);

  const data = new FormData();
  data.append('msg', text.value);
  data.append('lang', 'Salli');
  data.append('source', 'ttsmp3');


  const url = 'https://natural-text-to-speech-converter-at-lowest-price.p.rapidapi.com/';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': '2a61aac8b6mshe90ad288a5ace7ap1f1735jsnd4b2c12b4239',
		'x-rapidapi-host': 'natural-text-to-speech-converter-at-lowest-price.p.rapidapi.com',
		// 'Content-Type': 'application/json'
		// 'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
    },
    // // body: JSON.stringify({
    // //   ttsService: 'polly',
    // //   audioKey: 'ff63037e-6994-4c50-9861-3e162ee56468',
		// // storageService: 's3',
    // //   text: `<speak><p>${text.value}</p></speak>`,
    // //   voice: {
    // //     value: '',
    // //     // value: voiceList.options[voiceList.selectedIndex].getAttribute('data-gender'),
    // //     lang: 'en-US'
    // //   },
    // //   audioOutput: {
    // //     fileFormat: 'mp3',
    // //     sampleRate: 24000
    // //   }
    // }),

    body: data
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log('rs:',result);
    speechBtn.textContent = 'Convert to Speech';
    const aud = new Audio();
    aud.src = result.URL;
    aud.play();
    speechBtn.insertAdjacentHTML(
      'afterend',
      `<button id="download"><a style="text-decoration:none;color:#fff"  href="${result.URL}">Download Audio</a></button>`
    );
  } catch (error) {
    console.error(error);
  }
};

speechBtn.addEventListener('click', (e) => {
  speechBtn.textContent = 'Loading...';
  e.preventDefault();
  console.log(
    voiceList.options[voiceList.selectedIndex].getAttribute('data-gender')
  );
  func();
});