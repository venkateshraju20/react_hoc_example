import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  showComments = () => {
    return this.props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  };

  render() {
    return (
      <div>
        <h4>Comments List</h4>
        <ul>{this.showComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(CommentList);
