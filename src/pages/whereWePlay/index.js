import React, {useEffect} from 'react';
import styled from '@emotion/styled';

const baseUrl = 'https://maps.googleapis.com/maps/api/js';
const wrcMapUrl =
  'https://www.google.com/maps/place/Woburn+Racquet+Club/@42.509487,-71.166776,15z/data=!4m5!3m4!1s0x0:0xef701d922453d8dd!8m2!3d42.509487!4d-71.166776';

const googleMapsScriptNotPresent = () =>
  !document.querySelector("[data-role='google-maps-script']");

const loadScript = () => {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('data-role', 'google-maps-script');
  initializeMap(script);
  script.src = `${baseUrl}?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
  document.body.appendChild(script);
};

const initializeMap = () =>
  (window.initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.509608, lng: -71.166771},
      zoom: 13,
    });

    const marker = new window.google.maps.Marker({
      position: {lat: 42.509608, lng: -71.166771},
      map,
    });

    window.google.maps.event.addListener(marker, 'click', function() {
      window.open(wrcMapUrl);
    });
  });

const Container = styled.div`
  height: 500px;
  width: 780px;
  margin: auto;
`;

export default () => {
  useEffect(() => {
    if (googleMapsScriptNotPresent()) {
      loadScript();
    } else {
      initializeMap();
      window.initMap();
    }
  });
  return (
    <div>
      <h3>Woburn Raquet Club</h3>
      <h5>Address</h5>
      <div>
        Woburn Racquet Club <br />9 Webster Street, Woburn, MA 01801
        <div>
          <a href="tel:7819338850">(781) 933-8850 </a>
        </div>
      </div>
      <Container id="map" />
    </div>
  );
};
