const express = require('express');
const CookieParser = require('cookie-parser');
var cors = require('cors');
const app = express();

app.use(CookieParser());

app.use(cors());
// app.options('*', cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   next();
// });

app.get('/', (request, response) => {
  console.log('cookies', request.cookies);
  const auth = request.cookies.session_id;
  if(auth) {
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
  } else {
    response.status(403).send('Access denied.')
  }
})

app.get('/setcookie-httponly', (request, response) => {
    var cookie = request.cookies.session_id;
    if (cookie === undefined) {
      // no: set a new cookie
      var randomNumber=Math.random().toString();
      randomNumber=randomNumber.substring(2,randomNumber.length);
      response.cookie('session_id',randomNumber, { maxAge: 900000, httpOnly: true, sameSite: 'None', secure: true, domain: '.blockbuck.tech' });
      console.log('cookie created successfully');
      response.status(200).send('cookie set succesfully.')
    } else {
      // yes, cookie was already present 
      console.log('hurray cookie exists', cookie);
    } 
})

app.listen(3500, () => {
  console.log('Server is up on 3500')
});
