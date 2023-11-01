var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const informasiModel = koneksi.define(
  "galery",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    gambar: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = informasiModel;
