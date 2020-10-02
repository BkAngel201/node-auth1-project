const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);

module.exports = {
  session,
  sessionConfig: {
    name: "ACsession",
    secret: "ItsASecreT",
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false, // should be true in production
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,

    store: new knexSessionStore({
      knex: require("../../data/db-config"),
      tablename: "sessions",
      sidfieldname: "sid",
      createtable: true,
      clearInterval: 1000 * 60 * 60,
    }),
  },
};
