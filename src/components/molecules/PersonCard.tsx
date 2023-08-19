export const PersonCard = () => {
  return (
    <div className='h-[69px] border-b border-[rgba(0,0,0,0.3)] flex flex-row justify-between items-center'>
      <div className='flex flex-col flex-1'>
        <span className='font-bold text-[rgba(0,0,0,1)]'>Luke Skywalker</span>
        <span className='text-sm text-[rgba(0,0,0,0.5)]'>Human from Tatooine</span>
      </div>
      <span className='font-bold text-xl'>{ ">" }</span>
    </div>
  )
}
