define(['jquery','jqueryCookie','nprogress'],function($,undefined,nprogress){
    /*
    * 展示用户历史登陆头像：
    * 1、获取userInfo这个cookie值
    * 2、把cookie字符串转换为对象
    * 3、设置登录页的img-src为对象中的tc_avatar属性值，如果没有，就给一个默认头像的地址
    *
    * */

    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo = {};
    }
    $('.login .avatar img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');


    /*
    * 1、先监听form表单提交的事件
    * 2、事件回调中通过return false来阻止事件的默认提交
    * 3、事件回调中通过ajax方式请求发送表单数据
    * 4、如果返回结果中的code为200，证明登录成功，跳转到首页
    * */

    $('#form-login').on('submit',function(){
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                //如果登陆成功，使用cookie的方式保存用户的信息
                //注意：cookie值必须是字符串，我们得到的js对象，需要使用JSON.stringify进行转换
                if(data.code == 200){
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/';
                }
            }
        });
        return false;
    })

    //该页所有的js都加载完毕，进度条结束
    nprogress.done();
});