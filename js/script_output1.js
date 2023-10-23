var string = "02076861111"
var phone = string.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
console.log(phone);