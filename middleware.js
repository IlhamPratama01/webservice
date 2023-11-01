var token2an = function (req, res, next) {
  var token = req.header("token");

  if (token) {
    if ((token = "123456")) {
      next();
    } else {
      res.json({
        status: false,
        pesan: "token Tidak Valid",
        data: [],
      });
    }
  } else {
    res.json({
      status: false,
      pesan: "Maaf tidak membawa token",
      data: [],
    });
  }
};
module.exports = token2an;
