'use strict';

const r = require('rethinkdb');

var conn;
r.connect({"host":"172.22.0.2","port":28015})
    .then((c) => {
        conn = c;
        r.dbCreate("loopbackDB").run(conn);
    })
    .then(() => {
        return r.tableCreate('voting').run(conn)
    })
    .then(() => {
        return r
            .table('voting')
            .insert([
                {
                    "project_number": "A01",
                    "project_type": "alpha",
                    "project_title": "some project 1",
                    "submitter_name": "some guy 1",
                    "counter": 0
                },
                {
                    "project_number": "A02",
                    "project_type": "alpha",
                    "project_title": "some project 2",
                    "submitter_name": "some guy 2",
                    "counter": 0
                }])
            .run(conn)
    })
    .error((err) => {
        if (err.msg.indexOf("already exists") == -1)
            console.log(err);
    })
    .finally(() => process.exit(0));

