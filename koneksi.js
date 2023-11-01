const { Sequelize } = require("sequelize");

const koneksi = new Sequelize("sidb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  koneksi.authenticate();
  koneksi.sync({ alter: true });
  console.log("Berhasil konek database");
} catch (error) {
  console.error("Gagal Konek database");
}

module.exports = koneksi;
