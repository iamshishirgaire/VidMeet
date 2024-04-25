import React from "react";
import PageWrapper from "~/components/page-wrapper";
import Time from "./components/time";
import MeetingTypeList from "./components/MeetingTypeList";

function HomePage() {
  return (
    <PageWrapper>
      <div className="flex h-full w-full flex-col">
        <section className="bg-hero m-10 h-[300px] rounded-xl bg-cover">
          <div className="flex h-full w-full flex-col justify-between p-10 backdrop-blur-sm">
            <h1 className="w-fit rounded-lg bg-white/25 p-2 font-semibold">
              Upcoming Meeting At 12:30 PM
            </h1>
            {<Time></Time>}
          </div>
        </section>
        <MeetingTypeList></MeetingTypeList>
      </div>
    </PageWrapper>
  );
}

export default HomePage;
