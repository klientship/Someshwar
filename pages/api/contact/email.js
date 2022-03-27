const sgMail = require('@sendgrid/mail')

export default function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "sales@vajrarealties.com", 
    from: 'developer@vawebsites.in', 
    subject: "Message From Yamuna Asha City Website",
    text:"A new message was Sent from the contact form of Yamuna Asha City Website",
    html: req.body.message,
  }

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ status: false });
    })
    return res.status(200).json({ status: true });
}
