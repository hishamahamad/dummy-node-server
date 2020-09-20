const express = require('express');
const CookieParser = require('cookie-parser');
const app = express();

app.use(CookieParser());

app.get('/', (request, response) => {
  response.json({
    leads: [
      {id: 1, lead_name: 'Ramu'},
      {id: 2, lead_name: 'Shamu'}
    ],
    bids: [
      {id: 1, bidder_name: 'Bob', value: 3000},
      {id: 2, bidder_name: 'Bobby', value: 5000}
    ]
  })
})

app.listen(3300, () => {
  console.log('Server is up on 3300')
});