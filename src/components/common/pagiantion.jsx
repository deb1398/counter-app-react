import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {

  const pagesCount = Math.ceil(itemsCount / pageSize);
  // const page = [];
  // for( let i=1; i<pageCount+1; i++){
  //   page.push(i);
  // }
  if (pagesCount === 1) return null;
  const page = _.range(1, pagesCount + 1);


  return (
    <nav>
      <ul className="pagination">
        {
          page.map(page => (
            <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}><a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a></li>
          ))
        }
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;