import { Business } from './index';

export type Customer = {
  business?: Business;
  created_at?: string;
  customer_type?: string;
  description?: string;
  id: string;
  name: string;
  updated_at?: string;
};
