// returns an array of objects located in specifi city

export default function getStudentsByLocation(object, city) {
  if (object instanceof Array) {
    return object.filter((object) => object.location === city);
  }
  return [];
}
