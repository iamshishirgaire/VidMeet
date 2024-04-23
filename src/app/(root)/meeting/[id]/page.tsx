import React from "react";

function MeetingPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div>
      <h1>Meeting Page</h1>
      <p>Slug: {params.id}</p>
    </div>
  );
}

export default MeetingPage;
