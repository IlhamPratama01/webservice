var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const informasiModel = koneksi.define(
  "informasi",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    judul: {
      type: Sequelize.STRING,
    },
    konten: {
      type: Sequelize.TEXT,
    },
    gambar: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: false,
  }
);

module.exports = informasiModel;
