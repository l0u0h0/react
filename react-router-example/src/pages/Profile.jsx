import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const params = useParams();
  console.log(params.id, typeof params.id);
  console.log(useParams(), typeof id);
  return (
    <div>
      <h2>Profile Page</h2>
      {id && <p>id = {id} 입니다.</p>}
    </div>
  );
}
