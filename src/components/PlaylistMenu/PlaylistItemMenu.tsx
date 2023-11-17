import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

interface PlaylistItemMenuProps {
  title: string;
}

const PlaylistItemMenu = ({ title }: PlaylistItemMenuProps) => {
  return (
    <li>
      <div className="text-xs text-primaryColor cursor-default hover:cursor-pointer hover:text-secondaryColor font-cifra truncate">
        {title}
      </div>
      <div className="flex text-base gap-1">
        <div className="text-gray-400 hover:text-primaryColor hover:cursor-pointer">
          <AiOutlineDelete />
        </div>
        <div className="text-gray-400 hover:text-primaryColor hover:cursor-pointer">
          <IoIosArrowUp />
        </div>
        <div className="text-gray-400 hover:text-primaryColor hover:cursor-pointer">
          <IoIosArrowDown />
        </div>
      </div>
    </li>
  );
};

export default PlaylistItemMenu;
