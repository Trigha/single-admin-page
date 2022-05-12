import React from 'react';

function Navbar() {
  return (
    <div>
      <div class="absolute w-full flex items-center justify-between h-14 text-white z-10">
        <div class="flex items-center justify-start md:justify-start pl-3 w-full md:w-full h-14 bg-blue-800 dark:bg-gray-800 border-none ">
          <img
            class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          />
          <span class="hidden md:block">ADMIN</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
