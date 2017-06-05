export function selectBook(book){
    //selctBook is an Action creaor, it needs to return an action,
    //a object with a type property
    return {
       type : 'BOOK_SELECTED',
       payload: book
    };
}