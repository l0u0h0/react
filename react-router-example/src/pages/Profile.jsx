import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  console.log(useParams(), typeof id);
  return (
    <div>
      <h2>Profile Page</h2>
      {id && <p>id = {id}</p>}
    </div>
  );
}
