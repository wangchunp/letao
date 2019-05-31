$(function() {
    // 初始化区域滚动组件
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });


    //第一次渲染页面
    $.ajax({
        type: "get",
        url: '/category/queryTopCategory',
        success: function(response) {
            var html = template("category-first", response);
            $("#links").html(html);
            //如果一级有数据
            if (response.rows.length) {
                //给第一个添加选中状态
                $("#links").find("a").eq(0).addClass("active");
                //获取第一个分级id
                var id = response.rows[0].id;
                //     console.log(id);

                getSecondCategory(id);
            }

        }
    });
    // 根据一级分类ID获取二级分类


    //对一级分类设置点击事件 获取而级数据分类数据
    $("#links").on("click", "a", function() {
        //获取点击的一级分类id
        var id = $(this).attr("data-id");

        //排他思想
        $(this).addClass("active").siblings().removeClass("active");
        //调用接口
        getSecondCategory(id);
    })

    //封装的一个函数
    function getSecondCategory(id) {
        $.ajax({
            type: "get",
            url: '/category/querySecondCategory',
            data: {
                id: id
            },
            success: function(response) {
                //  console.log(response);
                var html = template('category-second', response);


                $('.brand-list').html(html);

            }
        });
    }









})