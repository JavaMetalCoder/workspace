export type ITask = {
  id: string;
  title: string;
  description: string;
  urgency: 'low' | 'medium' | 'high';
}
