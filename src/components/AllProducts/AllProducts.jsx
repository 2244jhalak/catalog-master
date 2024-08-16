import { useState } from 'react';
import styled from 'styled-components';
import Marquee from 'react-marquee-slider';
import useProducts from '../../hooks/useProducts';

const AllProducts = () => {
  const [products] = useProducts();
  const [filterproduct, setFilterproduct] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 8; 

  const handleFilter = () => {
    const filter = [...new Set(products.map(product => product.brandName))];
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

  const handleBrandName = name => {
    const brand = products.filter(product => product.brandName === name);
    setData(brand);
    setCurrentPage(1); 
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = data.length > 0 ? data.slice(indexOfFirstItem, indexOfLastItem) : products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((data.length > 0 ? data.length : products.length) / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='my-10'>
      <h3 className='text-center text-3xl font-semibold'>Our Jobs List</h3>
      <div className='text-center'>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">Click</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={handleFilter}><a>Brand Name</a></li>
            <li><a>Category Name</a></li>
            <li><a>Price Range</a></li>
          </ul>
        </div>
      </div>

      <Marquee velocity={20} direction="rtl">
        {filterproduct.map(product => (
          <BrandContainer key={product}>
            <p title={product} onClick={() => handleBrandName(product)} className='cursor-pointer'>{product}</p>
          </BrandContainer>
        ))}
      </Marquee>

      {/* Products display */}
      <div className='container mx-auto grid grid-cols-4 gap-4'>
        {currentProducts.map(singleData =>
          <div key={singleData._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={singleData.image} alt={singleData.name} className="rounded-xl w-28 h-20" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{singleData.name}</h2>
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
    </div>
  );
};

export default AllProducts;
