// import React from 'react'
// import '../CssFiles/loading.css'

//  const Loading = () => {
//   return (
//     <div className='flex justify-center items-center'>
//     <div class="pyramid-loader">
//         <h1></h1>
//   <div class="wrapper">
//     <span class="side side1"></span>
//     <span class="side side2"></span>
//     <span class="side side3"></span>
//     <span class="side side4"></span>
//     <span class="shadow"></span>
//   </div>  
// </div>
// </div>
//   )
// }
// export default Loading;
// Loading.js
// import React from 'react';
// import '../CssFiles/loading.css';

// const Loading = () => {
//   return (
//     <div className='flex justify-center items-center h-screen ' >


//     <div className="flex justify-center  bg-pinkback w-[1700px] h-[750px] rounded-xl">
//       <div className="pyramid-loader mt-48">
//         <div className="wrapper">
//           <span className="side side1"></span>
//           <span className="side side2"></span>
//           <span className="side side3"></span>
//           <span className="side side4"></span>
//           <span className="shadow"></span>
//         </div>
//           <h1 className='font-poppins text-xl font-bold text-red-600 ml-7 -mt-[40px] text-center'>Just a few seconds more...</h1>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Loading;
import React from 'react';
import '../CssFiles/loading.css';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center bg-pinkback w-[1700px] h-[750px] rounded-xl">
      <div class="loading">
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
</div>
        <h1 className="font-poppins text-xl font-bold text-red-600 ml-7 mt-4 text-center">
          Just a few seconds more...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
