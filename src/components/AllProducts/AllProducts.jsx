
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Marquee from 'react-marquee-slider';
import useProducts from '../../hooks/useProducts';
import { FaStar } from 'react-icons/fa';

const AllProducts = () => {
  const [products] = useProducts();
  const [filterproduct, setFilterproduct] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchClicked, setSearchClicked] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    // Reset the data when products are updated
    setData(products);
  }, [products]);

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

  const handleSearch = () => {
    const searchResults = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(searchResults);
    setSearchClicked(true);
    setCurrentPage(1);
  };
  // const parseDate = (dateString) => {
  //   const [month, day, year] = dateString.split('/');
  //   return new Date(year, month - 1, day);
  // };
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/').map(Number);
    return { day, month, year };
  };

  const handleSort = (sortType) => {
    let sortedData = [...data];
    
    if (sortType === 'lowToHigh') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortType === 'highToLow') {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (sortType === 'newestFirst') {
      sortedData.sort((a, b) => {
        const dateA = parseDate(a.creationDate);
        const dateB = parseDate(b.creationDate);
  
        return dateB.year - dateA.year || dateB.month - dateA.month || dateB.day - dateA.day;
      })}
  
    setData(sortedData);
    setCurrentPage(1);
  };
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const noDataFound = searchClicked && data.length === 0;

  return (
    <div className='my-10 container mx-auto'>
      <h3 className='text-center text-3xl font-semibold'>Our Products Collection</h3>
      
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

      <div className='text-center'>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">Filter By</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleFilter('brand')}><a>Brand Name</a></li>
            <li onClick={() => handleFilter('category')}><a>Category Name</a></li>
            <li onClick={() => handleFilter('price')}><a>Price Range</a></li>
          </ul>
        </div>
      </div>
      
      <div className=''>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleSort('lowToHigh')}><a>Price low to high</a></li>
            <li onClick={() => handleSort('highToLow')}><a>Price high to low</a></li>
            <li onClick={() => handleSort('newestFirst')}><a>Date Added (Newest First)</a></li>
          </ul>
        </div>
      </div>

      {!noDataFound && (
        <Marquee velocity={20} direction="rtl">
          {filterproduct.map(product => (
            <BrandContainer key={product}>
              <p
                title={product}
                onClick={() => handleBrandOrCategoryOrPrice(product, filterproduct.includes(product) && products.some(p => p.brandName === product) ? 'brand' : filterproduct.includes(product) && products.some(p => p.category === product) ? 'category' : 'price')}
                className='cursor-pointer font-bold'>
                {product}
              </p>
            </BrandContainer>
          ))}
        </Marquee>
      )}

      {noDataFound && (
        <div className='text-center text-red-500 text-lg'>No Data Found</div>
      )}

      {!noDataFound && (
        <>
          <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
            {currentProducts.map(singleData =>
              <div key={singleData._id} className="card bg-base-100 shadow-xl">
                <div className='flex items-center gap-1 pl-2 pt-2'>
                     <p className=''>{singleData.ratings}</p>
                     <FaStar className='text-yellow-500'></FaStar>
                     
                </div>
                
                <figure className="px-10 pt-10">
                  <img src={singleData.image} alt={singleData.name} className="rounded-xl w-40 h-36" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{singleData.name}</h2>
                  <p>{singleData.description}</p>
                  <p className='font-extrabold'>${singleData.price}</p>
                  <div className='flex gap-2 lg:flex-row md:flex-row flex-col'>
                    <p className='rounded px-2 py-1'>#{singleData.category}</p>
                    <p className='rounded px-2 py-1 bg-blue-950 text-white'>{singleData.creationDate}</p>
                    
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='text-center mt-5'>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="btn m-1">Previous</button>
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














