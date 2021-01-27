import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { error: error };
  }

  render() {
    if (this.state.error) {
        // Render this fallback UI instead of the Blank Html Page
      return <h1>Something broke. Try to fix it.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
