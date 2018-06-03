import React from 'react';

class GoogleMap extends React.Component {


    componentDidMount() {
        const {lat, lng} = this.props;

        console.log( "Map Props: ", {lat, lng} );

        new google.maps.Map( this.refs.map, { zoom:12, center: {lat, lng} } );
    }
    render() {

        return (
        // this.refs.map
          <div ref="map" className="map"/>
        );
    }

}

export default GoogleMap;