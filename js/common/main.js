/**
 * Created by 标标 on 2017/2/25.
 */

require.config({
    baseUrl:'/',
    paths:{
        //第三方库的路径配置
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap.min',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        nprogress:'lib/nprogress/nprogress',
        template:'lib/artTemplate-3.0.1/template',


        //自己写的路径配置
        courseAdd:'js/course/add',
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3:'js/course/add_step3',
        courseCategory:'js/course/category',
        courseCategoryAdd:'js/course/category_add',
        courseList:'js/course/list',
        courseTopic:'js/course/topic',
        userList:'js/user/list',
        userProfile:'js/user/profile',
        common:'js/common/common',
        login:'js/home/login',
        repass:'js/home/repass',
        settings:'js/home/settings',
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',
        index:'js/index'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});

//优先使用最快的速度开启进度条，其他的js加载延后
require(['nprogress'],function(nprogress){
    nprogress.start();
})

/*
* 所有的页面都是需要这两个js，所以先加载他们
* */
require(['jquery','bootstrap','common']);

//这里获取页面的pathname，然后加载对应的js
(function(window){
    //获取路径
    var pathname = window.document.location.pathname;
    /*
    * 判断登陆状态：
    * 1、登录页
    * 1.1、没有SESSID,不用管
    * 1.2、有SESSID，跳转到首页
    *
    * 2、其他页
    * 2.1、没有SESSID，跳转好登陆页
    * 2.2、有SESSID，不用管
    * */

    require(['jquery','jqueryCookie'],function($,undefined){
        //获取cookie字符串
        var SESSID= $.cookie('PHPSESSID');
        //登陆状态前端效验
        if(pathname == '/html/home/login.html' &&  SESSID){
            location.href='/';
        }else if(pathname !== '/html/home/login.html' &&  !SESSID){
            location.href='html/home/login.html';
        }

        switch(pathname) {
            case '/html/user/list.html':
                //根据上面的路径知道代表userList
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
            /*course*/
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;
            /*home*/
            case '/html/home/login.html':
                require(['login']);
                break;
            case '/html/home/repass.html':
                require(['repass']);
                break;
            case '/html/home/settings.html':
                require(['settings']);
                break;
            case '/':
                require(['index']);
                break;
        }
    })


})(window);