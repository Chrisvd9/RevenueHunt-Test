import React from "react";
import { Card, RangeSlider } from "@shopify/polaris";
import { useRangeContext } from "../context/RangeContext";

const QtyInput = () => {
  const { rangeValue, handleRangeChange } = useRangeContext();

  return (
    <Card sectioned title="Background color">
      <RangeSlider
        label="Border radius in px, please move the range value to change it."
        value={rangeValue}
        onChange={handleRangeChange}
        output
      />
    </Card>
  );
};

export default QtyInput;
