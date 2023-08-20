import { Spinner } from "../atoms/Spinner"

export const Loading = () => {

  return (
    <div className='w-full flex flex-row justify-center items-center p-8 gap-x-2'>
      <Spinner color="#828282" size="20px" />
      <span className="font-bold text-[#828282]">Loading</span>
    </div>
  )
}
