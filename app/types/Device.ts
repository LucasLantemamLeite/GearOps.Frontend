export interface Device {
  id: string;
  name: string;
  type: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  start?: Date;
  return?: Date;
  active: Boolean;
}
