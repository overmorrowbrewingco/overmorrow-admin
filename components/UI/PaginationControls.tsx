import React from 'react';
import Pagination from 'react-js-pagination';

interface Props {
  currentPage: number;
  limit: number;
  onPageChange: Function;
  totalCount: number;
  totalPages: number;
}

const PaginationControls: React.FC<Props> = ({
  currentPage,
  limit,
  onPageChange,
  totalCount,
  totalPages,
}) => (
  <nav>
    <Pagination
      activeClass="active"
      activePage={currentPage}
      disabledClass="disabled"
      hideFirstLastPages={true}
      innerClass="pagination"
      itemClass="page-item"
      itemsCountPerPage={limit}
      linkClass="page-link"
      nextPageText="»"
      onChange={onPageChange}
      pageRangeDisplayed={5}
      prevPageText="«"
      totalItemsCount={totalCount}
    />
  </nav>
);

export default PaginationControls;
