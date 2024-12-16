import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { data } = useSelector((state) => state.fetch);

  return (
    <div>
      {/* <h1 className="text-5xl font-bold text-green">Test</h1>
      <div className="text-3xl font-bold text-red">
        {data.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
