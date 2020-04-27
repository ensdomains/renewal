const renewal  = require('./dist/index');
const userAddress ='0xfDb33f8AC7ce72d7D4795Dd8610E323B4C122fbB'

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
