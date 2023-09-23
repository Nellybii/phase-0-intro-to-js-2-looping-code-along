//const names = ['james', 'Ruth', 'peter']
function writeCards(names, event) {
    let thankYouMessage = [];
    for (let a = 0; a < names.length; a++) {
        thankYouMessage.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);
    }
return thankYouMessage;
}
function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    }
}
