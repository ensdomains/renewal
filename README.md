# renewal

This js library will allow wallets and dapps to remind users that they own expiring names and earn referral fee in exchange.


## Proposal one 

Only display that user has some names to renew with link back to ens-app with referrel params

```js
import { checkRenewal } from '@ensdomains/renewal'

const userAddress = '0x123...'
const referrerAddress = '0x234...'

const {
  hasExpiringDomains,
  numExpiringDomains,
  renewalUrl
 } = await checkRenewal(userAddress, referrerAddress)

if(hasExpiringDomains){
  return <a href={renewalUrl}>You have {numExpiringDomains} names needing renewal!</a>
}
```

- `renewalUrl` = `https:/app.ens.domains/address/0x123/renewal?referrer=0x345`
- `numExpiringDomains` return number or `more than 100` if it has more than 100 names.

## Proposal two

Low level library which gives an ability to renew from the external wallet/dapp


```js
const userAddress = '0x124...'
const referrerAddress = '0x234...'
const oneMonth = 1 * 60 * 60 * 24 * 30
const oneYear = 1 * 60 * 60 * 24 * 365

import { checkRenewal } from '@ensdomains/renewal'

const renewal = await checkRenewal(userAddress, {
    duration:oneMonth, first:1, skip:1
})
const names = renewal.names
console.log(names[0].label)
console.log(names[0].labelHash)
console.log(names[0].expiresAt)
console.log(names[0].renewalPrice)
const renewalNames = [names[0].name, names[1].name]
const renewalPrice = (names[0].renewalPrice +  names[1].renewalPrice) * oneYear
await renewAll(renewalNames, oneYear, {referrer:referrerAddress}).send({
    from:address, value: renewalPrice
})
```

- Can pass pagination parameter (first:1, skip:1) same as what http://thegraph.com/ provides
- Can filter names
- Can specify duration

## Notes

- Any UI compoment will be offered as a seperate React component (eg: `@ensdomains/react-renew`).
