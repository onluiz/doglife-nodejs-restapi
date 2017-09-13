let UtilDB = {

    knex: null,

    tables: function () {
        this.knex.schema.createTableIfNotExists('user', function (table) {
            table.increments();
            table.string('name');
            table.timestamps();
        });
    },

    connect: function (host, port, user, password, database) {
        this.knex = require('knex')({
            client: 'pg',
            connection: {
                host : 'localhost',
                port : '5432',
                user : 'postgres',
                password : '',
                database : 'test1db'
            },
            pool: {
                afterCreate: function (conn, done) {
                    // in this example we use pg driver's connection API
                    conn.query('SET timezone="UTC";', function (err) {
                        if (err) {
                            // first query failed, return error and don't try to make next query
                            done(err, conn);
                        } else {
                            // do the second query...
                            conn.query('SELECT set_limit(0.01);', function (err) {
                                // if err is not falsy, connection is discarded from pool
                                // if connection aquire was triggered by a query the error is passed to query promise
                                done(err, conn);
                            });
                        }
                    });
                }
            },
            debug: false
        });
    },
    
    startDB: function (data) {
        this.connect();
        this.tables();
    }

};