// 创建了一个空对象。
var obj = {};
// 赋予这个对象一个属性：firstName，并且赋值为 'Sander'。
obj.firstName = 'Sander';
// 赋予这个对象一个属性：lastName，并且赋值为 'Rossel'。
obj.lastName = 'Rossel';
// 赋予这个对象一个方法：getFullName。
obj.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

// 上面代码的另外一种写法。
var person = {
    firstName: 'Sander',
    lastName: 'Rossel',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
