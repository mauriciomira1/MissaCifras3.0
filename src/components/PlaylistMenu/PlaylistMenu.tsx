// CSS
import styles from "./PlaylistMenu.module.css";

// Ícones

import { LuEdit } from "react-icons/lu";
import PlaylistItemMenu from "./PlaylistItemMenu";

const PlaylistMenu = () => {
  const musicTitle01 = "Como é bom a gente se encontrar";

  return (
    <div className="font-text px-2 flex flex-col justify-center items-center bg-white shadow-md gap-2 w-44 py-2 font-bold rounded">
      <h3 className="text-primaryColor cursor-pointer flex gap-1 items-center text-sm hover:text-gray-600">
        Playlist
        <span className="text-gray-400">
          <LuEdit />
        </span>
      </h3>
      <ol className={`flex flex-col w-full gap-1 ${styles.playlistItem}`}>
        <PlaylistItemMenu title={musicTitle01} />
      </ol>
    </div>
  );
};

export default PlaylistMenu;
