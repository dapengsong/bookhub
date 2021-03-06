import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopFixed from 'components/top-fixed/index';
import Table from 'components/table/index';

import styles from './book-search.scss';

function filterBooks(fullData, query) {
  if (!query) {
    return fullData;
  }
  return fullData.filter(t => t.titleDisplay.toLowerCase().includes(query));
}

const mapStateToProps = (state, ownProps) => ({
  bookList: filterBooks(state.bookList, state.query),
  ...ownProps,
});

const mapDispatchToProps = () => ({
});

const colTitles = [
  {
    text: 'Title',
    file: 'titleDisplay',
  },
  {
    text: 'Author',
    file: 'author',
  },
  {
    text: 'Type',
    file: 'extname',
  },
  {
    text: 'Last Read',
    file: 'lastRead',
  },
  // {
  //   text: 'Tags',
  //   file: 'tags',
  // },
];

// function searchMore() {
//   console.log('searchMore');
// }

function ConnectedBookSearch(props) {
  return (
    <div className={styles.wrap}>
      <TopFixed type="book-search" />
      <div className={styles.contentWrap}>
        <Table
          type="book-search"
          colTitles={colTitles}
          bookList={props.bookList}
        />
      </div>
      {/* <div className={styles.operationGrop}>
        <button className={styles.addHub} onClick={searchMore}>Search More</button>
      </div> */}
    </div>
  );
}

ConnectedBookSearch.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape({
    md5: PropTypes.string.isRequired,
  })).isRequired,
};

const BookSearch = connect(mapStateToProps, mapDispatchToProps)(ConnectedBookSearch);

export default BookSearch;
