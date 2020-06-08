const jwt = require("jsonwebtoken");
const config = require("config");
//export en middleware function

module.exports = function (req, res, next) {
  //tar token från header
  const token = req.header("x-auth-token");

  //checka att  det finns 'token' eller inte
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //    varifera token
  try {
    jwt.verify(token, config.get("JWT_SECRET"), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        /* console.log(decoded); => {
          user: { id: '5edd13b291ac2c115cb6f57d' },
          iat: 1591546803,
              exp: 1595146803
      }*/

        req.user = decoded.user;
        /*console.log(req.user); //=>  id: '5edd13b291ac2c115cb6f57d'
        -->(tar req object och tilldela (ekhtesas-dadan) en value tiil user
        decoded value har user i payload)
          const payload = {
              user: {
                  id: user.id,
              },
          };*/
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
