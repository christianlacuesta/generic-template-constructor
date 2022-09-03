const UserInfo = require('../../models/users/users');

exports.getUserInfo = (req, res, next) => {
    const username = req.params.username;
    UserInfo.findAll({
        where: { username: username}
    })
    .then(userInfo => { 
        res.status(200).json(userInfo[0]);
    })
    .catch(err => {
        console.log(err)
    });;
};