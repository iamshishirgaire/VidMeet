import React from "react";
import CallList from "~/components/calls-list";
import PageWrapper from "~/components/page-wrapper";

function UpcomingPage() {
  return (
    <PageWrapper>
      <CallList type="upcoming"></CallList>
    </PageWrapper>
  );
}

export default UpcomingPage;
