
const nodemailer = require('nodemailer');

exports.sendWorkflowMail = async(req, res, next) => {

    console.log(req.body);

    let transporter = await nodemailer.createTransport({
        // service: "Outlook365",
        // host: "192.168.100.12", // hostname
        debug: true,
        host: 'https://outlook.pscc.med.sa/owa/',
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        auth: {
            user: "pscc\\erequest",
            pass: "Cc100100@"
        },
        tls: {
            ciphers:'SSLv3'
        }
    });

    transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "clacuesta@pscc.med.sa, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

}