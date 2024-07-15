import { useState } from "react";
import { FaEllipsisV, FaEdit, FaTrashAlt } from "react-icons/fa";

const JobCard = ({ job, onUpdate, onDelete }) => {
  const {
    _id,
    deadline,
    max_price,
    min_price,
    jobTitle,
    category,
    description,
    bid_count,
  } = job || {};
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <span className="px-2 py-1 text-xs font-semibold text-white uppercase bg-[#008080] rounded">
            {category}
          </span>
          <span className=" text-sm text-gray-600">
            <strong className="">Deadline:</strong> {new Date(deadline).toLocaleDateString()}
            
          </span>
        </div>
        <div className="relative -top-3">
          <button
            onClick={handleDropdownToggle}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaEllipsisV />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-32 bg-white rounded-md shadow-lg">
              <button
                onClick={onUpdate}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaEdit className="mr-2" /> Update
              </button>
              <button
                onClick={onDelete}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100"
              >
                <FaTrashAlt className="mr-2" /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <h1 className="mt-4 text-xl font-bold text-gray-800">{jobTitle}</h1>
      <p title={description} className="mt-2 text-sm text-gray-600">
        {description.substring(0, 60)}...
      </p>
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            <strong>Range:</strong> ${min_price} - ${max_price}
          </span>
          <span>
            <strong>Bid:</strong> {bid_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
