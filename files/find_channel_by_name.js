module.exports = async(zprava, msg1, roomname) => {
    let guild = msg1.guild
    let message


    if (guild.channels.cache.find(c => c.name === roomname) == undefined) {
        await guild.channels.create(roomname, {
            type: "text"
        })
    }

    let channel_id = guild.channels.cache.find(c => c.name === roomname).id

    const msg = guild.channels.cache.get(channel_id)


    message = await msg.send(zprava)
    return (message)
}