const initialState = {
    page: 1,
    displayPerPage: 6,
    cart: [],
    totalPrice: 0,
    modal: true,
    discountCode: 'COZABZDURA',
    discount: 1,
    discountIsActive: false,
    menuIsOpen: false,
    sortDirection: '',
    discountInput: false,
    singleProduct: {},
    data: [],
    request: {
      pending: false,
      error: null,
      success: null,
    },
};



export default initialState;