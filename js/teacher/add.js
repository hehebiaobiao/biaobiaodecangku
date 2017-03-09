/**
 * Created by 标标 on 2017/2/28.
 */

define(['jquery', 'jqueryCookie', 'nprogress', 'util', 'template','datepicker','datepickerLanguage'], function ($, undefined, nprogress, util, template,datepicker,undefined) {


    //该页所有的js都加载完毕，进度条结束
    nprogress.done();

    /*
     * 获取tc_id查询字符串，如果有则认为当前是讲师编辑页面，没有则认为是添加讲师页面
     *
     * 编辑讲师：
     * 1、想获取讲师信息，展示到表单中
     * 2、监听提交表单事件，转为ajax方式，提交到讲师修改接口
     *
     * 添加讲师：
     * 1、监听提交表单事件，转为ajax方式提交到讲师添加接口
     * */

    var tcid = util.getQueryString('tc_id');
    if(tcid){
        //获取该讲师之前的信息，填充到表单中
            $.get('/v6/teacher/edit',{tc_id:tcid},function(data){
            if(data.code == 200){
                var html = template('teacher-form-tpl',data.result);
                $('.teacher-add').html(html);
                $('#datepicter').datepicker({
                    language:'zh-CN',
                    endDate: new Date(),
                    format:'yyyy-mm-dd'
                });
            }
        })
    }else{
        //添加教师
        var html = template('teacher-form-tpl',{});
        $('.teacher-add').html(html);
        $('#datepicter').datepicker({
            language:'zh-CN',
            endDate: new Date(),
            format:'yyyy-mm-dd'
        });
    }

    /*
    * 监听表单提交事件，转换为ajax
    * 如果是编辑，那么请求/v6/teacher/update,额外需要一个tc_id
    * 如果是添加，那么请求/v6/teacher/add
    * */

    $('.teacher-add').on('submit','#teacher-add-form',function(){
        $.ajax({
            url:'/v6/teacher'+(tcid?'/update':'/add'),
            type:'post',
            data:$(this).serialize()+(tcid?'&tc_id='+tcid:''),
            success:function(data){
                if(data.code == 200){
                    location.href='/html/teacher/list.html';
                }
            }
        });
        return false;
    })
});