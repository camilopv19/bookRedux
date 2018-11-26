import React, { Component } from "react";
import { connect } from 'react-redux';  //Inside {} is a property of the lib.

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.tile} 
                onClick={ ()=>{ this.props.selectBook(book) } }
                className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        //mapStateProps will send here the returning objects as "props"
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateProps(state) {
    //Whatever is returned will show up as Props inside BookList
    return{
        books: state.books
    };
}

//Anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators( { selectBook: selectBook}, dispatch )
}

//Promote BookList from a (dumb) component to a container - it needs to know about the dispatch method "selectBook"
//Make it available as a prop
export default connect(mapStateProps, mapDispatchToProps)(BookList);