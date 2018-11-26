export function selectBook(book) {
    console.log("Das gewähltes Buch ist: ", book.title);
    // selectBook is an Action Creator, it needs to return an action, an object with a "type" property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
    
}