import React from 'react';

import capitalize from 'helpers/capitalize';

import { StatusEnum } from './Status';

export type FilterOption = {
  label: string;
  value: string;
};

export type Filter = {
  label: string;
  onChange: Function;
  options: FilterOption[];
  name: string;
  value: string;
};

interface Props {
  filters?: Filter[];
}

const CustomerListFilters: React.FC<Props> = ({ filters = [] }) => (
  <div className="CustomerListFilters">
    <form>
      <div className="row">
        {filters.map((filter) => (
          <div className="col-sm-4" key={filter.value}>
            <div className="form-group mb-2 mr-2" key={filter.name}>
              <label htmlFor={filter.name}>{filter.label}</label>
              <select
                className="form-control form-control-sm"
                onChange={(e): any =>
                  filter.onChange(e.target.value === '' ? null : e.target.value)
                }
                name={filter.name}
                value={filter.value || ''}
              >
                <option value="" />

                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label || capitalize(option.value)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </form>
  </div>
);

export default CustomerListFilters;
