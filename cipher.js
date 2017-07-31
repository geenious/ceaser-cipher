const letters = 'abcdefghijklmnopqrstuvwxyz';

function encipher(str, shift) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = letters.indexOf(char);
    if (index + shift > letters.length) {
      let totalShift = index + shift;
      let newShift = totalShift - letters.length;
      let newChar = letters[newShift];
      output += newChar;
    }
    else {
      let newChar = letters[index + shift];
      output += newChar;
    }
  }
  return output;
}

function decipher(str, shift) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = letters.indexOf(char);
    if (index - shift < 0) {
      // let totalShift = shift - index;
      // let newShift = letters.length - totalShift;
      // let newChar = letters[newShift];
      // output += newChar;
      output += letters[letters.length - (shift - index)];
    }
    else {
      output += letters[index - shift]
    }
  }
  return output;
}

module.exports = {
  encipher,
  decipher
}
