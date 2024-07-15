import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-jobs`);
      setJobs(data);
    };
    getData();
  }, []);

  const handleUpdate = (jobId) => {
    console.log('Update job with ID:', jobId);
    // Implement your update logic here
  };
  
  const handleDelete = (jobId) => {
    console.log('Delete job with ID:', jobId);
    // Implement your delete logic here
  };

  return (
    <div className="mx-7 my-8 md:mx-16">
        <div>
            <select  
              name='category'
              id='category'
              className='border p-4 mt-4  outline-none flex justify-start rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Web Development'>Web Development</option>
              <option value='Graphics Design'>Graphics Design</option>
              <option value='Digital Marketing'>Digital Marketing</option>
            </select>
          </div>
      <div className="grid  grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} onUpdate={() => handleUpdate(job._id)} onDelete={() => handleDelete(job._id)} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
