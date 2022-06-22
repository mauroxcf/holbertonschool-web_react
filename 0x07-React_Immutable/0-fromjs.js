import { fromJS } from "immutable";

//converts plain JS objects and arrays to Immutable Maps and Lists
function getImmutableObject(object) {
  const newObject = fromJS(object);
  return newObject;
}

export default getImmutableObject;
