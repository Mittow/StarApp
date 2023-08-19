import { HeaderTitle } from "../atoms/HeaderTitle"

export const Header = () => {
  return (
    <header className="w-full p-4 bg-black h-[89px] md:h-[52px]">
      <HeaderTitle title="People of Star Wars" />
    </header>
  )
}
