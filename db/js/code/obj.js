
function obj() {
  this.x = 3;        // 第一種寫法，為 obj 新增一個欄位 x，其值設定為 3
  this["y"] = 5;     // 第二種寫法，為 obj 新增一個欄位 y，其值設定為 5
  this.sum = function() { return this.x + this.y; } // 為 obj 新增一個欄位 add，其值為一個匿名函數
}

var o = new obj();
console.log("o['x']="+o['x']+" y="+o.y+" sum()="+o.sum());