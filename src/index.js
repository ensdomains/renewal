import { GraphQLClient } from 'graphql-request'

export const GET_DOMAINS_OWNED_BY_ADDRESS_FROM_SUBGRAPH = `
  query getDomains($userAddress: String!, $expiryDate: Int!) {
    account(id: $userAddress) {
      registrations(
        orderBy:expiryDate, orderDirection:asc,
        where:{ expiryDate_lt: $expiryDate }
      ) {
        expiryDate
        domain {
          labelName
        }
      }
    }
  }
`

const endpoint = 'https://api.thegraph.com/subgraphs/name/ensdomains/ens'
const client = new GraphQLClient(endpoint, {
  headers: {
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site'
  }
})

const jsonToQueryString = json => {
  if(!json) return ''
  return '?' +
      Object.keys(json).map(function(key) {
          return encodeURIComponent(key) + '=' +
              encodeURIComponent(json[key]);
      }).join('&');
}

// const host = 'https://app.ens.domains'
// Test site for bulk renewal
const host = 'http://ensappdev.surge.sh'

export async function checkRenewal(userAddress, utmParams, {days=30, debug}) {
  let date = new Date();
  const expiryDate = date.setDate(date.getDate() + days);

  const { account } = await client.request(GET_DOMAINS_OWNED_BY_ADDRESS_FROM_SUBGRAPH, {
    userAddress: userAddress.toLowerCase(),
    expiryDate: parseInt(expiryDate / 1000)
  })
  const count = account ? account.registrations.length : 0
  const endOfGracePeriod = new Date(expiryDate)
  endOfGracePeriod.setDate(endOfGracePeriod.getDate() + 90)
  if(debug && account){
    console.log(account.registrations.map((r) => { return [r.domain.labelName, new Date(r.expiryDate * 1000)]}))
  }
  const res = {
    numExpiringDomains: count,
    renewalUrl: `${host}/address/${userAddress}${jsonToQueryString(utmParams)}`,
    expiryDate:new Date(expiryDate),
    endOfGracePeriod
  }
  return res
}
