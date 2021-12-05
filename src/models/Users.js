"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

login() {
    const {id, psword} = UserStorage.getUsers("id", "psword");
    console.log(id, psword);
    }
}

module.exports = User;