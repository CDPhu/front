import axios from 'axios'
import nodemailer from 'nodemailer'

// Get environment variables
const NOCODB_TOKEN = process.env.NOCODB_TOKEN
const EMAIL_PASS = process.env.EMAIL_PASS

// Set axios defaults from variables
const baseURL = 'https://db.bvpk.org'
axios.defaults.baseURL = baseURL
axios.defaults.headers.common['xc-token'] = NOCODB_TOKEN

console.log(NOCODB_TOKEN)

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.strato.de',
  auth: {
    user: 'webmailer@bvpk.org',
    pass: EMAIL_PASS,
  },
  secure: true,
})

// Main request handling
export default async function contactFormHandler(req, res) {
  return new Promise((resolve) => {
    if (req.method === 'POST') {
      // Send POST request to NocoDB after logging it to console
      console.log('Request Body: ', req.body)
      axios
        .post('/api/v1/db/data/v1/BVPK/kontaktanfragen', req.body)
        .then((response) => {
          // Define mail to OTOBO
          const mailToSupport = {
            from: {
              name: `${req.body.k_vorname} ${req.body.k_nachname}`,
              address: req.body.k_email,
            },
            to: 'support@bvpk.org',
            replyTo: req.body.k_email,
            subject: req.body.k_betreff,
            text: `Anfrage von ${req.body.k_vorname} ${req.body.k_nachname}
Email: ${req.body.k_email}
Telefon: ${req.body.k_telefon || 'nicht angegeben'}

Anfrage:
${req.body.k_nachricht}`,
          }

          // Send mail to support
          transporter.sendMail(mailToSupport, function (err, info) {
            if (err) console.log(err)
            else console.log(info)
          })
          res.status(response.status).end()
          resolve()
        })

        // Catch errors in request to NocoDB
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Response Data: ', error.response.data)
            console.log('Response Status Code: ', error.response.status)
            console.log('Response Headers: ', error.response.headers)
            res.status(error.response.status).send({
              message:
                'Something is wrong with your request. You can contact support at support@bvpk.org',
            })
            resolve()
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('Error when communication with NocoDB: ', error.request)
            res.status(500).send({
              message:
                'Something is wrong here. Please contact support@bvpk.org',
            })
            resolve()
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Other unspecifed Error in request :', error.message)
            res.status(500).send({ message: error.message })
            resolve()
          }
          console.log(error.config)
        })
    } else {
      // for all requests other than POST
      res.status(400).send({ message: 'Only POST requests allowed' })
      return resolve()
    }
  })
}
