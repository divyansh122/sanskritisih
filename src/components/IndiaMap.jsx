import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useNavigate, useLocation } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import heritageData from "./heritageData.json";
import "leaflet-routing-machine";

const customIcon = new L.Icon({
  iconUrl: "https://static.vecteezy.com/system/resources/previews/017/178/337/original/location-map-marker-icon-symbol-on-transparent-background-free-png.png",
  iconSize: [30, 30],
});

const MapComponent = ({ selectedSites }) => {
  const map = useMap();
  const [routeControl, setRouteControl] = useState(null);

  useEffect(() => {
    if (selectedSites.length > 1) {
      if (routeControl) {
        map.removeControl(routeControl);
      }

      const waypoints = selectedSites.map((site) =>
        L.latLng(site.coordinates.latitude, site.coordinates.longitude)
      );

      const control = L.Routing.control({
        waypoints: waypoints,
        routeWhileDragging: true,
        lineOptions: { styles: [{ color: "#6FA1EC", weight: 5 }] },
        createMarker: () => null,
      }).addTo(map);

      setRouteControl(control);
    }
  }, [selectedSites, map]);

  return null;
};

const IndiaMap = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState(null);
  const [selectedSites, setSelectedSites] = useState([]);
  const [siteToAdd, setSiteToAdd] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const stateFromQuery = query.get("state");
    if (stateFromQuery) {
      setSelectedState(stateFromQuery);
    }
  }, [location.search]);

  const handleSiteClick = (site) => {
    navigate(`/monument/${site.name}`, { state: { site } });
  };

  const handleSiteAdd = () => {
    const site = heritageData[selectedState]?.find((s) => s.name === siteToAdd);
    if (site && !selectedSites.some((s) => s.name === site.name)) {
      setSelectedSites((prevSites) => [...prevSites, site]);
    }
  };

  const handleRemoveSite = (siteName) => {
    setSelectedSites((prevSites) =>
      prevSites.filter((site) => site.name !== siteName)
    );
  };

  const CenterMapOnState = ({ state }) => {
    const map = useMap();
    useEffect(() => {
      if (map && heritageData[state]) {
        const bounds = L.latLngBounds(
          heritageData[state].map((site) => [
            site.coordinates.latitude,
            site.coordinates.longitude,
          ])
        );
        map.fitBounds(bounds);
        map.setMaxBounds(bounds); // Set the state-specific bounds
        map.setMinZoom(map.getZoom()); // Lock zoom level to prevent zooming out
      }
    }, [map, state]);
    return null;
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 bg-gray-100 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Heritage Sites</h2>
        <label className="block mb-4">
          Select State:
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full mt-1 p-2 bg-white border rounded"
          >
            {Object.keys(heritageData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>

        <div className="mb-8">
          {heritageData[selectedState]?.map((site) => (
            <div
              key={site.name}
              className="mb-4 p-4 bg-white rounded-lg shadow cursor-pointer"
              onClick={() => handleSiteClick(site)}
            >
              <img
                src={site.image_url}
                alt={site.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{site.name}</h3>
              <p className="text-sm text-gray-600">{site.detailed_description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Add Sites to Route</h2>
          <label className="block mb-2">
            Select Site:
            <select
              value={siteToAdd}
              onChange={(e) => setSiteToAdd(e.target.value)}
              className="w-full mt-1 p-2 bg-white border rounded"
            >
              <option value="">Select Site</option>
              {heritageData[selectedState]?.map((site) => (
                <option key={site.name} value={site.name}>
                  {site.name}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={handleSiteAdd}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
          >
            Add Site
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Selected Sites for Route:</h2>
          <ul className="mb-4">
            {selectedSites.map((site) => (
              <li key={site.name} className="mb-2 flex justify-between">
                {site.name}
                <button
                  onClick={() => handleRemoveSite(site.name)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-3/4">
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          minZoom={5} // Prevent zooming out beyond level 5
          maxZoom={15} // Allow zooming in up to this level
          zoomControl={false} // Disable zoom controls
          scrollWheelZoom={false} // Disable zooming with the scroll wheel
          doubleClickZoom={false} // Disable zooming by double-click
          touchZoom={false} // Disable zooming on touch devices
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          {heritageData[selectedState]?.map((site) => (
            <Marker
              key={site.name}
              position={[
                site.coordinates.latitude,
                site.coordinates.longitude,
              ]}
              icon={customIcon}
            >
              <Popup>
                <div className="cursor-pointer" onClick={() => handleSiteClick(site)}>
                  <img src={site.image_url} alt={site.name} />
                  <h3 className="text-lg font-semibold">{site.name}</h3>
                  <p className="text-sm text-gray-600">{site.detailed_description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <CenterMapOnState state={selectedState} />
          {selectedSites.length > 1 && <MapComponent selectedSites={selectedSites} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default IndiaMap;
