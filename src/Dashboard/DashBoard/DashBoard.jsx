import React from 'react'
import MonthSelection from '../../Selection/MonthSelection'
import SectionSelection from '../../Selection/SectionSelection'

const DashBoard = () => {
    return (
        <div className='p-7'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-2xl flex justify-between items-center'>
                    Dashboard
                    {/* <NewStudent /> */}
                </h2>
                <div className='flex items-center gap-4'>
                    <MonthSelection />
                    <SectionSelection />
                </div>
            </div>
        </div>
    )
}

export default DashBoard