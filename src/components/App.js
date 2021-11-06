import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from "actions";

class App extends Component {
  handleAuth = (flag) => {
    this.props.changeAuth(flag);
  };

  renderButton = () => {
    if (this.props.auth) {
      return <button onClick={() => this.handleAuth(false)}>Sign out</button>;
    } else {
      return <button onClick={() => this.handleAuth(true)}>Sign in</button>;
    }
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(App);
