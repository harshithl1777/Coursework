var User;
(function (User) {
    User[User["NAME"] = 0] = "NAME";
    User[User["AGE"] = 1] = "AGE";
})(User || (User = {}));
console.log(User.NAME);
var hello = function () {
    // console.log(`${(User[0] === User.NAME) ? 'hello' : 'bye' } added to `);
};
hello();
