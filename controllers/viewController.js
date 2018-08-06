module.exports = {

  // eslint-disable-next-line no-unused-vars

  showAll(req, res, next) {
    res.render('../views/cocktails_search')
  },

  // showByName(req, res) {
  //   res.render('cocktails', {
  //     cocktails: res.locals.data
  //   });
  // },

  showByIngredient(req, res) {
    res.render('cocktails_search', {
      cocktails: res.locals.retCocktail
    });
  },


  showUser(req, res) {
    debugger;
    res.render('users_search', {
      users: res.locals.users
    });
  },


  show404(req, res, next) {
    res.send(404);
  }

};