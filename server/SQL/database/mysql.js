const mysql = require('mysql2');
const fs = require('fs')
const curl = require('curl-request');
curl.setHeaders([
        'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    ])
    .get('https://www.google.com')
    .then(({ statusCode, body, headers }) => {
        console.log(statusCode, body, headers)
    })
    .catch((e) => {
        console.log(e);
    });

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'develop',
    password: 'trcvbr18'
})

conn.connect(() => {
    try {
        console.log('CONN :::')
        let data = []
        let query = 'SELECT * FROM users'
        conn.query(query, (err, result) => {
            for (let i = 0; i < result.length; i++) {
                data[i] = result[i]
                return data
            }

        })
        setTimeout(() => {
            console.log(data[0])
        }, 2500)
        query.on('name', row => {
            console.log(row)
        })

    } catch {
        console.log(':: CONN ::: ERROR ::')

    }
})