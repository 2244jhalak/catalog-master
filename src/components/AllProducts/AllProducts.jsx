// import { useState } from 'react';
// import styled from 'styled-components';
// import Marquee from 'react-marquee-slider';
// import useProducts from '../../hooks/useProducts';

// const AllProducts = () => {
//   const [products] = useProducts();
//   const [filterproduct, setFilterproduct] = useState([]);
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(''); // State to store search term
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   const handleFilter = (type) => {
//     let filter;
//     if (type === 'brand') {
//       filter = [...new Set(products.map(product => product.brandName))];
//     } else if (type === 'category') {
//       filter = [...new Set(products.map(product => product.category))];
//     } else if (type === 'price') {
//       filter = ["Under $50", "$50 to $100", "Over $100"];
//     }
//     setFilterproduct(filter);
//   };

//   const BrandContainer = styled.div`
//     font-size: 16px;
//     padding: 10px;
//     background-color: #fff;
//     color: #333;
//     margin: 5px;
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 50px;
//   `;

//   const handleBrandOrCategoryOrPrice = (name, type) => {
//     let filteredData = products;

//     if (type === 'brand') {
//       filteredData = filteredData.filter(product => product.brandName === name);
//     } else if (type === 'category') {
//       filteredData = filteredData.filter(product => product.category === name);
//     } else if (type === 'price') {
//       if (name === "Under $50") {
//         filteredData = filteredData.filter(product => product.price < 50);
//       } else if (name === "$50 to $100") {
//         filteredData = filteredData.filter(product => product.price >= 50 && product.price <= 100);
//       } else if (name === "Over $100") {
//         filteredData = filteredData.filter(product => product.price > 100);
//       }
//     }

//     setData(filteredData);
//     setCurrentPage(1);
//   };

//   // Handle search functionality
//   const handleSearch = () => {
//     const searchResults = products.filter(product => product.name.toLowerCase() === searchTerm.toLowerCase());
//     setData(searchResults);
//     setCurrentPage(1);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = data.length > 0 ? data.slice(indexOfFirstItem, indexOfLastItem) : products.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil((data.length > 0 ? data.length : products.length) / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='my-10'>
//       <h3 className='text-center text-3xl font-semibold'>Our Jobs List</h3>
      
//       {/* Search Field */}
//       <div className='text-center my-4'>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search by product name..."
//           className="input input-bordered input-md w-full max-w-xs"
//         />
//         <button onClick={handleSearch} className="btn btn-md ml-2">Search</button>
//       </div>

//       <div className='text-center'>
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn m-1">Click</div>
//           <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
//             <li onClick={() => handleFilter('brand')}><a>Brand Name</a></li>
//             <li onClick={() => handleFilter('category')}><a>Category Name</a></li>
//             <li onClick={() => handleFilter('price')}><a>Price Range</a></li>
//           </ul>
//         </div>
//       </div>

//       <Marquee velocity={20} direction="rtl">
//         {filterproduct.map(product => (
//           <BrandContainer key={product}>
//             <p
//               title={product}
//               onClick={() => handleBrandOrCategoryOrPrice(product, filterproduct.includes(product) && products.some(p => p.brandName === product) ? 'brand' : filterproduct.includes(product) && products.some(p => p.category === product) ? 'category' : 'price')}
//               className='cursor-pointer'>
//               {product}
//             </p>
//           </BrandContainer>
//         ))}
//       </Marquee>

//       {/* No Data Found Message */}
//       {data.length === 0 && searchTerm && (
//         <div className='text-center text-red-500 text-lg'>No Data Found</div>
//       )}

//       {/* Products display */}
//       <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
//         {currentProducts.map(singleData =>
//           <div key={singleData._id} className="card bg-base-100 shadow-xl">
//             <figure className="px-10 pt-10">
//               <img src={singleData.image} alt={singleData.name} className="rounded-xl w-28 h-20" />
//             </figure>
//             <div className="card-body items-center text-center">
//               <h2 className="card-title">{singleData.name}</h2>
//               <p className='font-extrabold'>${singleData.price}</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Pagination controls */}
//       <div className='text-center mt-5'>
//         <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="btn m-1">Prev</button>
//         {[...Array(totalPages).keys()].map(number => (
//           <button key={number + 1} onClick={() => paginate(number + 1)} className={`btn m-1 ${currentPage === number + 1 ? 'btn-primary' : ''}`}>
//             {number + 1}
//           </button>
//         ))}
//         <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="btn m-1">Next</button>
//       </div>
//     </div>
//   );
// };

// export default AllProducts;


import { useState } from 'react';
import styled from 'styled-components';
import Marquee from 'react-marquee-slider';
import useProducts from '../../hooks/useProducts';

const AllProducts = () => {
  const [products] = useProducts();
  const [filterproduct, setFilterproduct] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleFilter = (type) => {
    let filter;
    if (type === 'brand') {
      filter = [...new Set(products.map(product => product.brandName))];
    } else if (type === 'category') {
      filter = [...new Set(products.map(product => product.category))];
    } else if (type === 'price') {
      filter = ["Under $50", "$50 to $100", "Over $100"];
    }
    setFilterproduct(filter);
  };

  const BrandContainer = styled.div`
    font-size: 16px;
    padding: 10px;
    background-color: #fff;
    color: #333;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  `;

  const handleBrandOrCategoryOrPrice = (name, type) => {
    let filteredData = products;

    if (type === 'brand') {
      filteredData = filteredData.filter(product => product.brandName === name);
    } else if (type === 'category') {
      filteredData = filteredData.filter(product => product.category === name);
    } else if (type === 'price') {
      if (name === "Under $50") {
        filteredData = filteredData.filter(product => product.price < 50);
      } else if (name === "$50 to $100") {
        filteredData = filteredData.filter(product => product.price >= 50 && product.price <= 100);
      } else if (name === "Over $100") {
        filteredData = filteredData.filter(product => product.price > 100);
      }
    }

    setData(filteredData);
    setCurrentPage(1);
  };

  // Handle search functionality
  const handleSearch = () => {
    const searchResults = products.filter(product => product.name.toLowerCase() === searchTerm.toLowerCase());
    setData(searchResults);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = data.length > 0 ? data.slice(indexOfFirstItem, indexOfLastItem) : products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((data.length > 0 ? data.length : products.length) / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Check if there's no data and search term is provided
  const noDataFound = data.length === 0 && searchTerm.length > 0;

  return (
    <div className='my-10'>
      <h3 className='text-center text-3xl font-semibold'>Our Jobs List</h3>
      
      {/* Search Field */}
      <div className='text-center my-4'>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by product name..."
          className="input input-bordered input-md w-full max-w-xs"
        />
        <button onClick={handleSearch} className="btn btn-md ml-2">Search</button>
      </div>

      {/* Show filters only if there's no data found */}
      <div className='text-center'>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">Click</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleFilter('brand')}><a>Brand Name</a></li>
            <li onClick={() => handleFilter('category')}><a>Category Name</a></li>
            <li onClick={() => handleFilter('price')}><a>Price Range</a></li>
          </ul>
        </div>
      </div>

      {/* Show Marquee only if there's no data found */}
      {!noDataFound && (
        <Marquee velocity={20} direction="rtl">
          {filterproduct.map(product => (
            <BrandContainer key={product}>
              <p
                title={product}
                onClick={() => handleBrandOrCategoryOrPrice(product, filterproduct.includes(product) && products.some(p => p.brandName === product) ? 'brand' : filterproduct.includes(product) && products.some(p => p.category === product) ? 'category' : 'price')}
                className='cursor-pointer'>
                {product}
              </p>
            </BrandContainer>
          ))}
        </Marquee>
      )}

      {/* No Data Found Message */}
      {noDataFound && (
        <div className='text-center text-red-500 text-lg'>No Data Found</div>
      )}

      {/* Products display */}
      {!noDataFound && (
        <>
          <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
            {currentProducts.map(singleData =>
              <div key={singleData._id} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={singleData.image} alt={singleData.name} className="rounded-xl w-28 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{singleData.name}</h2>
                  <p className='font-extrabold'>${singleData.price}</p>
                </div>
              </div>
            )}
          </div>

          {/* Pagination controls */}
          <div className='text-center mt-5'>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="btn m-1">Prev</button>
            {[...Array(totalPages).keys()].map(number => (
              <button key={number + 1} onClick={() => paginate(number + 1)} className={`btn m-1 ${currentPage === number + 1 ? 'btn-primary' : ''}`}>
                {number + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="btn m-1">Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllProducts;






