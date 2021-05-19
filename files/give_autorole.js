module.exports = (bot, guild) => {
    let ar_channel = guild.channels.cache.find(channel => channel.name == "autorole")

    ar_channel.messages.fetch({ limit: 100 }).then(async messages => {
        console.log("Počet zpráv: " + messages.size)

        let reaction_array_list = []
        let all_reactions = []
        for (var per_message of messages) {
            per_message = per_message[1]
                /*await per_message.reactions.cache.each(async(reaction) => await reaction.users.fetch().then((users) => {
                        users = users.filter(user => !user.bot)
                        all_reactions.push({ reaction, users })
                        //console.log(all_reactions)
                    }))*/

            let description_array_per_msg = per_message.embeds[0].description.split("\n")

            for (let i = 0; i < description_array_per_msg.length; i++) {
                //console.log(description_array_per_msg[i])
                let splitted_desc = description_array_per_msg[i].split(" - ")
                let emoji_name = splitted_desc[0]
                console.log(splitted_desc[0])
                if (splitted_desc[0].indexOf("<:") == 0) {
                    let indexes = require("./index_of_all")(emoji_name, ":")
                    emoji_name = emoji_name.slice(indexes[0] + 1, indexes[1])
                    console.log(indexes)
                }
                console.log(emoji_name)
                reaction_array_list.push({ emoji: guild.emojis.cache.find(emoji => emoji.name == emoji_name), role: splitted_desc[1] })
            }


            let per_message_reactions = per_message.reactions.cache
            for (var reaction of per_message_reactions) {
                reaction = reaction[1]

                await reaction.users.fetch().then((users) => {
                    users = users.filter(user => !user.bot)
                    all_reactions.push({ reaction, users })

                    let role = reaction_array_list.find(one_reaction => one_reaction.emoji == reaction)
                    console.log(reaction_array_list)
                })
            }
            //console.log(all_reactions)
        }
        //console.log(reaction_array_list)
    })



    /*let role = guild.roles.cache.find(r => r.name == "Member");
    let role_id = role.id
    let all_users = guild.members.cache.filter(user => !user.user.bot).filter(roles => !roles._roles.includes(role_id))

    for (var user of all_users) {
        user = user[1]
        require("./add_role_to_user")({ user, role, bot })
    }*/
}