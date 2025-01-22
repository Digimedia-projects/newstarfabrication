import {useEffect, useState} from 'react';


export default function PopupForm(){
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout (() => {
    setIsVisible(true);
  }, 5000)

  return () => clearTimeout(timer);
}, [])

const closePopup = () =>{
    setIsVisible(false);
};


return (
    <>
      {/* Popup Form */}
      {isVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl max-w-sm w-full p-6 relative transform transition-all duration-500 ease-in-out  m-3">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={closePopup}
                className="text-gray-600 font-bold text-xl"
              >
                &times;
              </button>
            </div>
            <h2 className="text-lg font-semibold text-center mb-4 text-white">Looking For Fabrication Services?</h2>
        <div className="flex justify-center items-center ">
   <a href='tel:8851385978'>
    <button className="group relative h-8 overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition hover:bg-blue-600">
        <span className="relative font-semibold text-sm">CALL NOW</span>
        <div className="absolute inset-0 flex h-full w-full justify-center items-center">
            <div className="animate-shine absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
                <div className="relative h-full w-8 bg-white/30"></div>
            </div>
            
        </div>
    </button>
    </a>


</div>


            {/* <form action="#" method="POST">
              <div classNameName="mb-4">
                <label
                  htmlFor="name"
                  classNameName="block text-gray-700 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form> */}
          </div>
        </div>
      )}
    </>
  );
};


