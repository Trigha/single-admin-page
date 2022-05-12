import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allStore from '../store/action/index';

function ListGenre() {
  const dispatch = useDispatch();
  const genre = useSelector(({ ListGenre }) => ListGenre);

  useEffect(() => {
    dispatch(allStore.fetchAllGenre());
  }, [dispatch]);

  return (
    <div>
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="mt-4 mx-4">
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th className="px-4 py-3">Genres</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  {Object.keys(genre).map((key) => (
                    <tr
                      class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                      key={key}
                    >
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <p class="font-semibold">{genre[key].name}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListGenre;
