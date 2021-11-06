import React, { Component } from "react";
import { connect } from "react-redux";

const requireAuth = (ChildComponent) => {
  class ComposedComponent extends Component {
    handleNavigation() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    componentDidMount() {
      console.log("calling did mount");
      this.handleNavigation();
    }

    componentDidUpdate() {
      console.log("calling did update");
      this.handleNavigation();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
