const nodemailer = require('nodemailer');

exports.sendWorkflowMail = async(req, res, next) => {

    let transporter = await nodemailer.createTransport({
        host: "192.168.100.12", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 25, // port for secure SMTP
        tls: {
            rejectUnauthorized: false
        }
    });

    return transporter;
}