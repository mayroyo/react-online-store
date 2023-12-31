import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      <div style={{ flexWrap: "wrap" }} className="d-flex">
        {device.brands.map((brand) => (
          <Card
            style={{ cursor: "pointer" }}
            key={brand.id}
            className="p-3"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          >
            {brand.name}
          </Card>
        ))}
      </div>
    </Row>
  );
});

export default BrandBar;
