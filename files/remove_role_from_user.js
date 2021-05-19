module.exports = (hodnoty) => { //user, role, role_name, message, bot
    if (!hodnoty) return console.log("Specify values.")
    let user = hodnoty.user ? hodnoty.user : null;
    let role = hodnoty.role ? hodnoty.role : null;
    let role_name = hodnoty.role_name ? hodnoty.role_name : null;
    let bot = hodnoty.bot ? hodnoty.bot : null;
    let message = hodnoty.message ? hodnoty.message : null;

    if (!user) return console.log("User is not defined.");
    if (role) {
        user.roles.add(role).catch(console.error);
    } else if (role_name) {
        if (bot) {
            let guild = bot.guilds.cache.first();
            let role_1 = guild.roles.cache.find(r => r.name == role_name);
            user.roles.remove(role_1).catch(console.error);
        } else if (message) {
            let guild = message.guild
            console.log(guild)
                //let role_1 = guild.roles.cache.find(r => r.name == role_name);
                //user.roles.add(role_1).catch(console.error);
        } else console.log("Client/bot or message is not defined.")

    } else return console.log("Role or role name is not defined.")

}