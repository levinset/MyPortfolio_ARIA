import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const data = [
  { id: 1, icon: <HiOutlineMail />, link: "mailto:m.kermani1991@gmail.com" },
  {
    id: 2,
    icon: <RiMessengerLine />,
    link: "https://www.messenger.com/t/+4366565241429",
  },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+4366565241429" },
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data;
