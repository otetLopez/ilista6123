/**
 * Note Class referes to the note being created by the user 
 * @param {int} id 
 * @param {string} title
 * @param {string} content 
 */

export function Note(idx, nt, nc, eadd) {
    var id = idx;
    var title = nt;
    var content = nc;
    var email = eadd;

    Object.defineProperties(this, {
        "id": {
            get: function () {
                return id;
            },
            set: function (value) {
                id = value;
            }
        },
        "title": {
            get: function () {
                return title;
            },
            set: function (value) {
                title = value;
            }
        },
        "content": {
            get: function () {
                return content;
            },
            set: function (value) {
                content = value;
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
    });
 }

