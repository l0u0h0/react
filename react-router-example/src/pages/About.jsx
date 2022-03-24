import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

export default function About() {
  console.log(useLocation());
  const { search } = useLocation();
  console.log(search);
  const obj = new URLSearchParams(search);
  console.log(obj);
  console.log(obj.get("name"));
  const query = queryString.parse(search);
  console.log(query);
  return (
    <div>
      <h2>About Page</h2>
      {query.name && <p>name = {query.name} </p>}
    </div>
  );
}
