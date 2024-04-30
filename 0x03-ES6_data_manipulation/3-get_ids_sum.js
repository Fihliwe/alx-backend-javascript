// returns the sum of all the student ids

export default function (object) {
  if (object instanceof Array) {
    return object.reduce((prevobject, newObject) => prevobject.id || prevobject + newObject.id, 0);
  }
  return [];
}
