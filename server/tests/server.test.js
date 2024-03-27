const databaseConnection = require('../model/model'); 
const bookRouter = require('../controllers/book');
const bookshelf = require('../controllers/bookshelf');
const review = require('../controllers/review');
const user = require('../controllers/review');
const app = require('../serviceController');
const request = require('supertest');

describe('Database Connection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('TC24: connect should be called', () => {
    const spy = jest.spyOn(databaseConnection, 'connect');
    databaseConnection.connect();
    expect(spy).toHaveBeenCalled();
  });

  it('TC25: should attempt to connect to the database', () => {
    expect(databaseConnection.connect).toBeTruthy();
  });

  it('TC26: should return if failed to connect to the database', () => {
    const spy = jest.spyOn(databaseConnection, 'connect');
    const isFailing = databaseConnection.connect();
    expect(spy).toHaveReturned();
  });

});

describe('Book queries', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('TC27: status 404 received when creating book without req fields', async () => {
    const newBook = {};
    const res = await request(app).get('/createBook').query({newBook});
    expect(res.status).toEqual(404);
  });

  it('TC28: status 400 received when ISBN not provided', async () => {
    const res = await request(app).get('/book/getBookByISBN');
    expect(res.status).toEqual(400);
  });

  it('TC29: status 500 received when internal server error', async () => {
    const res = await request(app).get('/book/getBookByISBN').query({ISBN: "null"});
    expect(res.status).toEqual(500);
  });

  it('TC30: status 404 received when deleting book with invalid ISBN', async () => {
    const res = await request(app).get('/book/deleteBook').query({ISBN: "null"});
    expect(res.status).toEqual(404);
  });
  
});

describe('Bookshelf queries', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('TC31: status 404 received when adding book to currently reading without ISBN or username', async () => {
    const res = await request(app).get('/bookshelf/addBookToCurrentlyReading');
    expect(res.status).toEqual(404);
  });

  it('TC32: status 404 received when adding book to want to read without ISBN or username', async () => {
    const res = await request(app).get('/bookshelf/addBookToWantToRead');
    expect(res.status).toEqual(404);
  });

  it('TC33: status 404 received when adding book to already read without ISBN or username', async () => {
    const res = await request(app).get('/bookshelf/addBookToAlreadyRead');
    expect(res.status).toEqual(404);
  });
  
});

describe('Review queries', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('TC34: status 400 received when getting review without ISBN', async () => {
    const res = await request(app).get('/review/getReviewsByISBN');
    expect(res.status).toEqual(400);
  });

  it('TC35: status 400 received when getting review without username', async () => {
    const res = await request(app).get('/review/getReviewsByUsername');
    expect(res.status).toEqual(400);
  });

  it('TC36: status 404 received when deleting review without review_id', async () => {
    const res = await request(app).get('/review/deleteReview');
    expect(res.status).toEqual(404);
  });
  
});
