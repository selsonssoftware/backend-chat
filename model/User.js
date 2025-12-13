import { DataTypes } from "sequelize";
import db2 from "../lib/db.js";

const User = db2.define("User", {
    name: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    profile:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.INTEGER
    },
    user_id:{
        type: DataTypes.STRING
    }
},
{
    tableName: "users",
    timestamps: false
});

export default User;