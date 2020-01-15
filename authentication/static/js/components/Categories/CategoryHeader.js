import React from "react";

class CategoryHeader extends React.Component {
    render() {
        return (
            <>
            <img style={{marginTop: "1.5rem"}} src={`/static/bundles/${this.props.image}`} alt={this.props.alt}/>
            <h5 style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                padding: 0
            }}>{this.props.title}</h5>
            </>
        )
    }
}

export default CategoryHeader;