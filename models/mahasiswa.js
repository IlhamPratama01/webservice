var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const mahasiswaModel = koneksi.define(
  "mahasiswa",
  {
    nim: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    nama: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true }
);
module.exports = mahasiswaModel;
