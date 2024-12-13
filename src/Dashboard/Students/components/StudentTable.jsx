import React, { useEffect, useState } from 'react'
import { AgGridReact } from '@ag-grid-community/react'; // React Data Grid Component
import "@ag-grid-community/core"; // Mandatory CSS required by the Data Grid
import "@ag-grid-community/core"; // Optional Theme applied to the Data Grid
import { Search } from 'lucide-react';

const StudentTable = () => {
    const [colDefs, setColDefs] = useState([
        { feild: "id", filter: true },
        { feild: "name", filter: true },
        { feild: "regd", filter: true },
        { feild: "section", filter: true },
    ])
    const [rowData, setRowData] = useState([]);
    const [searchInput, setSearchInput] = useState();
    // useEffect{()=>{
    //     studentList&&setRowData(studentList)
    // },[studentList]}
    //import of ag-grid.css need to be setup
    return (
        <div
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
            <div className='p-2 rounded-lg border shadow-sm flex m-2 max-w-sm gap-2'>
                <Search />
                <input type="search" placeholder="Search" 
                className='outline-none w-full'
                onChange={(event)=>setSearchInput(event.target.value)}/>
            </div>
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                </div>
                </div>
            </div>
            </div>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                quickFilterParser={searchInput}
            />
        </div>
    )
}

export default StudentTable