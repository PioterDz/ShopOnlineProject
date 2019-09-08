const initialState = {
    page: 1,
    number: 0,
    displayPerPage: 6,
    cart: [],
    totalPrice: 0,
    data: [
        {
          id: '101',
          img: './images/01.jpg',
          name: 'Rodos',
          price: '65',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim malesuada tristique. Mauris id nunc non sem accumsan euismod.',
          productState: 'nowość',
          countNumber: 0
        },
        {
          id: '102',
          img: './images/02.jpg',
          name: 'Kreta',
          price: '165',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim malesuada tristique. Mauris id nunc non sem accumsan euismod.',
          productState: 'ostatnie miejsca',
          countNumber: 0
        },
        {
          id: '103',
          img: './images/03.jpg',
          name: 'Zakynthos',
          price: '75',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim malesuada tristique. Mauris id nunc non sem accumsan euismod.',
          productState: '',
          countNumber: 0
        },
        {
          id: '104',
          img: './images/04.jpg',
          name: 'Alanya',
          price: '55',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim malesuada tristique. Mauris id nunc non sem accumsan euismod.',
          productState: '',
          countNumber: 0
        },
        {
          id: '105',
          img: './images/05.jpg',
          name: 'Lwów',
          price: '99',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim malesuada tristique. Mauris id nunc non sem accumsan euismod.',
          productState: '',
          countNumber: 0
        },
        {
          id: '106',
          img: './images/06.jpg',
          name: 'Zakopane',
          price: '79',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim malesuada tristique. Mauris id nunc non sem accumsan euismod.',
          productState: '',
          countNumber: 0
        },
        {
            id: '107',
            img: './images/07.jpg',
            name: 'Marsylia',
            price: '79',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim malesuada tristique. Mauris id nunc non sem accumsan euismod.',
            productState: '',
            countNumber: 0
        },
    ]
};



export default initialState;