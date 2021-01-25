import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  // _.slice(items, startIndex);
  // _.take() 
  // To use this 2 lodash functions in a chain.. we have to convert the {items} array into lodash wrapper.
  return _(items).slice(startIndex).take(pageSize).value();
}