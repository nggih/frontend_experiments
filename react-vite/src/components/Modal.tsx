function Modal() {

  function cancelHandler() {

  }
  function confirmHandler() {

  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Cancel</button>
      <button className="px-4 py-1 text-sm text-white hover:text-sky-700 font-semibold rounded-full border bg-sky-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">Confirm</button>
    </div>
  );
}

export default Modal;
