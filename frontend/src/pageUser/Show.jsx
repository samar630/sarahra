import React, { useState } from 'react'
import Modal from '../components/modal/AreaModal'

const Show = (props) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="App h-screen flex flex-col items-center justify-center bg-purple-200">
        <button onClick={() =>setShowModal(true)}>
            click
        </button>
    <Modal showModal={showModal} setShowModal={setShowModal} />
  </div>
  )
}

export default Show
