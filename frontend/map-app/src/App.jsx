/*import React, { Fragment, useState, useRef, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import axios from "axios";

import "./App.css";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [markers, setMarkers] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const inputLatRef = useRef(null);
  const inputLngRef = useRef(null);
  const inputIntensityRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleAddMarker = () => {
    const lat = parseFloat(inputLatRef.current.value);
    const lng = parseFloat(inputLngRef.current.value);
    const intensity = parseFloat(inputIntensityRef.current.value);

    // Latitude doğrulaması
    if (isNaN(lat) || lat < -90 || lat > 90) {
      alert(
        "Geçersiz latitude değeri. Latitude değeri -90 ile 90 arasında olmalıdır."
      );
      return;
    }

    // Longitude doğrulaması
    if (isNaN(lng) || lng < -180 || lng > 180) {
      alert(
        "Geçersiz longitude değeri. Longitude değeri -180 ile 180 arasında olmalıdır."
      );
      return;
    }

    // İntensite doğrulaması
    if (isNaN(intensity)) {
      alert("Geçersiz şiddet değeri. Şiddet bir sayı olmalıdır.");
      return;
    }
    if (!isNaN(lat) && !isNaN(lng) && !isNaN(intensity)) {
      const newCoords = { lat, lng };
      const newMarker = { coords: newCoords, intensity };

      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

      axios
        .post("http://localhost:8080/api/script/sent", {
          lat: lat,
          lon: lng,
          intensity: intensity,
        })
        .then((response) => {
          console.log("Post işlemi başarıyla tamamlandı:", response.data);
        })
        .catch((error) => {
          console.error("Post işlemi sırasında bir hata oluştu:", error);
        });

      const displayTime = intensity >= 7 ? 7000 : 1000;

      setTimeout(() => {
        setMarkers((prevMarkers) =>
          prevMarkers.filter((marker) => marker !== newMarker)
        );
      }, displayTime);
    }
  };

  const handleRandomEarthquake = () => {
    if (!isGenerating) {
      setIsGenerating(true);
      intervalRef.current = setInterval(() => {
        axios
          .get("http://localhost:8080/api/script/randomScript")
          .then((response) => {
            const { lat, lon, intensity } = response.data;
            const newCoords = { lat, lng: lon };
            const newMarker = { coords: newCoords, intensity };

            setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

            const displayTime = intensity >= 7 ? 7000 : 1000;

            setTimeout(() => {
              setMarkers((prevMarkers) =>
                prevMarkers.filter((marker) => marker !== newMarker)
              );
            }, displayTime);
          })
          .catch((error) => {
            console.error("Random Deprem alınırken bir hata oluştu:", error);
          });
      }, 500);
    } else {
      setIsGenerating(false);
      clearInterval(intervalRef.current);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="h1-title">Earthquake Map</h1>
        <div className="map-container">
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 0, lng: 0 }}
              zoom={2}
              mapContainerStyle={{
                margin: "50px",
                width: "1350px",
                height: "480px",
              }}
            >
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.coords}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: new window.google.maps.Size(50, 50),
                  }}
                />
              ))}
            </GoogleMap>
          ) : null}
        </div>
        <div className="input-container">
          <input type="number" ref={inputLatRef} placeholder="lat" />
          <input type="number" ref={inputLngRef} placeholder="lon" />
          <input type="number" ref={inputIntensityRef} placeholder="şiddet" />
          <div className="button-container">
            <button onClick={handleAddMarker}>Deprem yarat</button>
            <button onClick={handleRandomEarthquake}>
              {isGenerating ? "Random Deprem Durdur" : "Random Deprem Başlat"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
*/

import React, { Fragment, useState, useRef, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import axios from "axios";

import "./App.css";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [markers, setMarkers] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const inputLatRef = useRef(null);
  const inputLngRef = useRef(null);
  const inputIntensityRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleAddMarker = () => {
    const lat = parseFloat(inputLatRef.current.value);
    const lng = parseFloat(inputLngRef.current.value);
    const intensity = parseFloat(inputIntensityRef.current.value);

    // Latitude doğrulaması
    if (isNaN(lat) || lat < -90 || lat > 90) {
      alert(
        "Geçersiz latitude değeri. Latitude değeri -90 ile 90 arasında olmalıdır."
      );
      return;
    }

    // Longitude doğrulaması
    if (isNaN(lng) || lng < -180 || lng > 180) {
      alert(
        "Geçersiz longitude değeri. Longitude değeri -180 ile 180 arasında olmalıdır."
      );
      return;
    }

    // İntensite doğrulaması
    if (isNaN(intensity)) {
      alert("Geçersiz şiddet değeri. Şiddet bir sayı olmalıdır.");
      return;
    }
    if (!isNaN(lat) && !isNaN(lng) && !isNaN(intensity)) {
      const newCoords = { lat, lng };
      const newMarker = { coords: newCoords, intensity };

      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

      axios
        .post("http://localhost:8080/api/script/sent", {
          lat: lat,
          lon: lng,
          intensity: intensity,
        })
        .then((response) => {
          console.log("Post işlemi başarıyla tamamlandı:", response.data);
        })
        .catch((error) => {
          console.error("Post işlemi sırasında bir hata oluştu:", error);
        });

      const displayTime = intensity >= 7 ? 7000 : 1000;

      setTimeout(() => {
        setMarkers((prevMarkers) =>
          prevMarkers.filter(
            (marker) =>
              marker.coords.lat !== newCoords.lat ||
              marker.coords.lng !== newCoords.lng
          )
        );
      }, displayTime);
    }
  };

  const handleRandomEarthquake = () => {
    if (!isGenerating) {
      setIsGenerating(true);
      intervalRef.current = setInterval(() => {
        axios
          .get("http://localhost:8080/api/script/randomScript")
          .then((response) => {
            const { lat, lon, intensity } = response.data;
            const newCoords = { lat, lng: lon };
            const newMarker = { coords: newCoords, intensity };

            setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

            const displayTime = intensity >= 7 ? 7000 : 1000;

            setTimeout(() => {
              setMarkers((prevMarkers) =>
                prevMarkers.filter(
                  (marker) =>
                    marker.coords.lat !== newCoords.lat ||
                    marker.coords.lng !== newCoords.lng
                )
              );
            }, displayTime);
          })
          .catch((error) => {
            console.error("Random Deprem alınırken bir hata oluştu:", error);
          });
      }, 500);
    } else {
      setIsGenerating(false);
      clearInterval(intervalRef.current);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="h1-title">Earthquake Map</h1>
        <div className="map-container">
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 0, lng: 0 }}
              zoom={2}
              mapContainerStyle={{
                margin: "50px",
                width: "1350px",
                height: "480px",
              }}
            >
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.coords}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: new window.google.maps.Size(50, 50),
                  }}
                />
              ))}
            </GoogleMap>
          ) : null}
        </div>
        <div className="input-container">
          <input type="number" ref={inputLatRef} placeholder="lat" />
          <input type="number" ref={inputLngRef} placeholder="lon" />
          <input type="number" ref={inputIntensityRef} placeholder="şiddet" />
          <div className="button-container">
            <button onClick={handleAddMarker}>Deprem yarat</button>
            <button onClick={handleRandomEarthquake}>
              {isGenerating ? "Random Deprem Durdur" : "Random Deprem Başlat"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
