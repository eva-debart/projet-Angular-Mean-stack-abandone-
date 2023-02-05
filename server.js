const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const dbConfig = require("./src/app/config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./src/app/models");
const User_Role = db.user_role;
const Role = db.role;
db.mongoose.set('strictQuery', true);
db.mongoose
  .connect(`mongodb://0.0.0.0:27017/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require("./src/app/routes/auth.routes")(app);
require("./src/app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  new Role({
    name: "Guerrier"
  }).save(err => {
    if (err) {
      console.log("error", err);
    }
    console.log("added 'Guerrier' to roles collection");
  });
  new Role({
    name: "Alchimiste"
  }).save(err => {
    if (err) {
      console.log("error", err);
    }
    console.log("added 'Alchimiste' to roles collection");
  });
  new Role({
    name: "Sorcier"
  }).save(err => {
    if (err) {
      console.log("error", err);
    }
    console.log("added 'Sorcier' to roles collection");
  });
  new Role({
    name: "Espions"
  }).save(err => {
    if (err) {
      console.log("error", err);
    }
    console.log("added 'Espions' to roles collection");
  });
  new Role({
    name: "Enchanteur"
  }).save(err => {
    if (err) {
      console.log("error", err);
    }
    console.log("added 'Enchanteur' to roles collection");
  });

    User_Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new User_Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to user roles collection");
      });

      new User_Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to user roles collection");
      });

      new User_Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to user roles collection");
      });
    }
  });
}