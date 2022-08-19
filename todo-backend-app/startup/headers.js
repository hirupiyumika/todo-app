const cors = require("cors");

module.exports = function(app){
    app.use(
        "*",
        cors({
          allowedHeaders:
            "Access-Control-Allow-Headers,Content-Type,Authorization,Access-Control-Allow-Origin",
          origin: "*",
          methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        })
      );


}