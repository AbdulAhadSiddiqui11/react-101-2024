import { useState, useEffect } from "react";
import Comment from "./Comment";
import ShimmerCard from "./ShimmerCard";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [filteredComments, setFilteredComments] = useState([]);
  const [lastIdx, setLastIdx] = useState(0);
  const commentsPerPage = 12;

  const getComments = async () => {
    try {
      let commentsData = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      let commentsJson = await commentsData.json();

      setTimeout(() => setComments(commentsJson), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleNext = () => setPageNumber((prev) => prev + 1);
  const handlePrevious = () => setPageNumber((prev) => prev - 1);

  useEffect(() => {
    const newLastIdx = Math.min(pageNumber * commentsPerPage, comments.length);
    const firstIdx = newLastIdx - commentsPerPage;
    // console.log(lastIdx, " ", firstIdx);
    setFilteredComments(comments.slice(firstIdx, newLastIdx));
    setLastIdx(newLastIdx);
    // console.log(filteredComments);
  }, [pageNumber, comments]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">
        Comment Section
      </h2>
      {Array.isArray(comments) && comments.length > 0 ? (
        <div>
          <div className="flex flex-wrap justify-between">
            {filteredComments.map((comment) => (
              <Comment
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <button
              className={`m-1 px-2 py-2 bg-purple-600 rounded border-black text-white hover:bg-purple-800 ${
                pageNumber === 1 ? "bg-gray-600 hover:bg-gray-400" : ""
              }`}
              onClick={handlePrevious}
              disabled={pageNumber === 1}
            >
              Previous
            </button>
            <button
              className={`m-1 px-2 py-2 bg-purple-600 rounded border-black text-white hover:bg-purple-800 ${
                lastIdx === comments.length
                  ? "bg-gray-600 hover:bg-gray-400"
                  : ""
              }`}
              onClick={handleNext}
              disabled={lastIdx === comments.length}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap justify-between">
            {[...Array(12)].map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
          <div className="flex justify-between">
            <button
              className={`cursor-not-allowed m-1 px-2 py-2 bg-purple-600 rounded border-black text-white hover:bg-purple-800 ${
                pageNumber === 1 ? "bg-gray-600 hover:bg-gray-400" : ""
              }`}
              disabled={true}
            >
              Previous
            </button>
            <button
              className={`cursor-not-allowed m-1 px-2 py-2 bg-purple-600 rounded border-black text-white hover:bg-purple-800 ${
                lastIdx === comments.length
                  ? "bg-gray-600 hover:bg-gray-400"
                  : ""
              }`}
              disabled={true}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
