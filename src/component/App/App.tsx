import React, { useEffect, useState, useRef } from 'react';
import { Map, GoogleApiWrapper, GoogleAPI, IMarkerProps } from 'google-maps-react';
import { getGeoLocations } from '../../utils/getGeoLocation';
import { IAppProps } from './interfaces';

import './App.css';

const App: React.SFC<IAppProps> = ({
  google,
}) => {
  const [ coords, setCoords ] = useState<Partial<IMarkerProps>>({});
  const mapInstance = useRef<GoogleAPI>({});

  useEffect(() => {
    const getCoords = async () => {
      try{
        const coords = await getGeoLocations();
        setCoords(coords as Partial<IMarkerProps>);
        
        new google.maps.Marker({
          position: coords,
          map: mapInstance.current,
        });        
      }
      catch (err){
        console.log(err);
      }      
    }
    getCoords();
  }, [google])

  const ready = (mapProps: any, map: GoogleAPI) => {
    mapInstance.current = map    
  }

  return (
    <div className="App">      
      <Map
        google={google}
        center={coords}  
        onReady={ready}      
      />      
    </div>
  );
}

export const MapApp =  GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY || '',
})(App)
