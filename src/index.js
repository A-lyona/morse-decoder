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
    let newArr = [];
    let newStr = '';
    let newRes = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        let part = expr.slice(i, i + 10);
        newArr.push(part);
    }
    for (let i = 0; i < newArr.length; i++) { 
        if (newArr[i][0] === '*') {
            newRes += ' ';
        }
        else {
            for (let k = 0; k < newArr[i].length; k++) {
                if (newArr[i][k] === '1') {
                    if (newArr[i][k + 1] === '0') {
                        newStr += '.';
                    }
                    else {
                        k++;
                        newStr += '-';
                    }
                }    
            }
            newRes += MORSE_TABLE[newStr];
            newStr = '';
        }
    }
    return newRes;
};

module.exports = {
    decode
}