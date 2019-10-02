const initialState = {
    data: [],
    cart: [],
    currentDisplay: [],
    singleProduct: [],
    displayPerPage: 6,
    totalPrice: 0,
    modal: true,
    discountCode: 'COZABZDURA',
    discount: 1,
    sortDirection: '',
    discountIsActive: false,
    menuIsOpen: false,
    discountInput: false,
    orderStatus: false,
    request: {
      pending: false,
      error: null,
      success: null,
    },
};



export default initialState;