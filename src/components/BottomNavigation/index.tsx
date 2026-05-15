import HomeIcon from "@/assets/icon/home.svg";
import MenuIcon from "@/assets/icon/menu.svg";
import BagIcon from "@/assets/icon/shopping-bag-icon.svg";
import HeartIcon from "@/assets/icon/heart.svg";
import UserIcon from "@/assets/icon/user.svg";

import { BottomNavigationItem } from "./BottomNavigationItem";

export function BottomNavigation() {
  return (
    <nav
      className="
        fixed bottom-0 z-50
        flex h-22 w-full
        items-center justify-around
        border-t border-neutral-200
        bg-white
        px-4
      "
    >
      <div className="mr-2">
        <BottomNavigationItem icon={HomeIcon} label="Home" active />
      </div>

      <div className="mr-2">
        <BottomNavigationItem icon={MenuIcon} label="Menu" active />
      </div>

      <div className="mr-2">
        <BottomNavigationItem icon={BagIcon} label="Carrinho" active />
      </div>

      <div className="mr-2">
        <BottomNavigationItem icon={HeartIcon} label="Favoritos" active />
      </div>

      <div className="mr-1.75">
        <BottomNavigationItem icon={UserIcon} label="Perfil" active />
      </div>
    </nav>
  );
}
