function Modal() {

  function cancelHandler() {

  }
  function confirmHandler() {

  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Cancel</button>
      <button className='btn'>Confirm</button>
    </div>
  );
}

export default Modal;
