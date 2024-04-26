import React from "react";
import PageWrapper from "~/components/page-wrapper";
import Time from "./components/time";
import MeetingTypeList from "./components/MeetingTypeList";

function HomePage() {
  return (
    <PageWrapper>
      <div className="flex h-full w-full flex-col">
        <section className="m-10  h-[300px]  rounded-xl bg-hero bg-cover">
          <div className="flex h-full w-full flex-col justify-between p-10">
            <h1 className="mb-10 w-fit rounded-lg bg-white/25 p-2 font-semibold text-white">
              Upcoming Meeting At 12:30 PM
            </h1>
            {<Time></Time>}
          </div>
        </section>
        <div className="p-10 ">
          <MeetingTypeList></MeetingTypeList>
        </div>
      </div>
    </PageWrapper>
  );
}

export default HomePage;
