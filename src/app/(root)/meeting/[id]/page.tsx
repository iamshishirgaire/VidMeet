import React from "react";
import PageWrapper from "~/components/page-wrapper";

function MeetingPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <PageWrapper>
      <h1>Meeting Page</h1>
      <p>Slug: {params.id}</p>
    </PageWrapper>
  );
}

export default MeetingPage;
