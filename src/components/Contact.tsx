import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
        Contact
      </h2>

      <div className="space-y-5 text-inherit text-sm sm:text-base md:text-lg">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-400" />
          <span className="break-all sm:break-normal">
            <a href="mailto:shrikantlohar321@gmail.com">
              shrikantlohar321@gmail.com
            </a>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaPhone className="text-green-400" />
          <span>+91 7083922924</span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-400" />
          <span>Pune, Maharashtra, India</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
