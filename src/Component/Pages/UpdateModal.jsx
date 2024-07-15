import { Fragment, useState } from "react";
import {
  Dialog,
  Listbox,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateModal = ({ setIsOpen, isOpen, job, getData }) => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const hundleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.job_title.value;
    const min_price = parseFloat(form.min_price.value);
    const max_price = parseFloat(form.max_price.value);
    const email = form.email.value;
    const category = form.category.value;
    const deadline = startDate;
    const description = form.description.value;

    const jobsData = {
      jobTitle,
      deadline,
      category,
      min_price,
      max_price,
      description,
      email,
      bid_count: 0,
    };
    try { 
      const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/jobs/${job._id}`, jobsData) 
      console.log(data)
      toast.success("successfully update job data");
      getData()
      setIsOpen(false)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full min-h-[90vh] max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update job data
                </DialogTitle>
                <div className="mt-4 w-full">
                  <form onSubmit={hundleFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                      <div>
                        <label className="text-gray-700 " htmlFor="job_title">
                          Job Title
                        </label>
                        <input
                        defaultValue={job?.jobTitle}
                          id="job_title"
                          name="job_title"
                          type="text"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          className="text-gray-700 "
                          htmlFor="emailAddress"
                        >
                          Email Address
                        </label>
                        <input
                        defaultValue={job?.email}
                          id="emailAddress"
                          type="email"
                          name="email"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        />
                      </div>
                      <div className="flex flex-col gap-2 ">
                        <label className="text-gray-700">Deadline</label>

                        {/* Date Picker Input Field */}
                        <DatePicker
                          className="border p-2 rounded-md"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>

                      <div className="flex flex-col gap-2 ">
                        <label className="text-gray-700 " htmlFor="category">
                          Category
                        </label>
                        <select
                        defaultValue={job?.category}
                          name="category"
                          id="category"
                          className="border p-2 rounded-md"
                        >
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="Graphics Design">
                            Graphics Design
                          </option>
                          <option value="Digital Marketing">
                            Digital Marketing
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="text-gray-700 " htmlFor="min_price">
                          Minimum Price
                        </label>
                        <input
                        defaultValue={job?.min_price}
                          id="min_price"
                          name="min_price"
                          type="number"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label className="text-gray-700 " htmlFor="max_price">
                          Maximum Price
                        </label>
                        <input
                        defaultValue={job?.max_price}
                          id="max_price"
                          name="max_price"
                          type="number"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="text-gray-700 " htmlFor="description">
                        Description
                      </label>
                      <textarea
                      defaultValue={job?.description}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        name="description"
                        id="description"
                      ></textarea>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                    <button
                    type="button"
                    className="inline-flex px-8 justify-center rounded-md border border-transparent bg-red-100 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                      <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#008080] rounded-md hover:bg-[#1c7979] focus:outline-none focus:bg-gray-600">
                        update
                      </button>
                    </div>
                  </form>
                </div> 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateModal;
