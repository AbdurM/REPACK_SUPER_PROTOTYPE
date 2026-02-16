export const config =
{
  
  "plugins": {
    "bottomTabPlugins": [
      "TransactionsPlugin",
      "ProfilePlugin",
    ],
    "otherPlugins":["AuthPlugin"]
},
  "transactionsPluginSettings": {
    "isHeaderVisible": true,
    "content": {
      "title": "Transactions",
      "subtitle": "For transactions over 12 months, please visit the website.",
    },
  }
}
 