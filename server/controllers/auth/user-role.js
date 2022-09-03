const { QueryTypes } = require('sequelize');
const sequelize = require('../../helpers/database');


exports.getUserRole = (req, res, next) =>  {
    const userId = req.body.whereCondition.userId === 1? null : req.body.whereCondition.userId;
    const organizationId = req.body.organizationId;
    const records = sequelize.query(`
    select * from
    (select distinct 
    a.*, b.groupRoleId, 
    b.stepId, b.interfaceId, b.systemId,
    b.name, b.roleType, b.config, 
    rank() over (partition by userId, b.roleType, b.name order by userId, b.updatedAt desc) as rn from
    (select a.*, b.organizationId from
	(select distinct userId, groupId FROM oblongsquare.userroles) a
	left outer join
	(select groupId, organizationId FROM oblongsquare.groups) b
	on a.groupId = b.groupId) a
    left outer join
    (SELECT * FROM oblongsquare.grouproles) b
    on a.groupId = b.groupId) a
    where rn = 1 and userId = :userId and organizationId = :organizationId`, {
        replacements: { userId: userId, organizationId: organizationId },
        type: QueryTypes.SELECT
    });

    records.then(userRoles => { 
        res.status(200).json(userRoles);
    })
    .catch(err => {
        console.log(err)
    });

}