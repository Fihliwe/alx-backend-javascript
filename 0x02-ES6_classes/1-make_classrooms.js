// import
import ClassRoom from './0-classroom';

function initializeRooms() {
  const SizeOfRooms = [19, 20, 34];
  const rooms = SizeOfRooms.map((size) => new ClassRoom(size));
  return rooms;
}

export default initializeRooms;
