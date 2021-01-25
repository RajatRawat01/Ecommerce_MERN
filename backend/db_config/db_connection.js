"use strict";
//return connection objet
exports.__esModule = true;
var config_1 = require("../config/config");
var db_password = "admin";
var db_name = "mernstack";
var db_url = "mongodb+srv://admin:" + db_password + "@miniprojectdb.nzphu.mongodb.net/" + db_name + "?retryWrites=true&w=majority";
function getConnection() {
    try {
        return config_1["default"].mernClient.connect(db_url);
    }
    catch (error) {
        console.log("connection failed");
    }
}
exports["default"] = getConnection;
;
