import { gql } from 'apollo-boost';

const ContactListQuery = gql`
  query CONTACT_LIST_QUERY(
    $businessId: uuid
    $businessLocationId: uuid
    $limit: Int
    $offset: Int
  ) {
    contact_aggregate(
      where: {
        business_id: { _eq: $businessId }
        business_location_id: { _eq: $businessLocationId }
      }
    ) {
      aggregate {
        count
      }
    }

    contact(
      where: {
        business_id: { _eq: $businessId }
        business_location_id: { _eq: $businessLocationId }
      }
      limit: $limit
      offset: $offset
    ) {
      active
      business_id
      business_location_id
      created_at
      email
      facebook_username
      full_name
      gender
      id
      instagram_username
      phone_number
      preferred_communication_method
      preferred_language
      preferred_name
      primary
      title
    }
  }
`;

export default ContactListQuery;
