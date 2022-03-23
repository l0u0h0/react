import { useParams } from "react-router-dom";

export default function Profile() {
  const props = useParams();
  console.log(props);
  return <div>Profile Page</div>;
}
