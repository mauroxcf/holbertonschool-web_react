import { Map } from "immutable";

//converts plain JS objects and arrays to Immutable Maps and Lists
function getImmutableObject(object) {
  const newObject = Map(object);
  return newObject;
}

export default getImmutableObject;
