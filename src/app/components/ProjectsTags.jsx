import React from 'react'

const ProjectsTags = ({name,onClick,isSelected}) => {
    const buttonStyle = isSelected? "text-white border-red-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <div>
       <button onClick={()=>onClick(name)} className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>{name}</button>
    </div>
  )
}

export default ProjectsTags
