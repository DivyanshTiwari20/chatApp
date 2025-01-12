// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Male</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Female</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;

import React from 'react';

const GenderCheckbox = () => {
  return (
    <div className='flex gap-1 items-center'>
      <label className='label gap-2 cursor-pointer'>
        <span className='text-gray-300'>Gender</span>
        <div className='flex gap-4'>
          <label className='flex items-center gap-1 text-gray-300'>
            <input
              type='radio'
              name='gender'
              value='male'
              className='radio radio-sm bg-white/10 border-white/20'
            />
            <span>Male</span>
          </label>
          <label className='flex items-center gap-1 text-gray-300'>
            <input
              type='radio'
              name='gender'
              value='female'
              className='radio radio-sm bg-white/10 border-white/20'
            />
            <span>Female</span>
          </label>
        </div>
      </label>
    </div>
  );
};

export default GenderCheckbox;