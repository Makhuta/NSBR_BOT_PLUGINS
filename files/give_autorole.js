module.exports = (bot, guild) => {
    let ar_channel = guild.channels.cache.find(channel => channel.name == "autorole")

    ar_channel.messages.fetch({ limit: 100 }).then(async messages => {
        console.log("Počet zpráv: " + messages.size)

        let reaction_array_list = []
        for (var per_message of messages) {
            per_message = per_message[1]
                //console.log(per_message)
            let description_array_per_msg = per_message.embeds[0].description.split("\n")

            for (let i = 0; i < description_array_per_msg.length; i++) {
                //console.log(description_array_per_msg[i])
                let splitted_desc = description_array_per_msg[i].split(" - ")
                reaction_array_list.push({ emoji: splitted_desc[0], role: splitted_desc[1] })
            }
        }
        console.log(reaction_array_list)
    })



    /*let role = guild.roles.cache.find(r => r.name == "Member");
    let role_id = role.id
    let all_users = guild.members.cache.filter(user => !user.user.bot).filter(roles => !roles._roles.includes(role_id))

    for (var user of all_users) {
        user = user[1]
        require("./add_role_to_user")({ user, role, bot })
    }*/
}