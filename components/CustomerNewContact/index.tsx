import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

import NewContactForm from 'components/UI/NewContactForm';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/UI/AdminLTE';

interface Props {
  id: string;
}

const CustomerNewContact: React.FC<Props> = ({ id }) => {
  const formState = useForm();

  const { data, error, loading } = useQuery(
    gql`
      query CUSTOMER_CONTACTS_QUERY($id: uuid!) {
        customer(where: { id: { _eq: $id } }) {
          id

          business {
            id

            locations {
              id
              name
            }
          }
        }
      }
    `,
    {
      variables: {
        id,
      },
    },
  );

  const [createContact, mutationData] = useMutation(
    gql`
      mutation CREATE_CONTACT($contact: [contact_insert_input!]!) {
        insert_contact(objects: $contact) {
          affected_rows
        }
      }
    `,
  );

  const onFormSubmit = (formData): void => {
    Object.keys(formData).forEach((key) => {
      if (formData[key] === '' || formData[key] == null) {
        delete formData[key];
      }
    });

    createContact({
      variables: {
        contact: {
          ...formData,
          business_id: customer.business.id,
        },
      },
    });
  };

  if (loading) return null;

  if (error) throw new Error(error.message);

  const customer = get(data, 'customer[0]');

  if (!customer) return <div>NOT FOUND</div>;

  return (
    <FormContext {...formState}>
      <form onSubmit={formState.handleSubmit(onFormSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Create New Contact</CardTitle>
          </CardHeader>

          <CardBody>
            <NewContactForm business={customer.business} />
          </CardBody>

          <CardFooter className="text-right">
            <button
              className="btn btn-primary"
              disabled={loading}
              type="submit"
            >
              Submit
            </button>
          </CardFooter>
        </Card>
      </form>
    </FormContext>
  );
};

export default CustomerNewContact;
