import ProductOne from '../images/product/product-01.png';
import ProductTwo from '../images/product/product-02.png';
import ProductThree from '../images/product/product-03.png';
import ProductFour from '../images/product/product-04.png';

const MyTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          My table list
        </h4>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="text-sm uppercase  border-t border-stroke dark:border-strokedark ">
              <th className=" font-medium py-4.5 px-4 md:px-6 2xl:px-7.5">
                Product name
              </th>
              <th className=" font-medium py-4.5 px-4 md:px-6 2xl:px-7.5">
                Category
              </th>
              <th className=" font-medium py-4.5 px-4 md:px-6 2xl:px-7.5">
                Color
              </th>
              <th className=" font-medium py-4.5 px-4 md:px-6 2xl:px-7.5">
                Price
              </th>
              <th className=" font-medium py-4.5 px-4 md:px-6 2xl:px-7.5">
                Sold
              </th>
              <th className=" font-medium py-4.5 px-4 md:px-6 2xl:px-7.5">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className=" border-t border-stroke  dark:border-strokedark  md:px-6 2xl:px-7.5">
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img src={ProductOne} alt="Product" />
                </div>
                <p className="text-sm text-black dark:text-white">
                  Apple MacBook Pro 17
                </p>
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Laptop
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Silver
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Silver
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                $2999
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                buttons
              </td>
            </tr>
            <tr className=" border-t border-stroke  dark:border-strokedark  md:px-6 2xl:px-7.5">
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img src={ProductOne} alt="Product" />
                </div>
                <p className="text-sm text-black dark:text-white">
                  Apple MacBook Pro 17
                </p>
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Laptop
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Silver
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Silver
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                $2999
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                buttons
              </td>
            </tr>
            <tr className=" border-t border-stroke  dark:border-strokedark  md:px-6 2xl:px-7.5">
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img src={ProductOne} alt="Product" />
                </div>
                <p className="text-sm text-black dark:text-white">
                  Apple MacBook Pro 17
                </p>
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Laptop
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Silver
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                Silver
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                $2999
              </td>
              <td className="py-4.5 px-4 md:px-6 2xl:px-7.5 text-black dark:text-white">
                buttons
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
