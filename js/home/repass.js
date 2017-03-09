/**
 * Created by 标标 on 2017/2/28.
 */

define(['jquery','jqueryCookie','nprogress'],function($,undefined,nprogress){


    //该页所有的js都加载完毕，进度条结束
    nprogress.done();

    //密码修改
    $('#repass-form').on('submit',function(){
        console.log(222);
        $.ajax({
            url: '/v6/teacher/repass',
            type: 'post',
            data: $(this).serialize(),
            success: function(data) {
                if(data.code == 200) {
                    $('#logout').trigger('click');
                }
            }
        });
        return false;
    });

});