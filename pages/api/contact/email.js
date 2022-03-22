const sgMail = require('@sendgrid/mail')

export default function handler(req, res) {
  sgMail.setApiKey("API KEY")

  const msg = {
    to: "stephenmachado1998@gmail.com", // Change to your recipient
    from: 'developer@vawebsites.in', // Change to your verified sender
    subject: "Message From Yamuna Asha City Website",
    text: req.body.message,
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
