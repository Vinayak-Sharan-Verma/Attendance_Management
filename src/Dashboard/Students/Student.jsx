import React from 'react'
import NewStudent from './components/NewStudent'
import StudentTable from './components/StudentTable'

const Student = () => {
  return (
    <div className='p-7'>
        <h2 className='font-bold text-2xl flex justify-between items-center'>
            Students 
            <NewStudent />
        </h2>
        <StudentTable />
    </div>
  )
}

export default Student