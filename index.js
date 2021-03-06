module.exports = {
    array_move(hodnoty) { return require("./files/array_move")(hodnoty) },
    check_user_for_language(hodnoty) { return require("./files/check_user_for_language")(hodnoty) },
    function_load(hodnoty) { return require("./files/functions_load")(hodnoty.bot, hodnoty.main_dir) },
    language_load_init(hodnoty) { return require("./files/language_load_init").init(hodnoty ? hodnoty.main_dir : null) },
    language_load_map: require("./files/language_load_map").languages,
    roles_init(hodnoty) { return require("./files/roles_init")(hodnoty.bot, hodnoty.channel) },
    find_channel_by_name(hodnoty) { return require("./files/find_channel_by_name")(hodnoty.zprava, hodnoty.message, hodnoty.roomname) },
    find_role(hodnoty) { return require("./files/find_role")(hodnoty.role, hodnoty.message, hodnoty.guild) },
    add_role_to_user(hodnoty) { return require("./files/add_role_to_user")(hodnoty) },
    remove_role_from_user(hodnoty) { return require("./files/remove_role_from_user")(hodnoty) },
    index_of_all(hodnoty) { return require("./files/index_of_all")(hodnoty.value, hodnoty.index) },
}