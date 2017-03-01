/**
 * Created by 标标 on 2017/2/26.
 */
//左侧导航栏下拉列表
define(['jquery','jqueryCookie'],function($,undefined){
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });

    //ajax请求loading
    $(document).ajaxStart(function(){
        $('.overlay').show();
    }).ajaxStop(function(){
        $('.overlay').hide();
    })




    /*
    * 根据页面路径定位左侧导航
    * 1、获取当前页面的pathname
    * 2、然后获取所有a标签，给他添加active calss即可，
    * 然后再使用pathname获取到应该被选中的a，给他添加active class即可。
    * 3、最后获取该a标签所有的父ul标签，让他们展示出来，如果不展示是看不到的。
    * */
    var pathname=window.location.pathname;
    $('.navs a').removeClass('active').filter('[href="'+ pathname +'"]').addClass('active').parents('ul').show();


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
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e) {
        userInfo={};
    }

    //然后展示到导航栏
    $('.aside > .profile h4').html(userInfo.tc_name?userInfo.tc_name:'不知道你是谁');
    $('.aside > .profile img').attr('src',userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png');
});

