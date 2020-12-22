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
        const greetings = ['Hello sir, How can i help you ?'];
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
        var wish;
        if (hours < 12){
            var emoji1 = ['🌇'];
            wish = ['Good morning Sir'];
        }
        else if (hours >= 12 && hours <= 17){
            var emoji1 = ['🌁'];            
            wish = ['Good afternoon Sir'];
        }
        else if (hours >= 17 && hours <= 24){
            var emoji1 = ['🌆'];
            wish = ['Good evening Sir'];
        }
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var emoji = [' ⏰'];
        var strTime = ['its '+ hours + ':' + minutes + ' ' + ampm +', '+ wish];
        var strTime1 = ['its '+ hours + ':' + minutes + ' ' + ampm +' '+ emoji +', '+ wish + ' '+ emoji1];
        const finalText = strTime[Math.floor(Math.random()* strTime.length)];
        content.textContent = strTime1;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        speech.text = finalText;
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
    }
   else if(message.includes('search')){ 
       const finalText = content.textContent.replace('search','');
       window.open(("https://www.google.com/search?q=")+(finalText),"_blank");
       var searching = ('Here is what I found for ' + finalText);
       var emoji = ['🔎'];
       content.textContent = emoji+searching;
       speech.text = searching;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
     }
 
   else if(message.includes('open YouTube')){
         var emoji = ['(▶)'];
         window.open("https://www.youtube.com");
         opening = 'Opening Youtube';
         speech.text = opening;
         content.textContent = opening+emoji;
         document.getElementById('speak').classList.add('hide');
         document.getElementById('loading-bar').classList.remove('hide');
         setTimeout(() => {
             document.getElementById('loading-bar').classList.add('hide');
             document.getElementById('btn').classList.remove('hide');
         },3000);
     }
 
   else if(message.includes('open Twitter')){
       var emoji = ['(🐤)'];
         window.open("https://www.twitter.com");
         opening = 'Opening Twitter';
         speech.text = opening;
         content.textContent = opening+emoji;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
     }
   else if(message.includes('Wikipedia')){
        const finalText = content.textContent.replace('Wikipedia','');
        window.open(("https://en.wikipedia.org/wiki/")+(finalText),"_blank");
        var emoji = ['🌏'];
        opening = 'According to Wikipedia Here is what I found for '+finalText;
        opening1 = 'According to Wikipedia'+emoji+' Here is what I found for '+finalText;
        speech.text = opening;
        content.textContent = opening1;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
    }
   else if(message.includes("what is weather today")){
        window.open("https://www.google.com/search?q=weather","_blank");
        finalText = 'Here is what I found for Weather'
        speech.text = finalText;
        var emoji = ['⛅'];
        content.textContent = finalText+emoji;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
    }
   else if(message.includes('what is the location of')){
        const location = content.textContent.replace('what is the location of','');
        window.open('https://google.nl/maps/place/' + location + '/&amp;');
        loc = ('Here is the location of ' + location);
        var emoji = ['🌏'];
        speech.text = loc;
        content.textContent = loc+emoji;
        document.getElementById('speak').classList.add('hide');
        document.getElementById('loading-bar').classList.remove('hide');
        setTimeout(() => {
            document.getElementById('loading-bar').classList.add('hide');
            document.getElementById('btn').classList.remove('hide');
        },3000);
    }
   else if(message.includes('who developed you')){
       creator = ['I was made by Dishant'];
       var emoji = ['👨‍💻'];
       const finalText = creator[Math.floor(Math.random()* creator.length)];
       content.textContent =finalText+emoji;
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