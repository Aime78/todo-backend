const pool = require("./db");

const getStudents = (req, res) => {
  pool.query("SELECT * from students", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getStudents,
};
