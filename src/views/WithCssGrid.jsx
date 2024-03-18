import React from "react";
import PolarisCard from "../components/PolarisCard";
import BootStrapCard from "../components/BootStrapCard";
import QtyInput from "../components/QtyInput";

const WithCssGrid = () => {
  return (
    <>
      <div className="container">
        <div className="component">
          <PolarisCard />
        </div>
        <div className="component">
          <BootStrapCard />
        </div>
        <div className="component">
          <QtyInput />
        </div>
      </div>
    </>
  );
};

export default WithCssGrid;
