/**
 * Created by 标标 on 2017/2/26.
 */
//左侧导航栏下拉列表
define(['jquery'],function($){
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });


    //退出功能
    $('#logout').on('click',function(){
        $.post('/v6/logout',function(data){
            if(data.code == 200){
                location.href='/html/home/login.html'
            }
        });
    })


    //获取用户的cookie信息，同时做容错处理
    var userInfo=null;
    try{
        userInfo=JSON.parse($.cookie(userInfo));
    }catch(e) {
        userInfo={};
    }

    //然后展示到导航栏
    $('.aside > .profile > h4').html(userInfo.tc_name?userInfo.tc_name:'不知道你是谁')
    $('.aside > .profile img').attr('src',userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png')
});

