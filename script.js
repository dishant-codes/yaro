var btn = document.querySelector('.btn');
var content = document.querySelector('.content');

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var speech = new SpeechSynthesisUtterance();
document.getElementById('loading-bar').classList.add('hide');
 

recognition.onresult = function(event){
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


btn.addEventListener('click', ()=> {
    recognition.start();
    document.getElementById('btn').classList.add('hide');
    document.getElementById('speak').classList.remove('hide');
})
function readOutLoud(message){
    
    if(message.includes('how are you')){
        const greetings = ['I\'m well! How can i help you'];
        var emoji = ['🙂'];
        const finalText = greetings[Math.floor(Math.random()* greetings.length)];
        content.textContent = finalText+emoji;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        speech.text = finalText;
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
    }
    else if(message.includes('hello Yaro')){
        const greetings = ['hello sir...'];
        var emoji = ['🥰'];
        const finalText = greetings[Math.floor(Math.random()* greetings.length)];
        content.textContent = finalText+emoji;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        speech.text = finalText;
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
    }
    else if(message.includes('what time')){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = ['its '+ hours + ':' + minutes + ' ' + ampm];
        var emoji = [' ⏰'];
        const finalText = strTime[Math.floor(Math.random()* strTime.length)];
        content.textContent = finalText+emoji;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        speech.text = finalText;
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
    }
   else{ 
       document.getElementById('speak').classList.add('hide');
       document.getElementById('loading-bar').classList.remove('hide');
       speech.text = ['i don\'t know what you said','please say that again'];
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
       }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
};