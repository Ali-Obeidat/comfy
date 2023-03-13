import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: {
      text, company, category, color, min_price, max_price, price, shipping
    },
    updateFilters,
    clearFilters,
    all_products
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return <Wrapper>
    <div className='content'>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* search input */}
        <div className='form-control' >
          <input type='text'
            className='search-input'
            name='text'
            placeholder='Search'
            value={text}
            onChange={updateFilters}
          />
        </div>
        {/* end search input */}
        {/* category  */}
        <div className='form-control'>
          <h5>Category</h5>
          <div >
            {categories.map((cate, index) => <button
              key={index}
              type='button'
              onClick={updateFilters}
              className={`${category === cate.toLowerCase() ? 'active' : null}`}
              name='category'
            >
              {cate}
            </button>)}
          </div>
        </div>
        {/* end category  */}

        {/* company */}
        <div className='form-control'>
          <h5>Company</h5>
          <select onChange={updateFilters} className='company' name='company' value={company} >
            {companies.map((comp, index) => {
              return <option value={comp} key={index} >
                {comp}
              </option>
            })}
          </select>
        </div>
        {/* end company */}
        {/* colors */}
        <div className='form-control' >
          <h5>Colors</h5>
          <div className='colors'>
            {colors.map((col, index) => {
              if (col === 'all') {
                return <button key={index}
                  type='button'
                  name='color'
                  onClick={updateFilters}
                  className={`${color === col ? 'all-btn active' : 'all-btn'}`}
                  data-color='all'
                >All</button>
              }
              return (
                <button key={index}
                  type='button'
                  name='color'
                  onClick={updateFilters}
                  className={`${color === col ? 'color-btn active' : 'color-btn'}`}
                  data-color={col}
                  style={{ background: col }}
                >{color === col ? <FaCheck /> : null}</button>
              )
            })}
          </div>
        </div>
        {/* end colors */}
        {/* price */}
        <div className='form-control' >
          <h5>Price</h5>
          <p className='price'>{formatPrice(price)}</p>
          <input type='range' name='price' onChange={updateFilters} min={min_price} max={max_price} value={price} />
        </div>
        {/* end price */}
        {/* shipping */}
        <div className='form-control shipping' >
          <label htmlFor='shipping'>Free shipping</label>
          <input name='shipping' id='shipping' type='checkbox' onChange={updateFilters} checked={shipping} />
        </div>
        {/* end shipping */}
      </form>
      <button className='clear-btn' type='button' onClick={clearFilters}>Clear filter</button>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
                .form-control {
    margin-bottom: 1.25rem;
            h5 {
              margin - bottom: 0.5rem;
    }
  }
            .search-input {
              padding: 0.5rem;
            background: var(--clr-grey-10);
            border-radius: var(--radius);
            border-color: transparent;
            letter-spacing: var(--spacing);
  }
            .search-input::placeholder {
              text-transform: capitalize;
  }

            button {
              display: block;
            margin: 0.25em 0;
            padding: 0.25rem 0;
            text-transform: capitalize;
            background: transparent;
            border: none;
            border-bottom: 1px solid transparent;
            letter-spacing: var(--spacing);
            color: var(--clr-grey-5);
            cursor: pointer;
  }
            .active {
              border-color: var(--clr-grey-5);
  }
            .company {
              background: var(--clr-grey-10);
            border-radius: var(--radius);
            border-color: transparent;
            padding: 0.25rem;
  }
            .colors {
              display: flex;
            align-items: center;
  }
            .color-btn {
              display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #222;
            margin-right: 0.5rem;
            border: none;
            cursor: pointer;
            opacity: 0.5;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              font-size: 0.5rem;
            color: var(--clr-white);
    }
  }
            .all-btn {
              display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.5rem;
            opacity: 0.5;
  }
            .active {
              opacity: 1;
  }
            .all-btn .active {
              text-decoration: underline;
  }
            .price {
              margin-bottom: 0.25rem;
  }
            .shipping {
              display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            text-transform: capitalize;
            column-gap: 0.5rem;
            font-size: 1rem;
            max-width: 200px;
  }
            .clear-btn {
              background: var(--clr-red-dark);
            color: var(--clr-white);
            padding: 0.25rem 0.5rem;
            border-radius: var(--radius);
  }
            @media (min-width: 768px) {
    .content {
              position: sticky;
            top: 1rem;
    }
  }
            `

export default Filters
