const fs = require("fs");
const { registerFont } = require("canvas");

module.exports = (bot, main_dir) => {

    fs.readdir(main_dir + "/events/", (err, files) => {

        if (err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js");
        if (jsfile.length <= 0) {
            console.log("There isn't any events to load!");
            return;
        }
        console.log(`Loading ${jsfile.length} events...`)
        jsfile.forEach((f, i) => {
            let name = f.toLocaleString().split(".")
            let pull = require(main_dir + `/events/${f}`);
            console.log(`${i + 1}: ${name[0]} loaded!`)
        });
    });

    fs.readdir(main_dir + "/commands/", (err, files) => {

        if (err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js");
        if (jsfile.length <= 0) {
            console.log("There isn't any command to load!");
            return;
        }
        console.log(`Loading ${jsfile.length} commands...`)
        jsfile.forEach((f, i) => {
            let name = f.toLocaleString().split(".")
            let pull = require(main_dir + `/commands/${f}`);
            bot.commands.set(pull.help.name, pull);
            pull.help.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.help.name)
                console.log(`${i + 1}: ${name[0]} loaded!`)
            });
        });
    });

    fs.readdir(main_dir + "/fonts/", (err, files) => {

        if (err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "ttf");
        if (jsfile.length <= 0) {
            console.log("There isn't any fonts to load!");
            return;
        }
        console.log(`Loading ${jsfile.length} fonts...`)
        jsfile.forEach((f, i) => {
            let name = f.toLocaleString().split(".")
            console.log(`${i + 1}: ${name[0]} loaded!`)
            registerFont(main_dir + `/fonts/${f}`, { family: `${name[0]}` })
        });
    });
};