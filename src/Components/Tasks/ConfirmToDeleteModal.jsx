const ConfirmToDeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 fixed top-0 left-0 bottom-0 right-0"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#191D26] p-8 rounded-lg shadow-lg z-20 max-w-sm w-full">
        <h2 className="text-white text-xl font-semibold mb-4">
          Confirm Delete
        </h2>
        <p className="text-white mb-8">
          Are you sure you want to delete this task?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md transition-all hover:opacity-80"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md transition-all hover:opacity-80"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmToDeleteModal;
