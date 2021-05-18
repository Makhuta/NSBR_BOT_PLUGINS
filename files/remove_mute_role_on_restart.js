module.exports = (guild) => {
    const mute_role = guild.roles.cache.filter(rle => rle.name == "Muted").first()
    let all_mute_users = guild.members.cache.filter(user => !user.user.bot).filter(roles => roles._roles.includes(mute_role.id))

    for (var user of all_mute_users) {
        user = user[1]
        user.roles.remove(mute_role).catch(console.error);
    }
}