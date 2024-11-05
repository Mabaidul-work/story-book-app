import React from "react";

const FloatingPlaceholder = () => {
  return (
    <div className="relative w-full mb-6">
      <input
        type="email"
        id="email"
        name="email"
        className="peer w-full px-4 pt-4 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder=" "
        required
      />
      <label
        htmlFor="email"
        className="absolute left-4 top-2 text-sm text-gray-500 transition-all pointer-events-none
                   peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-500
                   peer-valid:text-xs peer-valid:top-2"
      >
        Name*
      </label>
    </div>
  );
};

export default FloatingPlaceholder;
