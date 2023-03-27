import React from "react";

class ImageComponent extends React.Component {
    render() { 
        return (<img src={this.src} alt={this.alt} />)
    }
   
}

export default ImageComponent