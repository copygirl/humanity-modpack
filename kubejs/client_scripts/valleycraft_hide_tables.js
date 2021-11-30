onEvent("rei.hide.items", event => {
    let tables = [ "oak", "birch", "spruce", "jungle", "acacia", "dark_oak" ];
    for (let type in tables) event.hide(`valley:table_${type}`);
});
