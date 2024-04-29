// return a array of students

export default function getListStudents() {
  const object = [];

  const student1 = { id: '', firstName: '', location: '' };
  student1.id = 1;
  student1.firstName = 'Guillaume';
  student1.location = 'San Francisco';
  object.push(student1);

  const student2 = { id: '', firstName: '', location: '' };
  student2.id = 2;
  student2.firstName = 'James';
  student2.location = 'Columbia';
  object.push(student2);

  const student3 = { id: '', firstName: '', location: '' };
  student3.id = 5;
  student3.firstName = 'Serena';
  student3.location = 'San Francisco';
  object.push(student3);

  return (object);
}
