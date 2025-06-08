import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  console.log("id", id);
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between h-16 mt-32">
        <h1 className="text-2xl font-bold">PostPage{id}</h1>
      </div>
    </div>
  );
};

export default PostPage;
