import { Guide } from './guide';

export class Lesson {
  id: number;
  dateTime: string;
  time: string;
  duration: number;
  type: string;
  note: string;
  guide: Guide;
}
