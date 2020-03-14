import React from 'react';

import capitalize from '~/helpers/capitalize';

const AccountStatusBadge = ({ status }) => {
  const getBadgeColor = (s) => {
    switch (s) {
      case 'potential':
        return 'warning';
      case 'pending':
        return 'orange';
      case 'active':
        return 'primary';
      case 'inactive':
        return 'secondary';
      default:
        return 'danger';
    }
  };

  return (
    <span className={`AccountStatusBadge badge bg-${getBadgeColor(status)}`}>
      {capitalize(status)}
    </span>
  );
};

export default AccountStatusBadge;
