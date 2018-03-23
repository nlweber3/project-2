var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bcrypt = require('bcrypt-nodejs');



module.exports = function (app, passport) {


    app.get('/', isLoggedIn, function (req, res) {
        var row = [];
        var row2 = [];
        connection.query('select * from users where id = ?', [req.user.id], function (err, rows) {
            if (err) {
                console.log(err);
            } else {
                if (rows.length) {
                    for (var i = 0, len = rows.length; i < len; i++) {
                        row[i] = rows[i];

                    }
                }
                console.log(row);

            }
            console.log(row[0].password.length)
            res.render('index.handlebars', { rows: row });
        });
    });

    app.get('/login', function (req, res) {
        var flashMessages = req.flash(),
            error = flashMessages.error || [];



        res.render('login.ejs', { message: error });

    });


    app.get('/signup', function (req, res) {
            var flashMessages = req.flash(),
                error = flashMessages.error || [];


            res.render('signup.ejs', { message: error });
        });

        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/login',
            failureRedirect: '/signup',
            failureFlash: true
        }));

        app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        }),
            function (req, res) {
                console.log("test");

                if (req.body.remember) {
                    req.session.cookie.maxAge = 1000 * 60 * 3;
                } else {
                    req.session.cookie.expires = false;
                }
                res.redirect('/');
            });

        app.get('/logout', function (req, res) {
            req.logout();
            res.redirect('/');
        });
    };

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
