import React, { useState , useEffect , useRef } from 'react'

const DatePicter = ({onSetDate, dayChoseProps,isOpenDateStart,isOpenDateEnd}) => {

    const clickRef = useRef();

    const [blankdays , setBlankdays] = useState(null);
    const [no_of_days , setNo_of_days] = useState(null);
    const [_month , set_month] = useState(null);
    const [_year , set_year] = useState(null);
    const [isOpen , setIsOpen] = useState(false);
    const [dayChose , setDayChose] = useState(String);

    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'October', 'November', 'December'];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // get datetime for picter 
    const getNoOfDat = (value) => {
        let today = new Date();
        let month = today.getMonth();
        // check next month math with year and day
        if(value) {
            month = _month + value;
            if(month === 12){
                month = 0;
                set_year(_year+1)
            }
            if(month === -1){
                month = 11;
                set_year(_year-1)
            }
        }
     
        // let datepickerValue = new Date(_year, month, today.getDate()).toDateString();
        let daysInMonth = new Date(_year, month + 1, 0).getDate();

        // find where to start calendar day of week
        let dayOfWeek = new Date(_year, month).getDay();
        let blankdaysArray = [];
        for ( var i=1; i <= dayOfWeek; i++) {
            blankdaysArray.push(i);
        }
        // find all dau of month
        let daysArray = [];
        for ( var i=1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }

        setBlankdays(blankdaysArray);
        setNo_of_days(daysArray);
        set_month(month)
    }

    // set current datetime only the first time 
    useEffect(()=>{
        let today = new Date();
        let year = today.getFullYear();
        set_year(year)
        getNoOfDat()
    },[])

    // user chose day from ProjectModelCreate
    useEffect(()=>{
        setDayChose(dayChoseProps)
        onSetDate(dayChoseProps)
    },[dayChoseProps])

    // use click out side elements
    useEffect(()=>{
        setIsOpen(false)
    },[isOpenDateStart,isOpenDateEnd])

    
    const onShowLayout = () => {
        setIsOpen(!isOpen)
    }

    // format datetime when user active day
    const onChoseDay = (item) => {
        let today = new Date()
        let hours = today.getHours()
        let minutes = today.getMinutes()
        let seconds = today.getSeconds()
        seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds
        let month = _month.toString().length === 1 ? `0${_month+1}` : _month+1
        let day = item.toString().length === 1 ? `0${item}` : item
        let daytimes = `${_year}-${month}-${day} ${hours}:${minutes}:${seconds}`

        setDayChose(daytimes)
        onSetDate(daytimes)
    }

    return (
        <div className="flex items-center justify-center ">
        <div className="antialiased sans-serif w-full">
            <div>
            <div className="mx-auto">
                <div className="mb-5 ">
                    <div className="relative">
                        <input 
                            type="text" 
                            readOnly 
                            className="w-full pl-4 py-3 leading-none border border-solid rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" 
                            placeholder="Select date" 
                            value={dayChose || ""}
                            onClick={onShowLayout}
                        />
                        <div className="cursor-pointer absolute top-0 right-0 px-3 py-2"
                            onClick={()=>setIsOpen(!isOpen)}
                        >
                            <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        {
                            isOpen ? 
                            <div className="bg-white mt-2 rounded-lg shadow p-4 top-0 left-0 w-full">
                                <div className="flex justify-between items-center mb-2">
                                    <div>
                                        <span className="text-lg font-bold text-gray-800" >{MONTH_NAMES[_month]}</span>
                                        <span className="ml-1 text-lg text-gray-600 font-normal" >{_year}</span>
                                    </div>
                                    <div>
                                        <button onClick={()=>getNoOfDat(-1)} type="button" className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full">
                                            <svg className="h-6 w-6 text-gray-500 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button onClick={()=>getNoOfDat(1)} type="button" className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full">
                                            <svg className="h-6 w-6 text-gray-500 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-3 justify-between">
                                {
                                    DAYS.map((item,index)=>(
                                        <div key={index} className="px-1">
                                            <div className="text-gray-800 font-medium text-center text-xs" >
                                                {item}
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                                <div className="flex flex-wrap -mx-1">
                                {
                                    blankdays?.map((item,index) => (
                                        <div key={index} style={{width: '14.28%'}} className="text-center border p-1 border-transparent text-sm"></div>
                                    ))
                                }
                                { 
                                    no_of_days?.map((item,index)=>(
                                    <div onClick={()=>onChoseDay(item)} key={index} style={{width: '14.28%'}} className="px-1 mb-1">
                                        <div x-text="date" className="hover:bg-blue-200 cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100" >
                                            {item}
                                        </div>
                                    </div>
                                    ))  
                                }
                                </div>
                            </div> : null
                        }
                    </div>	 
                </div>
            </div>
        </div>
        </div>
    </div>
)}

export default DatePicter;