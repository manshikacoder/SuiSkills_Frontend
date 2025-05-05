// components/JobCard.jsx
import { Link } from "react-router-dom";

const JobCard = ({ job, category }) => {
  return (
    <Link to={`/job/${category}/${job.id}`} className="no-underline text-inherit cursor-pointer">
      <div className="bg-white rounded-xl shadow border-2 border-blue-300 p-4 flex flex-col justify-between m-5">
        <div className="bg-sky-100 rounded-lg p-4 flex justify-between items-center mb-3">
          <div className="flex justify-baseline items-center gap-2 flex-col">
            {job.verified && (
              <span className="text-white font-semibold text-xs bg-sky-800 px-2 py-2 rounded-full flex items-center gap-1">
                <img src="./src/assets/verified.svg" alt="" /> Verified
              </span>
            )}
            <span className="text-gray-700 text-sm font-medium">{job.company}</span>
          </div>
          <img
            src={job.avatar}
            alt="Employer"
            className="w-15 h-15 rounded-full object-cover"
          />
        </div>

        <h3 className="text-lg font-bold text-black mb-2">{job.title}</h3>

        <div className="flex gap-2 flex-wrap mb-2">
          <span className="bg-sky-100 text-sky-800 text-sm px-3 py-1 rounded-full">
            Earn {job.pay}
          </span>
          <span className="bg-sky-100 text-sky-800 text-sm px-3 py-1 rounded-full">
            {job.date}
          </span>
        </div>

        <p className="text-gray-600 text-[15px]">{job.description}</p>
      </div>
    </Link>
  );
};

export default JobCard;
