import { FaPhone, FaEnvelope, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="flex flex-col justify-between items-center p-4 my-4 sm:flex-row border-t text-gray-700 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <FaPhone className="text-black" />
          <p className="text-gray-500 block">Talk to us</p>
        </div>
        <p className="font-semibold">800-MYHOME (800-694663)</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          <FaQuestionCircle className="text-black" />
          <span className="text-gray-500">Helpcentre</span>
        </div>
        <a href="https://help.homecentre.com" className="font-semibold text-black">help.homecentre.com</a>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          <FaEnvelope className="text-black" />
          <span className="text-gray-500">Write to us</span>
        </div>
        <a href="mailto:support@homecentre.com" className="font-semibold text-black text-sm">support@homecentre.com</a>
      </div>

      <div className="flex gap-2 mt-4 sm:flex-cols sm:mt-0">
        <FaFacebookF className="text-black cursor-pointer" />
        <FaXTwitter className="text-black cursor-pointer" />
        <FaInstagram className="text-black cursor-pointer" />
      </div>

    </div>
  );
}
