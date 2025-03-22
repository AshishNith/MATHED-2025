import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">
        3rd International Conference
      </h1>
      <h2 className="text-2xl mb-4">
        on
        <div className="text-yellow-400 my-2">
          Advances in Manufacturing, Thermal and Design Engineering
          <span className="text-white"> (MATHED 2025)</span>
        </div>
      </h2>
      <div className="text-xl mt-4">
        26th December - 28th December 2025
        <p className="text-lg text-gray-300">(Hybrid Mode)</p>
      </div>
    </header>
  )
}

export default Header
