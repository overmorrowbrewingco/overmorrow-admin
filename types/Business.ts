import { AccountStatusEnum, Contact, Customer, Location } from './index';

export type Business = {
  account_status?: AccountStatusEnum;
  contacts?: Contact[];
  created_at?: string;
  customer?: Customer;
  customer_id?: string;
  email?: string;
  facebook_username?: string;
  id: string;
  instagram_username?: string;
  locations?: Location[];
  phone_number?: string;
  updated_at?: string;
  website?: string;
};
