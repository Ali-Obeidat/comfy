import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map(ele => ele.price)
      maxPrice = Math.max(...maxPrice)
      return { ...state, all_products: [...action.payload], filtered_products: [...action.payload], filters: { ...state.filters, max_price: maxPrice, price: maxPrice } }
    case SET_GRIDVIEW:
      return { ...state, grid_view: true }
    case SET_LISTVIEW:
      return { ...state, grid_view: false }
    case UPDATE_SORT:
      return { ...state, sort: action.payload }
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state
      let tempProducts = [...filtered_products]
      //!------------------------------
      switch (sort) {
        case 'price-lowest':
          tempProducts = tempProducts.sort((a, b) => a.price - b.price)
          break;
        case 'price-highest':
          tempProducts = tempProducts.sort((a, b) => b.price - a.price)
          break;
        case 'name-a':
          tempProducts = tempProducts.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
          break;
        case 'name-z':
          tempProducts = tempProducts.sort((a, b) => {
            return b.name.localeCompare(a.name)
          })
          break;
        default:
          break;
      }
      //!------------------------------
      return { ...state, filtered_products: tempProducts }
    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }
    case FILTER_PRODUCTS:
      const { all_products } = state
      const { text, category, price, company, color, shipping } = state.filters
      let temProducts = [...all_products]
      //! search
      if (text) {
        temProducts = temProducts.filter((product) => {
          return product.name.toLowerCase().includes(text.toLowerCase())
        })
      }
      //! category
      if (category && category !== 'all') {
        temProducts = temProducts.filter((product) => {
          return product.category === category
        })
      }
      //! company
      if (company !== 'all') {
        temProducts = temProducts.filter((product) => {
          return product.company === company
        })
      }
      //! colors
      if (color !== 'all') {
        temProducts = temProducts.filter((product) => {
          return product.colors.includes(color)
        })
      }
      //! price
      if (color) {
        temProducts = temProducts.filter((product) => {
          return product.price <= price
        })
      }
      //! shipping 
      if (shipping) {
        temProducts = temProducts.filter((product) => {
          return product.shipping === true
        })
      }
      return { ...state, filtered_products: temProducts }
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',

          price: state.filters.max_price,
          shipping: false
        }
      }
    default:
      break;
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
