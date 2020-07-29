
/**
 * User Class referes to the note being created by the user 
 * @param {*} nIdx 
 * @param {*} eadd 
 * @param {*} uname 
 * @param {*} pwd 
 */
export function User(nIdx, eadd, uname, pwd) {
    var id = nIdx;
    var email = eadd;
    var username = uname;
    var password = pwd;

    Object.defineProperties(this, {
        "id": {
            get: function () {
                return id;
            },
            set: function (value) {
                id = value;
            }
        },
        "email": {
            get: function () {
                return email;
            },
            set: function (value) {
                email = value;
            }
        },
        "username": {
            get: function () {
                return username;
            },
            set: function (value) {
                username = value;
            }
        },
        "password": {
            get: function () {
                return password;
            },
            set: function (value) {
                password = value;
            }
        },
    });
 }

