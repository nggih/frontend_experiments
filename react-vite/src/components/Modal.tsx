function Modal(props: any) {

  function cancelHandler() {
    props.onCancel();

  }
  function confirmHandler() {
    props.onConfirm();

  }
  return (
    <div className="w-80 mx-auto mt-5 p-7">
      <p className="text-2xl font-medium text-gray-800">
        Are you sure?
      </p>
      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={cancelHandler}>
        Cancel
        </button>
      <button className="px-4 py-1 text-sm text-white hover:text-sky-700 font-semibold rounded-full border bg-sky-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2" onClick={confirmHandler}>
        Confirm
        </button>
    </div>
  );
}

export default Modal;
