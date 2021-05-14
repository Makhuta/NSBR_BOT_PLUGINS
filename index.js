module.exports = {
    array_move(hodnoty) { return require("./files/array_move")(hodnoty) },
    check_user_for_language(hodnoty) { return require("./files/check_user_for_language")(hodnoty) },
    function_load(hodnoty) { return require("./files/functions_load")(hodnoty.bot, hodnoty.main_dir) },
    language_load(hodnoty) { return require("./files/language_load")(hodnoty ? hodnoty.main_dir : null) },
}