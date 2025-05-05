import { useParams, Link } from "react-router-dom";
import jobsData from "../data/jobs";

const JobDetails = () => {
  const { category, id } = useParams();
  const job = jobsData[category]?.find((j) => j.id === parseInt(id));

  if (!job) return <p className="text-center mt-10 text-xl text-red-600">Job not found</p>;

  return (
    <div className="min-h-screen bg-sky-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-sky-300 p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-bold text-sky-800 mb-1">{job.title}</h2>
            <p className="text-gray-700 text-lg text-[25px] py-6">
              <strong>Company:</strong> {job.company}
            </p>
            {job.verified && (
              <span className="text-white bg-sky-800 text-[18px] mt-2 px-6 py-3 rounded-full inline-flex items-center gap-2">
                <img src="/src/assets/verified.svg" alt="Verified" className="w-10 h-10" />
                Verified Employer
              </span>
            )}
          </div>
          <img
            src={job.avatar}
            alt="Employer"
            className="w-40 h-40 mt-4 sm:mt-0 rounded-full object-cover border-4 border-sky-300"
          />
        </div>

        {/* Job Info Badges */}
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full font-medium text-[1.3rem]">
            💰 Pay: {job.pay}
          </span>
          <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full font-medium text-[1.3rem]">
            📅 Posted on: {job.date}
          </span>
          <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full font-medium text-lg-2xl">
            🛠 Category: {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-[1.5rem] leading-7">{job.description}</p>

        {/* Apply Now Button */}
        <div className="mt-8 text-center">
          <Link
            to="/apply"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
