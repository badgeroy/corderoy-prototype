import React from "react";

class Catalog extends React.Component {
    render() {
        return (
            <div className="Catalog">
              {this.props.category}
            </div>
        );
    }
}

export default Catalog;