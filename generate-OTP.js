var alphabet = [];
var onetime = true;

function generateOTP() {
    if(onetime) {
        for(let i = 'a'.charCodeAt(); i < 'z'.charCodeAt(); i++) {
            alphabet.push(String.fromCharCode(i));
        }
    
        onetime = false;
    }
    
    var OTP = '';
    for(let i = 0; i < 3; i++) {
        var random = Math.round(Math.random() * alphabet.length - 1);
        OTP += alphabet[random];
    }
    
    for(let i = 0; i < 3; i++) {
        var randomnumber = Math.round(Math.random() * 9);
        OTP += randomnumber;
    }
    
    return OTP.toUpperCase();
    
}

module.exports = {
    generateOTP
}