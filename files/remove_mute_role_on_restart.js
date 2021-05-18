module.exports = (guild) => {
    const mute_role = guild.roles.cache.filter(rle => rle.name == "Muted").first()
    let all_mute_users = guild.members.cache.filter(user => !user.user.bot).filter(roles => roles._roles.includes(mute_role.id))

    for (user in all_mute_users) {
        user.roles.remove(mute_role).catch(console.error);
    }
    /*all_mute_users.forEach(user => {
        user.roles.remove(mute_role).catch(console.error);
    })*/
}