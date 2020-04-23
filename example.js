const renewal  = require('./dist/index');
const userAddress ='0x8B4e42B43ed7B62ec1E3FC4E6548A8AB989302B6'

console.log({renewal})
renewal.checkRenewal(
  userAddress,
  {
    utm_medium: 'web',
    utm_source: 'opensea.io',
    utm_campaign: 'renewal'
  },
  {
      debug:true
  }
).then(console.log)
