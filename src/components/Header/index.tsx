import { HeaderActions } from "./HeaderAction";
import { Logo } from "./Logo";
import { SearchButton } from "./SearchButton";

export function Header() {
  return (
    <header
      className="fixed z-9999 w-full pl-6 pr-4 flex
     items-center justify-between top-0 bg-white h-17"
    >
      <SearchButton />

      <Logo />

      <HeaderActions />
    </header>
  );
}
