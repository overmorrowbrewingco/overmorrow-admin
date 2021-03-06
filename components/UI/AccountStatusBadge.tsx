import React from 'react';

import capitalize from 'helpers/capitalize';
import { AccountStatusEnum } from 'types/AccountStatusEnum';

interface Props {
  status: AccountStatusEnum;
}

const AccountStatusBadge: React.FC<Props> = ({ status }) => {
  const getBadgeColor = (s): string => {
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
