module.exports = function(hodnoty) {
    let message = hodnoty.message ? hodnoty.message : null
    if (!message) return console.log("Message is not specified.")
    let find_role = message.member.roles.cache.find(r => r.name.split(":")[0] == "Language")
    let role_name

    if (find_role != undefined) {
        role_name = find_role.name.split(":")[1]
    }
    return role_name ? role_name : "EN"
}