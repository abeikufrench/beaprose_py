import React, { Component } from 'react';
import ContentLoader from "react-content-loader";

export default class Loader extends Component {
    render() {
        return (
            <ContentLoader
                height={140}
                width={"100%"}
            >
                    {/* Only SVG shapes */}
                    
                <circle cx="30" cy="30" r="30" />
                    
                <rect x="80" y="17" rx="4" ry="4" width="100%" height="13" />
                    
                <rect x="80" y="40" rx="3" ry="3" width="100%" height="10" />
                
            </ContentLoader>
        )
    }
}
