const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr.match(/.{1,10}/g).join(' ').replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/[**********]/g, '');
    let words = str.split('  ')
    let letters = words.map((w) => w.split(' ')); 
    let decoded = [];
    
    for (let  i = 0; i < letters.length; i++) {
        decoded[i] = [];
        for (let j = 0; j < letters[i].length; j++) {
            if (MORSE_TABLE[letters[i][j]]) {
                decoded[i].push( MORSE_TABLE[letters[i][j]] );
            }
        }
    } 
    return decoded.map(arr => arr.join('')).join(' ');

}

module.exports = {
    decode
}