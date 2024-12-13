import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { CalendarDaysIcon } from 'lucide-react'
import React, { useState } from 'react'
import { addMonths } from 'date-fns';
import moment from 'moment/moment';
// import { Calendar } from '@/components/ui/calendar';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/style.css";

//selectedmonth to be added in the parenthesis
//Button error error of button in button
const MonthSelection = () => {
    const today = new Date();
    const nextMonths = addMonths(new Date(), 0);
    const [month, setMonth] = useState(nextMonths);

    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    <button variant='outline' className='flex gap-2 items-center text-slate-500 
                    border p-1 rounded-md'>
                        <CalendarDaysIcon className='h-5 w-5' />
                        {moment(month).format('MMM yyyy')}
                    </button>
                </PopoverTrigger>
                <PopoverContent><DayPicker
                    mode="single"
                    month={month}
                    onMonthChange={(value)=>{console.log(value);setMonth(value)}}
                    className="flex flex-1 bg-zinc-500 rounded-lg p-2 justify-center"
                />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default MonthSelection