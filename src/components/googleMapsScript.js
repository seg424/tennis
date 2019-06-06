import {useEffect} from 'react';

const baseUrl = 'https://maps.googleapis.com/maps/api/js';

('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap');

const googleMapsScriptNotPresent = () =>
  !document.querySelector("[data-role='google-maps-script']");

export default () => {
  useEffect(() => {
    if (googleMapsScriptNotPresent()) {
      const script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('data-role', 'google-maps-script');
      script.src = `${baseUrl}?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
      document.body.appendChild(script);
    }
  });
  return null;
};
