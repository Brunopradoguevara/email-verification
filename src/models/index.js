const EmailCode = require("./EmailCOde");
const User = require("./User");


EmailCode.belongsTo(User);
User.hasOne(EmailCode);