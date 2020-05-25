import { Address, Business } from './index';

export type Location = {
  address?: Address;
  address_id?: string;
  business?: Business;
  business_id?: string;
  created_at?: string;
  description?: string;
  id: string;
  name: string;
  updated_at?: string;
};
