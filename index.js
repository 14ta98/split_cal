document.getElementById('form').onsubmit = function() {

    var price = document.getElementById('form').price.value;
    var num = document.getElementById('form').num.value;
    price = Math.floor(parseInt(price));
    num = Math.floor(parseInt(num));
    var divisibleNum = price / num;
    divisibleNum = Math.floor(parseInt(divisibleNum));
    var nodisibleNum = price % num;
    nodisibleNum = Math.floor(parseInt(nodisibleNum));
    // console.log(price);
    // console.log(value);
    if(price > 0 && num > 0) {
      // 割り切れる場合の処理
      if (price % num === 0) {
        // console.log(nodisibleNum);
        // console.log(divisibleNum);
        document.getElementById('message').textContent = '一人' + divisibleNum + '円ちょうどです！';
        // 割り切れない場合の処理
      } else if (price % num != 0) {
        document.getElementById('message01').textContent = '一人' + divisibleNum + '円だと' + nodisibleNum + '円足りません';
      }
    } else {
      alert('入力された値に誤りがあります');
    }
    return false;
}
