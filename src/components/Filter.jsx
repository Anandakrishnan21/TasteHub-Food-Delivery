import React, { useState } from "react";
import { Card, Checkbox, Slider } from "antd";

function Filter({ products, filters, setFilteredList }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const applyFilters = (selectedFilters) => {
    const filteredProducts = products.filter((product) => {
      return (
        selectedFilters.length === 0 || selectedFilters.includes(product.filter)
      );
    });

    setFilteredList(filteredProducts);
  };

  return (
    <Card className="border-[1px] border-neutral-300">
      <div className="flex flex-col gap-2 p-2">
        <p className="text-lg font-bold">Filters</p>
        {filters.map((filter) => (
          <Checkbox
            key={filter}
            checked={selectedFilters.includes(filter)}
            onChange={() => handleCheckboxChange(filter)}
          >
            {filter}
          </Checkbox>
        ))}
      </div>
      <hr />
      <div className="p-2">
        <p className="text-lg font-bold">Price</p>
        <Slider range defaultValue={[0, 100]} />
      </div>
      <div className="p-2">
        <p className="text-lg font-bold">Discount</p>
        <Slider range defaultValue={[0, 100]} />
      </div>
    </Card>
  );
}

export default Filter;
