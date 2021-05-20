module.exports = (bot, guild) => {
    let ar_channel = guild.channels.cache.find(channel => channel.name == "autorole")

    ar_channel.messages.fetch({ limit: 100 }).then(async messages => {
        //console.log("Počet zpráv: " + messages.size)

        let reaction_array_list = []
        let all_reactions = []
        for (var per_message of messages) {
            //console.log("tady 1")
            per_message = per_message[1]
                /*await per_message.reactions.cache.each(async(reaction) => await reaction.users.fetch().then((users) => {
                        users = users.filter(user => !user.bot)
                        all_reactions.push({ reaction, users })
                        ////console.log(all_reactions)
                    }))*/

            let per_message_embed = per_message.embeds[0]
            if (!per_message_embed) return
            let description_array_per_msg = per_message_embed.description.split("\n")

            for (let i = 0; i < description_array_per_msg.length; i++) {
                ////console.log(description_array_per_msg[i])
                let splitted_desc = description_array_per_msg[i].split(" - ")
                let emoji_name = splitted_desc[0]
                    ////console.log(splitted_desc[0])
                if (splitted_desc[0].indexOf("<:") == 0) {
                    let indexes = require("./index_of_all")(emoji_name, ":")
                    emoji_name = emoji_name.slice(indexes[0] + 1, indexes[1])
                        ////console.log(indexes)
                }
                ////console.log(emoji_name)
                reaction_array_list.push({ emoji: guild.emojis.cache.find(emoji => emoji.name == emoji_name), role: splitted_desc[1] })
            }
            //console.log("tady 2")

            let per_message_reactions = per_message.reactions.cache
            for (var reaction of per_message_reactions) {
                //console.log("tady 3")
                reaction = reaction[1]

                await reaction.users.fetch().then((users) => {
                    //console.log("tady 4")
                    users = users.filter(user => !user.bot)
                    all_reactions.push({ reaction, users })

                    let role = reaction_array_list.find(one_reaction => one_reaction.emoji == reaction._emoji).role
                    role = require("nsbr_bot_plugins").find_role({ role, guild })
                    if (!role) return

                    let all_users_with_role = guild.members.cache.filter(usr => usr._roles.includes(role.id))
                    let all_users_with_role_array = []
                    let users_array = []

                    for (var per_one_user of all_users_with_role) {
                        per_one_user = per_one_user[1]
                        all_users_with_role_array.push(per_one_user.user)
                    }

                    for (var per_one_user of users) {
                        per_one_user = per_one_user[1]
                        users_array.push(per_one_user)
                    }

                    //console.log("tady 5")

                    if ((users.every((users_every) => all_users_with_role_array.includes(users_every))) && (all_users_with_role_array.every((users_every) => users_array.includes(users_every)))) return
                    else {
                        for (var user of users) {
                            user = user[1]
                            user = guild.members.cache.find(usr => usr.user.username == user.username)
                                //if(user.roles.has(role)) return
                            require("./add_role_to_user")({ user, role, bot })
                                ////console.log(user)
                        }

                        for (var user of all_users_with_role) {
                            user = user[1]

                            if (user._roles.includes(role.id)) {
                                if (!users_array.includes(user.user)) {
                                    //console.log("\nfalse")
                                    //console.log(user.user.username)
                                    require("./remove_role_from_user")({ user, role, bot })
                                }
                            }
                        }
                        ////console.log(all_users_with_role)
                    }


                    ////console.log(all_users_with_role)


                    /*for(var user of users) {
                        user = user[1]
                        user = guild.members.cache.find(usr => usr.user.username == user.username)
                        require("./add_role_to_user")({ user, role, bot })
                        //console.log(user)
                    }*/
                    ////console.log(role)
                })
            }
            ////console.log(all_reactions)
        }
        ////console.log(reaction_array_list)
    })



    /*let role = guild.roles.cache.find(r => r.name == "Member");
    let role_id = role.id
    let all_users = guild.members.cache.filter(user => !user.user.bot).filter(roles => !roles._roles.includes(role_id))

    for (var user of all_users) {
        user = user[1]
        require("./add_role_to_user")({ user, role, bot })
    }*/
}