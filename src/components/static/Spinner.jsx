import React from "react";
import loading from "../../assets/loading.gif";
import styles from "./styles/Spinner.module.css";

export default function Spinner({ status }) {
  return (
    <div className={styles.loaderbox}>
      <img src={loading} alt="loading" className="w-[100px]"/>
    </div>
  );
}
