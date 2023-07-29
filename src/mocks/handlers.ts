// src/mocks/handlers.js
import { rest } from 'msw';

const data = [
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'alejandra',
      last: 'rodrigues',
    },
    location: {
      street: '3833 rua santa catarina ',
      city: 'umuarama',
      state: 'santa catarina',
      postcode: 43646,
      coordinates: {
        latitude: '-50.7186',
        longitude: '-20.4596',
      },
      timezone: {
        offset: '+3:00',
        description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
      },
    },
    email: 'alejandra.rodrigues@example.com',
    dob: {
      date: '1974-05-16T14:46:15Z',
      age: 44,
    },
    registered: {
      date: '2013-03-06T16:09:16Z',
      age: 5,
    },
    phone: '(09) 7033-7406',
    cell: '(54) 3190-3469',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/18.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/18.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
    },
    id: 981,
  },
];

export const handlers = [
  rest.get('http://127.0.0.1:51236/', async (req, res, ctx) => {
    console.log(ctx, req, res);

    return res(ctx.status(200), ctx.json(data));
  }),
];
