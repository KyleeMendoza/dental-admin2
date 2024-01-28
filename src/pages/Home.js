import React from "react";
import FilterDate from "../components/FilterDate";

function Home() {
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  return (
    <div className="border-2 border-red-600 flex flex-col gap-5">
      <div className="border-2 border-green-600">
        <FilterDate
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
      </div>
      <div className="border-2 border-green-600 flex justify-center items-center gap-2 w-full">
        <div className="bg-blue-600 h-20 w-20"></div>
        <div className="bg-blue-600 h-20 w-20"></div>
        <div className="bg-blue-600 h-20 w-20"></div>
        <div className="bg-blue-600 h-20 w-20"></div>
      </div>
    </div>
  );
}

export default Home;
