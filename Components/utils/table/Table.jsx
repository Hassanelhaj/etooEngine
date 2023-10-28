import React from 'react'

const Table = () => {
  return (
   
        <div className="flex flex-col overflow-x-auto bg-white w-max max-w-[824px]">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto w-full">
                <table className="min-w-full w-full text-right text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-200">
                    <tr>
                      <th scope="col" className="px-6 py-4">#</th>
                      <th scope="col" className="px-6 py-4">الأسم الكامل</th>
                      <th scope="col" className="px-6 py-4">الأيميل</th>
                      <th scope="col" className="px-6 py-4">رقم الهاتف</th>
                      <th scope="col" className="px-6 py-4">الحالة</th>
                      
                    
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                     
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                     
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                      <td className="whitespace-nowrap px-6 py-4">Cell</td>
                     
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
 

export default Table