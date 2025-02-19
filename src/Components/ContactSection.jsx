import { FaPhone, FaEnvelope, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="flex justify-between items-center px-40 p-4 border-t text-gray-700 text-3xl">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <FaPhone className="text-black" />
          <p className="text-gray-500 block">Talk to us</p>
        </div>
        <p className="font-semibold">800-MYHOME (800-694663)</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <FaQuestionCircle className="text-black" />
          <span className="text-gray-500">Helpcentre</span>
        </div>
        <a href="https://help.homecentre.com" className="font-semibold text-black">help.homecentre.com</a>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <FaEnvelope className="text-black" />
          <span className="text-gray-500">Write to us</span>
        </div>
        <a href="mailto:support@homecentre.com" className="font-semibold text-black">support@homecentre.com</a>
      </div>

      <div className="flex items-center gap-4">
        <FaFacebookF className="text-black cursor-pointer" />
        <FaXTwitter className="text-black cursor-pointer" />
        <FaInstagram className="text-black cursor-pointer" />
      </div>

    </div>
  );
}
