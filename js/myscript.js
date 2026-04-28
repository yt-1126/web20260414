var num = [1, 5, 2, 8, 3];

var max = -99999;
for (var i = 0; i < 5; i++) {
    if (max < num[i]) {
        max = num[i];
    }
}
console.log("最大值:" + max);