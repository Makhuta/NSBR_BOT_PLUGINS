module.exports = function find_role(role, message, guild) {
    let rle
    guild = guild ? guild : message ? message.guild : null

    if(!guild) return console.error("Error Guild not found.")

    if (role.startsWith("<@")) {
        role = role.slice(3, role.length - 1)
        rle = guild.roles.cache.find(r => r.id === role)
    } else {
        rle = guild.roles.cache.find(r => r.name === role)
    }
    return rle
}