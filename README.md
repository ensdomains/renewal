# renewal

This js library will allow wallets and dapps to remind users that they own expiring names and earn referral fee in exchange.


## Usage

```js
import { checkRenewal } from '@ensdomains/renewal'

const userAddress = '0x123...'
const referrerAddress = '0x234...'

const {
  numExpiringDomains,
  renewalUrl
 } = await checkRenewal(userAddress, referrerAddress)

if(hasExpiringDomains > 0){
  return <a href={renewalUrl}>You have {numExpiringDomains} names needing renewal!</a>
}
```

- `renewalUrl` = `https:/app.ens.domains/address/0x123/renewal?referrer=0x345`
- `numExpiringDomains` return only up to 100

## Notes

- Any UI compoment will be offered as a seperate React component (eg: `@ensdomains/react-renew`).