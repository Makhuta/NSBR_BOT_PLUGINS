module.exports = (bot, guild) => {
    let role = guild.roles.cache.find(r => r.name == "Member");
    let role_id = role.id
    let all_users = guild.members.cache.filter(user => !user.user.bot).filter(roles => !roles._roles.includes(role_id))

    for (var user of all_users) {
        user = user[1]
        require("./add_role_to_user")({ user, role, bot })
    }
}