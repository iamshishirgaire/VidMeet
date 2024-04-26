import React from "react";
import CallList from "~/components/calls-list";
import PageWrapper from "~/components/page-wrapper";

function RecordingsPage() {
  return (
    <PageWrapper>
      <CallList type="recordings"></CallList>
    </PageWrapper>
  );
}

export default RecordingsPage;
