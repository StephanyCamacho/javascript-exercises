var caesar = function(str, num) {
    return str
    .split("")
    .map(char => shiftChar(char, num))
    .join("");
  };
  
    const codeSet = code => (code < 97 ? 65 : 97);
  
    const mod = (n, m) => (n % m + m) % m;
  
    const shiftChar = (char, num) => {
    const code = char.charCodeAt();
  
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return String.fromCharCode(
        mod(code + num - codeSet(code), 26) + codeSet(code)
      );
    }
    return char;
  }
  
  module.exports = caesar

//   The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.