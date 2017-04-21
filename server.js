const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000 // default port 8000
let contacts = require('./contact-data')

// use ejs views from the views folder
app.set('view engine', 'ejs')

// serve static assets (css, images, etc) from public folder
app.use(express.static('public'))

app.get('/', (req, res) => {
  // render the views/index.ejs file
  res.render('index', {contacts: contacts, contact: undefined})
})

app.get('/contact/:contact_id', (req, res) => {
  // render views/index.ejs file with a selected contact
  const currentContact = contacts.find(c => c.id === parseInt(req.params.contact_id))
  console.log(currentContact)
  res.render('index', {
    contacts: contacts,
    contact: currentContact
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
