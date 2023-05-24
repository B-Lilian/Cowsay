const userInfo = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Hi, i'm ${userInfo.name} and i'm on ${userInfo.campus} campus`),
    e : "oO",
    T : "U "
}));