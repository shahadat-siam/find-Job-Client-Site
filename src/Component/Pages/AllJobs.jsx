import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import toast from "react-hot-toast";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getData();
  }, [selectedCategory]);

  const getData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-jobs`, {
        params: {
          category: selectedCategory,
        },
      });
      setJobs(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch jobs");
    }
  };

  const handleDelete = async (jobId) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/jobs/${jobId}`);
      toast.success("Successfully deleted this job");
      getData();
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete job");
    }
  };

  return (
    <div className="mx-7 my-8 md:mx-16">
      <div>
        <select
          name="category"
          id="category"
          className="border p-4 mt-4 outline-none flex justify-start rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Filter By Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} getData={getData} onDelete={() => handleDelete(job._id)} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
