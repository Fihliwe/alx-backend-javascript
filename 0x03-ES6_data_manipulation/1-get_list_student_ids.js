// return an array of ids from a list object

export default function getListStudentIds(objects) {
  if (objects instanceof Array) {
    return objects.map((objects) => objects.id);
  }
  return [];
}
