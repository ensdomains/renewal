const renewal  = require('./dist/index');
const userAddress ='0xA7F3659c53820346176f7E0E350780DF304db179'
const referrerAddress ='0x5A384227B65FA093DEC03Ec34e111Db80A040615'
console.log({renewal})
renewal.checkRenewal(
  userAddress,
  referrerAddress,
  {
      expiryDate:new Date("2020-05-04T16:10:38"),
      debug:false
  }
).then(console.log)
