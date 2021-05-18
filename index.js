module.exports = {
    array_move(hodnoty) { return require("./files/array_move")(hodnoty) },
    check_user_for_language(hodnoty) { return require("./files/check_user_for_language")(hodnoty) },
    function_load(hodnoty) { return require("./files/functions_load")(hodnoty.bot, hodnoty.main_dir) },
    language_load_init(hodnoty) { return require("./files/language_load_init").init(hodnoty ? hodnoty.main_dir : null) },
    language_load_map: require("./files/language_load_map").languages,
    roles_init(hodnoty) { return require("./files/roles_init")(hodnoty.bot, hodnoty.channel) },
}