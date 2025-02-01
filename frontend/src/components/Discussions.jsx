import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaThumbsUp, FaUser } from "react-icons/fa";

// Simulated data for discussions
const initialDiscussions = [
  {
    id: 1,
    title: "Two Sum Problem Approach",
    content: "What's the most efficient way to solve the Two Sum problem?",
    author: "Alice",
    upvotes: 15,
    comments: [
      {
        id: 1,
        author: "Bob",
        content: "Using a hash map is the most efficient approach.",
        upvotes: 7,
      },
      {
        id: 2,
        author: "Charlie",
        content: "Brute force works but it's O(n^2).",
        upvotes: 3,
      },
    ],
  },
  {
    id: 2,
    title: "Understanding Merge Sort",
    content: "Can someone explain the time complexity of Merge Sort?",
    author: "David",
    upvotes: 10,
    comments: [
      {
        id: 3,
        author: "Eve",
        content: "Merge Sort has a time complexity of O(n log n).",
        upvotes: 5,
      },
    ],
  },
];

const DiscussionsPage = () => {
  const [discussions, setDiscussions] = useState(initialDiscussions);

  useEffect(() => {
    // Sort discussions by upvotes
    const sortedDiscussions = [...discussions].sort(
      (a, b) => b.upvotes - a.upvotes
    );
    setDiscussions(sortedDiscussions);
  }, []); // Added discussions to the dependency array

  const handleUpvote = (discussionId, commentId = null) => {
    setDiscussions((prevDiscussions) => {
      return prevDiscussions.map((discussion) => {
        if (discussion.id === discussionId) {
          if (commentId === null) {
            // Upvote the discussion
            return { ...discussion, upvotes: discussion.upvotes + 1 };
          } else {
            // Upvote a comment
            const updatedComments = discussion.comments.map((comment) =>
              comment.id === commentId
                ? { ...comment, upvotes: comment.upvotes + 1 }
                : comment
            );
            return { ...discussion, comments: updatedComments };
          }
        }
        return discussion;
      });
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8">DSA Discussions</h1>
      {discussions.map((discussion) => (
        <motion.div
          key={discussion.id}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">{discussion.title}</h2>
          <p className="text-gray-300 mb-4">{discussion.content}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FaUser className="text-gray-500 mr-2" />
              <span className="text-gray-400">{discussion.author}</span>
            </div>
            <button
              onClick={() => handleUpvote(discussion.id)}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition duration-200"
            >
              <FaThumbsUp className="mr-2" />
              {discussion.upvotes}
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Comments</h3>
            {discussion.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-700 rounded p-4 mb-2">
                <p className="mb-2">{comment.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{comment.author}</span>
                  <button
                    onClick={() => handleUpvote(discussion.id, comment.id)}
                    className="flex items-center bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded transition duration-200"
                  >
                    <FaThumbsUp className="mr-2" />
                    {comment.upvotes}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DiscussionsPage;
