# renewal

This js library will allow wallets and dapps to remind users that they own expiring names and earn referral fee in exchange.


## Usage

```js
import { checkRenewal } from '@ensdomains/renewal'

const userAddress = '0x123...'
const referrerAddress = '0x234...'

const {
  numExpiringDomains,
  renewalUrl,
  expiryDate,
  endOfGracePeriod
 } = await checkRenewal(userAddress, queryParams)

if(numExpiringDomains > 0){
  return <a href={renewalUrl}>You have {numExpiringDomains} names needing renewal!</a>
}
```

- `renewalUrl` = `https:/app.ens.domains/address/0x123/renewal?referrer=0x345`
- `numExpiringDomains` return only up to 100
- `expirtyDate` = The expiraion date. Once expired you cannot transfer names unless renewed.
-  `endOfGracePeriod` = expirtyDate + 90 days when other poeple can start bidding on the name.

### Optional arguments

-  `days`  = Number of days before `endOfGracePeriod`. The default is set to 30 days from now.
-  `debug` = Boolean. The default is set to `false`. It displayes some debugging messaage if it's on.

## Notes

- Any UI compoment will be offered as a seperate widget (eg: `@ensdomains/renew-widget`).

## TODO

- Add unit test