$(function() {
    $("#search-btn").on("click", function() {
        //用户输入的值
        var keyword = $("#keyword").val();

        if (!keyword) {
            alert("请输入要搜索的商品");
            return;

        }

        //将用户输入的数据存入数组中
        var keyArr = [];
        keyArr.push(keyword);
        //将关键字存入本地
        localStorage.setItem('keyArr', JSON.stringify(keyArr));

        //拼接实现地址栏的数据
        location.href = "search-resurt.html?keyword=" + keyword;

        if (localStorage.getItem(keyArr)) { //有数据
            //将数据转换成数组
            keyArr = JSON.parse(localStorage.setItem);
            var html = template('historyTpl', { resilt: keyArr });

            // console.log(html);
            $('#history-box').html(html);
        }

    })
})