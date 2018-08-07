module.exports = {

    // eslint-disable-next-line no-unused-vars
    showAll(req, res) {
    res.render('cocktails/showAll');
  },

  showOne(req, res) {
    res.render('cocktails/showOne');
  },

  handleCreate(req, res) {
    const { id } = res.locals.cocktail;
    res.redirect(`/cocktails/${id}`);
  },

  showNew(req, res) {
    res.render('cocktails/showNew');
  },

  handleDestroy(req, res) {
    res.redirect('/cocktails');
  },

  show404(req, res) {
    res.send(404);
  },

  handleUpdate(req, res) {
    const { id } = req.params;
    res.redirect(`/cocktails/${id}`);
  },

  showEdit(req, res) {
    res.render('cocktails/showEdit');
  },


};