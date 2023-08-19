import React from 'react';

interface Props {
  title: string;
  styles?: string;
}

export const SectionTitle: React.FC<Props> = ({ title, styles }) => {
  return (
    <div className='h-[60px] py-2 flex items-end'>
        <h2 className={`text-[rgba(0,0,0,1)] font-bold flex-1 ${styles}`}>{ title }</h2>
    </div>
  )
}
