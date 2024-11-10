export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  bloqued: boolean;
  createdAt: Date;
  scheduleId: string;
}
