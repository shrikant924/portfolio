import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-24">
      <h2 className="text-4xl font-bold mb-10">Contact</h2>

      <div className="space-y-4">
        <p>
          <FaEnvelope className="inline mr-2" />
          shrikantlohar321@gmail.com
        </p>

        <p>
          <FaPhone className="inline mr-2" />
          +91 7083922924
        </p>

        <p>Pune, Maharashtra, India</p>
      </div>
    </section>
  );
};

export default Contact;
