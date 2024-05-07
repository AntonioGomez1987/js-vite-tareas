import todoStore, { Filters } from '../../store/todo.store';

let element;

/**
 * 
 * @param {String} elemenyId 
 */
export const renderPending = ( elemenyId ) => {

    if( !element ) 
        element = document.querySelector( elemenyId );

    if( !element )
        throw new Error(`Element ${ elemenyId } not found`);

    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;
}