const fs = require("fs")

module.exports = {
    init(main_dir) {
        let languages = main_dir + "/lang/"
        fs.readdir(languages, (err, langs) => {
            langs.forEach(lang => {
                let per_cmd_map = new Map();
                fs.readdir(languages + lang + "/", (err, lang_files) => {
                    lang_files.forEach(file => {
                        let file_name = file.split(".")[0].toUpperCase()
                        let file_content = require("." + languages + lang + "/" + file)
                        per_cmd_map.set(file_name, file_content)
                    })
                    require("./language_load_map").languages.set(lang, per_cmd_map)
                })
            })
        })
    }
}