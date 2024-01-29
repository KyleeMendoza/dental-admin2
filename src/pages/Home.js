import React from "react";
import FilterDate from "../components/FilterDate";

function Home() {
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  return (
    <div className="border-2 border-red-600 flex flex-col gap-5 py-5 h-full">
      <div className="">
        <FilterDate
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
      </div>
      <div className=" flex flex-col items-center gap-5 w-full h-full">
        <div className="  flex justify-between items-center gap-2 w-full">
          <div className="bg-blue-600 h-40 w-48 rounded-lg">
            all appointment count ?{" "}
          </div>
          <div className="bg-blue-600 h-40 w-48 rounded-lg">
            pending appointment count?
          </div>
          <div className="bg-blue-600 h-40 w-48 rounded-lg">users count?</div>
          <div className="bg-blue-600 h-40 w-48 rounded-lg">total revenue?</div>
          <div className="bg-blue-600 h-40 w-48 rounded-lg">
            revenue of the month?
          </div>
        </div>
        <div className="flex justify-between items-center gap-10 w-full h-[80%]">
          <div className="bg-blue-600 flex-1 h-full rounded-lg">
            most availed service maybe bar graph
          </div>
          <div className="bg-blue-600 flex-1 h-full rounded-lg">
            calendar of schedule appointments
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
