# renewal

This js library will allow wallets and dapps to remind users that they own expiring names and earn referral fee in exchange.


## Usage


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


## Notes

- Any UI compoment will be offered as a seperate React component (eg: `@ensdomains/react-renew`).
