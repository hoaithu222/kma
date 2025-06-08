import { useParams } from "react-router-dom";

const EventPage = () => {
  const { id } = useParams();
  console.log("id", id);
  return <div>EventPage{id}</div>;
};

export default EventPage;
