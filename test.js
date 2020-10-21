// impor modul mementjs
var moment = require("moment");
var salam = require("./salam");

// menggunakan modul momentjs
console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));

// memanggil modul 
console.log(salam.salamPagi());