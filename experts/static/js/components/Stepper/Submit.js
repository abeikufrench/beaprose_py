import React, { Component } from 'react'
import ProfileContext from '../../contexts/ProfileContext';

export default class Submit extends Component {
    render() {
        const { isActive } = this.props;
        const { handleProfileSubmit } = this.context;
        if (isActive === false) return null;
    
        return (
          <button onClick={handleProfileSubmit} className="btn btn-submit" type="submit">
            Submit
          </button>
        );
    
      }
}

Submit.contextType = ProfileContext;