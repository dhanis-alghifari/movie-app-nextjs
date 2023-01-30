import React from "react";

function Button({onClick}) {
  return (
    <button
      className=" bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
      type="button"
      onClick={onClick}
    >
      Search
    </button>
  );
}

export default Button;
