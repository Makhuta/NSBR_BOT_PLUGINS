module.exports = function find_role(role, message) {
    let rle

    if (role.startsWith("<@")) {
        role = role.slice(3, role.length - 1)
        rle = message.guild.roles.cache.find(r => r.id === role)
    } else {
        rle = message.guild.roles.cache.find(r => r.name === role)
    }
    return rle
}