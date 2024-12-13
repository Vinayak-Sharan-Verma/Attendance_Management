import React, { useState } from 'react'
import './Modal.css'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    /* DialogHeader,*/
    DialogTitle,
} from "@radix-ui/react-dialog"
import { useForm } from 'react-hook-form';

const NewStudent = () => {
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    
    const onSubmit=(data)=>{
        console.log("Student Data",data);
    }
    return (
        <div>
            <button onClick={() => setOpen(true)} className='items-center bg-violet-700 text-white
            rounded-md p-2 text-sm'> + Add New Student </button>
            <Dialog open={open}>
                <DialogContent>
                    <div className="fixed p-2 mr-5 bg-rgba(0, 0, 0, 0.5) justify-center items-center
                        top-25 left-1/3 rounded-xl bg-slate-600">
                        <DialogTitle>Add New Student</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='bg-slate-400 rounded-md modal-content'>
                                    <div className='px-3'>
                                        <label className='text-md font-semibold pr-2' > Full Name </label> <br />
                                        <input className='rounded-lg pl-2 my-2' type='text' 
                                        placeholder='e.g. Vinayak Sharan Verma' {...register("name", { required: true })}/>
                                    </div>
                                    <hr />
                                    <div className='px-3'>
                                        <label className='text-md font-semibold pr-2' > Registration Number </label> <br />
                                        <input type="number" className='rounded-lg pl-2 my-2'
                                        placeholder='e.g. 2141022004' {...register("regd", { required: true })} />
                                    </div>
                                    <hr />
                                    <div className='px-3'>
                                        <label className='text-md font-semibold pr-2' > Section </label> <br />
                                        <input className='rounded-lg pl-2 my-2' type='text' 
                                        placeholder='e.g. CSE-H' {...register("section", { required: true })} />
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center justify-end mt-5 right-0'>
                                    <button onClick={() => setOpen(false)} variant="ghost" className='items-center bg-gray-400 text-white rounded-md p-2 text-md font-medium'>Cancel</button>
                                    <button type="submit" className='items-center bg-violet-700 text-white rounded-md p-2 text-md font-medium ml-5'> Save </button>
                                </div>
                            </form>
                        </DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
        </div>

    )
}

export default NewStudent