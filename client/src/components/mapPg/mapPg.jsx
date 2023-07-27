import React, { useEffect, useState } from "react";
import styles from "./mapPg.module.scss";
import pStyle from "../../css/page.module.scss";

const MapPg = ({ fbData }) => {
  const [mapAddr, setMapAddr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fbData.getMap().then((result) => {
      if (result) setMapAddr(result);
      else
        setMapAddr(
          "https://res.cloudinary.com/sudol5292/image/upload/v1690211157/%EC%96%91%EC%B2%AD%EC%88%98_%EC%A7%80%EB%8F%84_cphw3t.png"
        );
    });
  }, [fbData]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={`${styles.mapPg} ${pStyle.default}`}>
      <div className={styles.title}>지도</div>
      {loading ? (
        <div className={styles.loading}>
          <span></span>
        </div>
      ) : (
        <img
          className={styles.map_image}
          src={mapAddr}
          alt="지도 이미지"
          width="100%"
          height="auto"
        />
      )}
    </div>
  );
};

export default MapPg;
