import React from "react";

const Time = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  return (
    <div>
      <p className="mb-4 text-6xl font-bold text-white">
        {time.split(" ")[0]}{" "}
        <span className="text-xl">{time.split(" ")[1]}</span>
      </p>
      <p className="text-3xl text-white ">
        <span className="text-primary">{date.split(",")[0]}</span>{" "}
        {date.split(",")[1]}
      </p>
    </div>
  );
};

export default Time;
