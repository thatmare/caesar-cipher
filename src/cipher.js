const cipher = {
  
  encode: function(offset, string) {
    let result = "";
    for (let i=0; i<string.length; i++) {
      let letterASCII = string[i].charCodeAt();
      if (letterASCII >= 65 && letterASCII <= 90) {
        result += String.fromCharCode(((letterASCII - 65 + Number(offset))%26)+65);
      } else if (letterASCII >= 97 && letterASCII <= 122) {
        result += String.fromCharCode(((letterASCII - 97 + Number(offset))%26)+97);
      }
    }
    return result;
  },

  decode: function(offset, string) {
    let result = "";
      for (let i=0; i<string.length; i++) {
        let letterASCII = string[i].charCodeAt();
        if (letterASCII >= 65 && letterASCII <= 90) {
          result += String.fromCharCode(((letterASCII - 65 - Number(offset) + 26)%26)+65);
        } else if (letterASCII >= 97 && letterASCII <= 122) {
          result += String.fromCharCode(((letterASCII - 97 - Number(offset))%26)+97);
        }
      }
    return result;
  }
};

export default cipher;
