import React, { useState } from "react";
import { Card, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { filterList, productList } from "../utils/data";
import Sidebar from "./Sidebar";

const ProductList = ({ category }) => {
  const products = productList[category] || [];
  const filters = filterList[category] || [];
  const [filteredList, setFilteredList] = useState(products);

  return (
    <div className="max-h-screen flex flex-col">
      <div className="h-[93vh] grid grid-cols-1 md:grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar filter={filters} product={products} setFilteredList={setFilteredList} />
        <div className="w-full md:overflow-x-hidden">
          <div className="w-full lg:w-10/12 flex justify-center items-center py-4 p-4">
            <div className="w-full md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4">
              {filteredList.map((product) => (
                <Card
                  key={product.id}
                  className="border-[1px] border-neutral-300"
                  width={100}
                >
                  <div className="flex flex-col gap-4">
                    <img
                      src={product.imgSrc}
                      alt={`product-${product.id}`}
                      className="w-10/12 h-48 self-center"
                    />
                    <p className="font-semibold">{product.name}</p>
                    <div className="text-base flex gap-2">
                      <p className="font-bold">{product.offPrice}</p>
                      <p className="line-through">{product.price}</p>
                      {product.off ? (
                        <span className="text-sm bg-neutral-200 rounded px-1">
                          {product.off}
                        </span>
                      ) : null}
                    </div>
                    <Button className="w-full flex justify-between items-center text-blue-800 font-bold">
                      <span>Add</span>
                      <PlusOutlined />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
