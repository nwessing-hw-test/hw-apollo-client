import React from "react";

export default function Alert({ message }) {
  return (
    <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
      <span className="inline-block align-middle mr-8">
        <b className="capitalize">Error</b> {message}
      </span>
    </div>
  );
}
