import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div><b><i>Best Sellers Books of 2018 </i></b></div>
        <div>
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}
