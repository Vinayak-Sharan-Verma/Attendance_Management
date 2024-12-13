import React, { useState } from 'react'
import MonthSelection from '../../Selection/MonthSelection'
import SectionSelection from '../../Selection/SectionSelection'

const Attendance = () => {
    const [selectedMonth,setSelectedMonth]=useState();
    const [selectedSection,setSelectedSection]=useState();
    const onSearchHandler=()=>{

    }
  return (
    <div className='p-7'>
        <h2 className='font-bold text-2xl flex justify-between items-center'>
            Attendance
            {/* <NewStudent /> */}
        </h2>
        <div className='flex gap-5 p-2  my-3 rounded-lg border shadow-sm justify-end'>
            <div className='flex gap-1 items-center'>
                <label>Select Month:</label>
                <MonthSelection selectedMonth={(value)=>setSelectedMonth(value)} /> 
            </div>
            <div className='flex items-center gap-2'>
                <label>Select Section:</label>
                <SectionSelection /> 
            </div>
            <button type="search" className='items-center bg-violet-700 text-white 
            rounded-md p-2 text-md font-medium ml-5'
            onClick={()=>onSearchHandler()}>Search</button>
        </div>
    </div>
  )
}

export default Attendance