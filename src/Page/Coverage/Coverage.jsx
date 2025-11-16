import React, { useRef } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IoIosSearch } from "react-icons/io";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const service = useLoaderData();
  const mapRef = useRef(null)
  console.log(service);
  const position = [23.685, 90.3563];
  const mapFind = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = service.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if(district) {
        const coord = [district.latitude, district.longitude]
        console.log(district, coord)
        mapRef.current.flyTo(coord, 12)
    }
  };
  return (
    <div className="px-20 bg-white rounded-3xl">
      <h1 className="font-extrabold text-[#03373D] text-5xl my-10 pt-10">
        We are available in 64 districts
      </h1>
      <div className="relative my-10">
        <form onSubmit={mapFind}>
          <IoIosSearch className="absolute top-2.5 left-2 border-none" size={25} />
           <input
    className="
      w-[400px] p-2 pl-12  
      rounded-3xl 
      bg-[#CBD5E1]
      placeholder:translate-x-0
      focus:outline-none 
      focus:ring-0 
      focus:border-none
    "
    type="search"
    name="location"
    placeholder="Search here"
  />
          <input
            type="submit"
            value="Search here"
            className="bg-primary p-2 px-5 rounded-3xl -ms-7"
          />
        </form>
      </div>
      <p className="border border-gray-100 w-full"></p>
      <h3 className="font-extrabold text-[#03373D] text-3xl my-10">
        We deliver almost all over Bangladesh
      </h3>
      <div className="py-10">
        <MapContainer
          className="h-[700px]"
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {service.map((area, index) => (
            <Marker key={index} position={[area.latitude, area.longitude]}>
              <Popup>
                <strong>{area.district}</strong> <br /> Service area{" "}
                {area.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        ,
      </div>
    </div>
  );
};

export default Coverage;
