/**
 * Created by 标标 on 2017/2/28.
 */

define(['jquery','jqueryCookie','nprogress','template'],function($,undefined,nprogress,template){


    //该页所有的js都加载完毕，进度条结束
    nprogress.done();

    //页面渲染
    $.get('/v6/course',function(data){
        if(data.code=200){
            $('.courses').append(template('course-tpl',{list:data.result}));
        }
    });
})