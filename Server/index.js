const express = require("express");
const app = express();
const db = require("./database/connection");
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
  const rollno = req.body.rollno;
  const name = req.body.name;
  const maths = req.body.maths;
  const phy = req.body.phy;
  const chem = req.body.chem;

  const total = maths + phy + chem;
  let per = total / 3;
  per = per.toFixed(2);

  db.query(
    "INSERT INTO marks (rollno, name, maths, physics, chemistry, total, percentage) VALUES (?,?,?,?,?,?,?)",
    [rollno, name, maths, phy, chem, total, per],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/students", (req, res) => {
 
  db.query("SELECT * FROM marks ORDER BY PERCENTAGE DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      //console.log(result);
     res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM marks WHERE ROLLNO = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
