interface RoomEntity {
  id: string;
  created: string;
  title: string;
  teamId: string;
  lastActivity: string;
  favorite: boolean;
  type: 'group' | 'direct';
}

export default RoomEntity;
