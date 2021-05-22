import React , {useEffect, useState , useRef } from "react";
import { updateUser } from "../../actions/user";
import MultiButtonOpen from './MultiButtonOpen'
import MultiButtonClose from './MultiIButtonClose'

const ProjectMultiSelect = ({users,optionChoseProps,usersUpdate,isOpenProps}) => {

    const [option,setOption] = useState([])
    const [isOpen , setIsOpen] = useState(false)
    const [async, setAsync] = useState(false)
    const [isShowOption , setIsShowOption] = useState(false)
    const [optionChose , setOptionChose] = useState([])
    const [arrayEmpty , setArrayEmpty] = useState(1) 

    useEffect(()=>{
        setOption(users)
        setOptionChose(usersUpdate || [])
        optionChoseProps(usersUpdate)
        setIsShowOption(!isShowOption)
    },[usersUpdate])
    
    useEffect(()=>{
        setIsOpen(false)
    },[isOpenProps])

    const onShowOption = () => {
        setIsOpen(!isOpen)
    }
    
    const onChoseOption =  (value) => {
        if(!isShowOption){
            setIsShowOption(!isShowOption)
        }
        setArrayEmpty(1)
        let _optionChose = optionChose
        let rs = _optionChose.concat(value)
        setOptionChose(rs)
        let filterOption = option.filter((item,index)=> item.id !== value.id)
        setOption(filterOption)
        // func props component Project Model Create 
        // get data for component Project Model Create 
        optionChoseProps(rs)
    }

    const onRemote = (value) => {
        let rs = optionChose.filter((item) => item.name !== value.name)
        option.push(value)
        setArrayEmpty(rs.length)
        setOptionChose(rs)
        // func props component Project Model Create 
        // get data for component Project Model Create 
        optionChoseProps(rs)
    }

    return (
        <>
            <div 
                className="flex flex-col items-center mx-auto">
                    <input name="values" type="hidden" />
                    <div className="inline-block relative w-full">
                        <div className="flex flex-col items-center relative">
                            <div className="w-full svelte-1l8159u  border rounded border-solid border-red-200">
                                <div className="my-1 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                                    <div className="flex flex-auto flex-wrap">
                                        {
                                           isShowOption && (arrayEmpty > 0) ? (<div className="flex justify-center items-center m-1 font-medium bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                                            <div className="text-xs font-normal leading-none max-w-full flex-initial x-model" />
                                            <div className="flex flex-auto flex-row-reverse">
                                                <div className="flex flex-auto flex-wrap">
                                                    {optionChose?.map((item,index)=>{
                                                        return (
                                                            <p  className="p-1 cursor-pointer flex justify-center items-center border rounded border-solid border-red-200 mr-2 mb-2" 
                                                                key={index}
                                                                onClick={()=>onRemote(item)}
                                                                >
                                                                <span>{item.name.split(' ')[item.name.split(' ').length - 1]}</span>
                                                                <span><svg className="fill-current h-4 w-4 " role="button" viewBox="0 0 20 20">
                                                                    <path d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0
                                                                                 c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183
                                                                                 l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15
                                                                                 C14.817,13.62,14.817,14.38,14.348,14.849z" />
                                                            </svg></span></p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
    
                                            </div>) : null
                                        }
                                        <div lass="flex-1">
                                            <input 
                                                placeholder="Select a option" 
                                                className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                                                onClick={onShowOption}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                                        {
                                            isOpen ?  <MultiButtonClose onShowOption={onShowOption}/> : <MultiButtonOpen onShowOption={onShowOption}/> 
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-full  ">
                                <div className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                                    {isOpen ? <div className={isOpen && option.length > 0 ? "flex flex-col w-full  overflow-auto h-32" : "flex flex-col w-full"} >
                                            {
                                                option.map((item,index)=>{
                                                    return (<div key={index} 
                                                        className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
                                                        onClick={()=>onChoseOption(item)}
                                                        >
                                                            <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                                                                <div className="w-full items-center flex">
                                                                    <div className="mx-2 leading-6">
                                                                        {item.name}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>)
                                               })
                                            }
                                    </div> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default ProjectMultiSelect;
