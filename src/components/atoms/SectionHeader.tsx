import React from 'react';
import { PSectionTitleModel } from '../../models/p.section.title.model';


export const SectionHeader: React.FC<PSectionTitleModel> = ({ title, styles }) => {
  return (
    <div className='h-[60px] py-2 flex items-end'>
        <h2 className={`text-[rgba(0,0,0,1)] font-bold flex-1 ${styles}`}>{ title }</h2>
    </div>
  )
}
