import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

const CarSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
}).merge(VehicleSchema);

export type Car = z.infer<typeof CarSchema>;

export { CarSchema };