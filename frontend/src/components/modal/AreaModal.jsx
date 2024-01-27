import { Transition } from "@headlessui/react";






const Modal = (props)  => {
    const handleCloseModal = () => {
        props.setShowModal(false);
      };
    return (
       <>
 
       <Transition
        show={!props.showModal}
        enter="transition-opacity duration-500"
        enterFrom="opacity-50"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-50"
      >
        <div className="fixed   bg-[aliceblue] inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-lg mx-auto my-6">
           
            <div className="bg-white rounded-lg shadow-lg">
             
              <div className="px-4 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                verify Register
                </h3>
              </div>
            
              <div className="px-4 py-4 text-sm text-gray-500">
                <p>
                You will receive a confirmation message in your email so you can enjoy 
                the journey of honesty with friends
                </p>
              </div>
           
              <div className="px-4 py-3 bg-[#10BBB3] space-x-2">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
       </>
    )
    }

    export default Modal