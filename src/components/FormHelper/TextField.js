
import React from 'react';

const TextField = ({ input, label, type, placeholder ,value, meta: { asyncValidating, touched, error } }) => {
  
  return (
    <div>
      <div className={asyncValidating ? 'flex flex-col async-validating' : 'flex flex-col'}>
        <input  
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            {...input} 
            type={type} 
            value={value}
            placeholder={placeholder}
        />
        {touched && error && <span className="text-red-600 font-bold text-sm">{error}</span>}
      </div>
    </div>
  )
}

export default TextField;