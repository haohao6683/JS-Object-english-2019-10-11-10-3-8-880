// 1、创建对象：
var user = {};
user['name'] = 'John';
user['surname'] = 'Mike';
user.name = 'Peter';
delete user.name

//2、计算水果总数
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var pieces = fruit.apple + fruit.pear + fruit.peach;
console.log(pieces);