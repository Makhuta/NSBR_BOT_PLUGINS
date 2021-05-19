module.exports = (bot, guild) => {
    let ar_channel = message.channel.guild.channels.cache.find(channel => channel.name == "autorole")

    ar_channel.messages.fetch({ limit: 100 }).then(async messages => {
        console.log("Počet zpráv: " + messages.size)
    })



    /*let role = guild.roles.cache.find(r => r.name == "Member");
    let role_id = role.id
    let all_users = guild.members.cache.filter(user => !user.user.bot).filter(roles => !roles._roles.includes(role_id))

    for (var user of all_users) {
        user = user[1]
        require("./add_role_to_user")({ user, role, bot })
    }*/
}