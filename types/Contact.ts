import { Business, Location } from './index';

export type Contact = {
  active?: boolean;
  business?: Business;
  business_id?: string;
  business_location?: Location;
  business_location_id?: string;
  created_at?: string;
  email?: string;
  facebook_username?: string;
  full_name?: string;
  gender?: string;
  id: string;
  instagram_username?: string;
  phone_number?: string;
  preferred_communication_method?: string;
  preferred_language?: string;
  preferred_name?: string;
  primary?: boolean;
  title?: string;
  updated_at?: string;
};
