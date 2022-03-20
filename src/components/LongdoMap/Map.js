import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { longdo, map, LongdoMap } from './LongdoMap';
const Map = ({ latitude, longitude }) => {
  const key = process.env.REACT_APP_LONGDOMAP_KEY;

  const initMap = useCallback(() => {
    map.Layers.setBase(longdo.Layers.GRAY);
  }, []);

  useEffect(() => {
    convertCoordinateToGeo(latitude, longitude);
  }, [latitude, longitude]);

  // set redux's state in later.
  const convertCoordinateToGeo = async (lat, lon) => {
    const res = await axios.get(
      `https://api.longdo.com/map/services/address?lon=${lon}&lat=${lat}&key=${key}`
    );

    console.log('Location: ', res.data);
  };

  return (
    <div className="h-96">
      <LongdoMap id="longdo-map" mapKey={key} callback={initMap} />
    </div>
  );
};

export default Map;
