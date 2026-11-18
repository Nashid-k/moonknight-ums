const isLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/admin");
  }
  return next();
};

const isLogout = (req, res, next) => {
  if (req.session.user_id) {
    return res.redirect("/admin/home");
  }
  return next();
};

module.exports = { isLogin, isLogout };
