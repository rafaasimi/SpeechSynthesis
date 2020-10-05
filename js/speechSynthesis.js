// Constroi o objeto Speech em uma variavel para ser utilizada mais tarde
const utterance = new SpeechSynthesisUtterance();
utterance.text = '';
utterance.lang = "pt-BR";
utterance.rate = 1;
utterance.pitch = 0.5;

// Objeto global que recebe uma declaração


function speak() {
    speechSynthesis.speak(utterance);
}

function stop() {
    speechSynthesis.cancel();
}

function setText(event) {
    utterance.text = event;
}
