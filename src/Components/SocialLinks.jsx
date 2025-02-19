import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialMedia = [
  {
    id: 1,
    icon: <FaInstagram size={30} />,
    link: "#",
    bgColor: "bg-yellow-100",
  },
  { id: 2, icon: <FaTwitter size={30} />, link: "#", bgColor: "bg-blue-200" },
  { id: 3, icon: <FaFacebook size={30} />, link: "#", bgColor: "bg-gray-200" },
  {
    id: 4,
    icon: <FaMapMarkerAlt size={30} />,
    link: "#",
    bgColor: "bg-green-100",
    text: "Find our nearest store",
  },
];

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 my-6">
      {socialMedia.map((social) => (
        <a
          key={social.id}
          href={social.link}
          className={`flex flex-col justify-center items-center ${social.bgColor} text-black rounded-lg p-6 shadow-md hover:opacity-80 transition font-black text-center`}
        >
          {social.icon}
          {social.text && (
            <span className="mt-2 text-lg font-regular">{social.text}</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
