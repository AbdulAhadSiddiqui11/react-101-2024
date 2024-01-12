const Comment = ({ name, email, body }) => {
  return (
    <div className="border border-gray-200 rounded-lg py-1 px-3 m-1 w-[24%] h-[200px]">
      <div className="mb-3">
        <div className=" text-black font-bold text-md">{name}</div>
        <div className=" text-gray-400 text-sm px-2">{email}</div>
      </div>
      <div className="text-justify">{body}</div>
    </div>
  );
};

export default Comment;
