const activeDirectory = require('activedirectory');

let config = {
    url: 'LDAP://dc01/DC=PSCC,DC=LOCAL',
    baseDN: 'dc=domain,dc=com'
};


module.exports = activeDirectory;

