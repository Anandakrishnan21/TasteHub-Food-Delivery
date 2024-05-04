import React from "react";
import Filter from "./Filter";

function Sidebar({ product, filter, setFilteredList }) {
  return (
    <aside className="aside md:overflow-y-auto scrollbar-hidden">
      <Filter
        products={product}
        filters={filter}
        setFilteredList={setFilteredList}
      />
    </aside>
  );
}

export default Sidebar;
