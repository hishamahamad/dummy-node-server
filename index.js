const express = require('express');
const CookieParser = require('cookie-parser');
var cors = require('cors');
const app = express();

app.use(CookieParser());

app.use(cors());
app.options('*', cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   next();
// });

app.get('/', (request, response) => {
  console.log('headers', request.headers);
  response.json({
    leads: [
      { id: 1, lead_name: 'Ramu' },
      { id: 2, lead_name: 'Shamu' }
    ],
    bids: [
      { id: 1, bidder_name: 'Bob', value: 3000 },
      { id: 2, bidder_name: 'Bobby', value: 5000 }
    ]
  })
})

app.listen(3300, () => {
  console.log('Server is up on 3300')
});