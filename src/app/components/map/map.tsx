"use client"

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from './map.module.css';

const GoogleMapComponent = () => {

  return (
    <div className="map-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0985799337564!2d105.306131475764!3d-5.401950653976383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db78c9ab315b%3A0xb638a83d41ff5ee7!2sGLG%20Rental%20Mobil%20Lampung!5e0!3m2!1sid!2sid!4v1733547818833!5m2!1sid!2sid" width="600" height="450" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.map}></iframe>

    </div>
  );
};

export default GoogleMapComponent;
