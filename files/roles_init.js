module.exports = (bot, channel) => {
    let guild = bot.guilds.cache.first();
    require("./remove_mute_role_on_restart")(guild)
}