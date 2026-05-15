import { HeaderActions } from "./HeaderAction";
import { Logo } from "./Logo";
import { SearchButton } from "./SearchButton";

export function Header() {
  return (
    <header
      className="fixed  z-9999 pt-[66.1px] w-full pl-6 pr-4 pb-[22.1px] flex
     items-center justify-between top-0  bg-white h-28"
    >
      <SearchButton />

      <Logo />

      <HeaderActions />
    </header>
  );
}
