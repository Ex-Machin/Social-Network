import React from 'react'
import loading from "../../assets/images/loading.svg";

const Preloader = () => {
  return (
    <div>
      <img src={loading} alt="" />
    </div>
  );
}

export default Preloader