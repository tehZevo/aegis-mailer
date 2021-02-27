var nodemailer = require("nodemailer");
var ProtoPost = require("protopost");

var PORT = parseInt(process.env.PORT || "80");
var AUTH = JSON.parse(process.env.AUTH);
var SERVICE = process.env.SERVICE;

var transporter = nodemailer.createTransport({
  service: SERVICE,
  auth: AUTH
});

async function sendMail(to, subject, body)
{
  var mailOptions = {
    from: "", //hopefully this gets replaced/autofilled
    to: to,
    subject: subject,
    text: body
  };

  console.log("Sending '" + subject + "' to " + to);
  
  await transporter.sendMail(mailOptions);
}

var api = new ProtoPost({}, async (data) => await sendMail(data.to, data.subject, data.body)).start(PORT, "/");
