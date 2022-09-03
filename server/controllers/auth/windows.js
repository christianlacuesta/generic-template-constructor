const ActiveDirectory = require('activedirectory');


exports.authenticate = async(req, res, next) => {

    let config = {
        url: 'LDAP://dc01/DC=PSCC,DC=LOCAL',
        baseDN: 'dc=domain,dc=com'
    };

    const ad = new ActiveDirectory(config);
    let username = req.body.username;
    let password = req.body.password;


    const response = await ad.authenticate(username, password, function(err, auth) {

        let response = {
            error: null,
            success: null,
            failed: null
        }

        if (auth) {
            Object.assign(response, {success: true});
            res.status(200).json(response);
        }
        else {
            Object.assign(response, {failed: true});
            res.status(200).json(response);
        }
    });

};