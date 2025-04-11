const shoppingList = ["item 1", "item 2", "item 3"];

function addItemToShoppingList(shoppingList, item){
    shoppingList.push(item);
    return shoppingList;
}
addItemToShoppingList(shoppingList, "Item 5");

// not a push question.
let playlist = ["Song A", "Song B", "Song C", "Song D"];

function removeSongFromPlaylist(playlist, song){
    const index = playlist.indexOf(song);
    if(index !== -1){
        playlist.splice(index, 1);
    }
    return playlist;
}
removeSongFromPlaylist(playlist, "Song D");