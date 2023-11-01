var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const informasiModel = koneksi.define(
  "document",
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
  },
  {
    freezeTableName: true,
  }
);

module.exports = informasiModel;
