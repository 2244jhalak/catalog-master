import { useState } from 'react';
import styled from 'styled-components';
import Marquee from 'react-marquee-slider';
import useProducts from '../../hooks/useProducts';

const AllProducts = () => {
  const [products] = useProducts();
  const [filterproduct, setFilterproduct] = useState([]);
  const [data, setData] = useState([]);
  const [isHidden, setIsHidden] = useState(false); // State to control the visibility

  const handleFilter = () => {
    const filter = [...new Set(products.map((product) => product.brandName))];
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

  const handleBrandName = (name) => {
    const brand = products.filter((product) => product.brandName === name);
    setData(brand);
    setIsHidden(true); // Hide the section
    console.log(brand, name);
  };

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
        {filterproduct.map((product) => (
          <BrandContainer key={product}>
            <p title={product} onClick={() => handleBrandName(product)} className='cursor-pointer'>{product}</p>
          </BrandContainer>
        ))}
      </Marquee>

      {/* Hidden section */}
      <div id='hide' className={`container mx-auto grid grid-cols-4 gap-4 ${isHidden ? 'hidden' : ''}`}>
        {products.map((singleData) => (
          <div key={singleData._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={singleData.image}
                alt="Shoes"
                className="rounded-xl w-28 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{singleData.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className='container mx-auto grid grid-cols-4 gap-4'>
        {data.map((singleData) => (
          <div key={singleData._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={singleData.image}
                alt="Shoes"
                className="rounded-xl w-28 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{singleData.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
