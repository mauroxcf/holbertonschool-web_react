import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
  const deepData = fromJS(object);
  return deepData.getIn(array, undefined);
}
