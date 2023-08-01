import { Link } from "react-router-dom";

const AdmissionCard = ({college}) => {
    const {_id, collegeImage, admissionDates, collegeName, description} = college;
    return (
        <div>
            <Link to={`/apply/${_id}`} className="col">
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt="College"
                    src={collegeImage}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                    <time
                        className="block text-xs text-white/90"
                    >
                        {admissionDates}
                    </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg text-white">
                        {collegeName}
                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        {description}
                    </p>
                    </div>
                </div>
                </article>
            </Link>
        </div>
    );
};

export default AdmissionCard;

