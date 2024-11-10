import { User } from "./User";

export interface Scheduling {
  id: string;
  data: Date;
  dayWeek: string;
  time: string;
  service: string;
  user: User[];
}
