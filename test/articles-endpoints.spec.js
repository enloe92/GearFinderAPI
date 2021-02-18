const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Items Endpoints', function() {
  let db

  const {
    testItems    
  } = helpers.makeItemsFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  describe(`GET /api/items`, () => {
    context(`Given no items`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/items')
          .expect(200, [])
      })
    })

    context('Given there are items in the database', () => {
      beforeEach('insert items', () =>
        helpers.seedItemsTables(
          db,
          testItems          
        )
      )

      it('responds with 200 and all of the items', () => {
        const expectedItems = testItems.map(item =>
          helpers.makeExpecteditem(
            item
          )
        )
        return supertest(app)
          .get('/api/items')
          .expect(200, expectedItems)
      })
    })  
  })

  describe(`GET /api/items/warrior/fury`, () => {
    context(`Given no items`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/items/warrior/fury')
          .expect(200, [])
      })
    })

    context('Given there are items in the database', () => {
      beforeEach('insert items', () =>
        helpers.seedItemsTables(
          db,
          testItems          
        )
      )

      it('responds with 200 and all of the items', () => {
        const expectedItems = testItems.map(item =>
          helpers.makeExpecteditem(
            item
          )
        )
        return supertest(app)
          .get('/api/items/warrior/fury')
          .expect(200, expectedItems)
      })
    })  
  })

  describe(`GET /api/items/warrior/arms`, () => {
    context(`Given no items`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/items/warrior/arms')
          .expect(200, [])
      })
    })

    context('Given there are items in the database', () => {
      beforeEach('insert items', () =>
        helpers.seedItemsTables(
          db,
          testItems          
        )
      )

      it('responds with 200 and all of the items', () => {
        const expectedItems = testItems.map(item =>
          helpers.makeExpecteditem(
            item
          )
        )
        return supertest(app)
          .get('/api/items/warrior/arms')
          .expect(200, expectedItems)
      })
    })  
  })

  describe(`GET /api/items/warrior/protection`, () => {
    context(`Given no items`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/items/warrior/protection')
          .expect(200, [])
      })
    })

    context('Given there are items in the database', () => {
      beforeEach('insert items', () =>
        helpers.seedItemsTables(
          db,
          testItems          
        )
      )

      it('responds with 200 and all of the items', () => {
        const expectedItems = testItems.map(item =>
          helpers.makeExpecteditem(
            item
          )
        )
        return supertest(app)
          .get('/api/items/warrior/protection')
          .expect(200, expectedItems)
      })
    })  
  })

  describe(`GET /api/items/hunter/marksman`, () => {
    context(`Given no items`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/items/hunter/marksman')
          .expect(200, [])
      })
    })

    context('Given there are items in the database', () => {
      beforeEach('insert items', () =>
        helpers.seedItemsTables(
          db,
          testItems          
        )
      )

      it('responds with 200 and all of the items', () => {
        const expectedItems = testItems.map(item =>
          helpers.makeExpecteditem(
            item
          )
        )
        return supertest(app)
          .get('/api/items/hunter/marksman')
          .expect(200, expectedItems)
      })
    })  
  })
  
  describe(`GET /api/items/hunter/survival`, () => {
    context(`Given no items`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/items/hunter/survival')
          .expect(200, [])
      })
    })

    context('Given there are items in the database', () => {
      beforeEach('insert items', () =>
        helpers.seedItemsTables(
          db,
          testItems          
        )
      )

      it('responds with 200 and all of the items', () => {
        const expectedItems = testItems.map(item =>
          helpers.makeExpecteditem(
            item
          )
        )
        return supertest(app)
          .get('/api/items/hunter/survival')
          .expect(200, expectedItems)
      })
    })  
  })

  describe(`GET /api/items/hunter/beastmastery`, () => {
    context(`Given no items`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/items/hunter/beastmastery')
          .expect(200, [])
      })
    })

    context('Given there are items in the database', () => {
      beforeEach('insert items', () =>
        helpers.seedItemsTables(
          db,
          testItems          
        )
      )

      it('responds with 200 and all of the items', () => {
        const expectedItems = testItems.map(item =>
          helpers.makeExpecteditem(
            item
          )
        )
        return supertest(app)
          .get('/api/items/hunter/beastmastery')
          .expect(200, expectedItems)
      })
    })  
  })
})
