import React, { useState } from 'react'

type EditableParagraphProps = {
    header?: string;
    content: string;
    onChange: (newContent: string) => void;
    isEditing: boolean;
    className: string;
  }

  

  const EditableParagraph = ({ header, content, onChange, isEditing, className }: EditableParagraphProps) => {
    const [newContent, setNewContent] = useState(content);


    const handleSave = () => {
        onChange(newContent);
      };
    


    return (
      header === "" ? (
      <>
        <select id="salary" value={newContent} onChange={(e) => onChange(e.target.value)} className='w-full rounded-md border-[1.26px] border-[#c4c4c4] text-[#999] outline-none xl:py-2 xl:px-3 lg:px-2 py-1 placeholder:text-[#999] font-inter font-normal xl:text-base lg:text-sm text-xs focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary'>
        <option className='font-mulish font-normal xl:text-base lg:text-sm text-xs text-blackish'>Calculate Salary Based on</option>
        {
          content.split(',').map((item) => (
            <option key={item} value={item.trim()} className='text-blackish'
            >{item}</option>
          ))
        }
      </select>
      <p className='md:block hidden'></p>
      </>
      ) : (
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className={className}>{header}</span>
            <span
               contentEditable={isEditing}
               onInput={(e) => setNewContent(e.currentTarget.textContent || '')}
               onBlur={handleSave}
               suppressContentEditableWarning
            >{content}</span>
        </p>
      )
  )
}

export default EditableParagraph;