module.exports = {

  // eslint-disable-next-line no-unused-vars

  showAll(req, res, next) {
    res.render('../views/cocktails_search')
  },

  showByName(req, res) {
    res.render('../views/cocktails_search');
  },

  showByIngredient(req, res) {
    res.render('../views/cocktails_search');
  },

  show404(req, res, next) {
    res.send(404);
  }

};