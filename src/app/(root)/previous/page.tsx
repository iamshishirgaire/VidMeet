import React from "react";
import CallList from "~/components/calls-list";
import PageWrapper from "~/components/page-wrapper";

function PreviousPage() {
  return (
    <PageWrapper>
      <div className="flex h-full w-full flex-col">
        <h1 className="my-3 text-2xl font-bold">Upcoming Meetings</h1>
        <CallList type="ended"></CallList>
      </div>
    </PageWrapper>
  );
}

export default PreviousPage;
