var express = require("express");
var router = express.Router();
var cekToken2an = require("../middleware");
/*panggil Model mahasiswa*/
var mahasiswaModel = require("../models/mahasiswa.js");
/* TAMPIL DATA */
router.get("/", cekToken2an, function (req, res, next) {
  mahasiswaModel
    .findAll()
    .then((data) => {
      res.json({
        status: true,
        pesan: "Berhasil Tampil",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: false,
      });
    });
});
/* TAMBAH DATA */
router.post("/", cekToken2an, function (req, res, next) {
  mahasiswaModel
    .create(req.body)
    .then((data) => {
      res.json({
        status: true,
        pesan: "Berhasil Tambah",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        pesan: "Gagal Tambah: " + err.message,
        data: [],
      });
    });
});
/* UBAH DATA */
router.put("/", cekToken2an, function (req, res, next) {
  mahasiswaModel
    .update(req.body, {
      where: { nim: req.body.nim },
    })
    .then(() => {
      res.json({
        status: true,
        pesan: "Berhasil Ubah",
        data: [],
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        pesan: "Gagal Ubah: " + err.message,
        data: [],
      });
    });
});
/* HAPUS DATA */
router.delete("/", cekToken2an, function (req, res, next) {
  mahasiswaModel
    .destroy({
      where: { nim: req.body.nim },
    })
    .then(() => {
      res.json({
        status: true,
        pesan: "Berhasil Hapus",
        data: [],
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        pesan: "Gagal Hapus: " + err.message,
        data: [],
      });
    });
});
module.exports = router;
