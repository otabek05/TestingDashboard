import React, { useEffect, useState } from 'react';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [addresses] = useState([
    {
      address: 'Incheon Bus Terminal',
      latitude: 37.4768,
      longitude: 126.6306,
    },
    {
      address: 'Incheon Immigration Office',
      latitude: 37.4525,
      longitude: 126.6597,
    },
  ]);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=dd3b98a12bc700e0583223f92fe9a912&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.4000, 126.9595),
          level: 9,
        };
        const mapInstance = new window.kakao.maps.Map(container, options);
        setMap(mapInstance);

        // Create markers for each address
        addresses.forEach((address) => {
          const markerPosition = new window.kakao.maps.LatLng(address.latitude, address.longitude);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          // Add click event listener to each marker
          window.kakao.maps.event.addListener(marker, 'click', () => {
            setSelectedMarker(marker);
            setSelectedAddress(address);
            fetchAddressInfo(address);
          });

          marker.setMap(mapInstance);
        });
      });
    };
  }, []);

  const fetchAddressInfo = async (address) => {
    try {
      // Replace this with your backend API call to fetch address info
      // For now, we'll just use a placeholder
      const info = `Address information for ${address.address}`;
      setSelectedInfo(info);
    } catch (error) {
      console.error('Error fetching address info:', error);
    }
  };

  useEffect(() => {
    if (map && selectedMarker) {
      // Set the map center and level to the selected marker
      map.setCenter(selectedMarker.getPosition());
      map.setLevel(3);
    }
  }, [map, selectedMarker]);

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' ,height:'74vh'}}>
      <div  id="map" style={{ width: '70%', height: '90%', border:"none", boxShadow: "0px 0px 5px green"}}></div>
      {selectedAddress && (
        <div>
          <h2>Selected Address</h2>
          <p>Street: {selectedAddress.address}</p>
          <p>Latitude: {selectedAddress.latitude}</p>
          <p>Longitude: {selectedAddress.longitude}</p>
          {selectedInfo && (
            <div>
              <h3>Address Info</h3>
              <p>{selectedInfo}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
