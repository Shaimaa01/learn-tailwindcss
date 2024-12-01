
// eslint-disable-next-line react/prop-types
function Button({ children }) {
    return (
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block my-3">
        {children}
      </button>
    );
  }
  

  export default Button