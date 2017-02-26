<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>学IT - 后台管理系统</title>
    <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="./assets/nprogress/nprogress.css">
    <link rel="stylesheet" href="./less/index.css">
</head>
<body>
    
    <!-- 侧边栏 -->
    <div class="aside">
        <!-- 个人资料 -->
        <div class="profile">
            <!-- 头像 -->
            <div class="avatar img-circle">
                <img src="./uploads/avatar.jpg">
            </div>
            <h4>布头儿</h4>
        </div>
        <!-- 导航菜单 -->
        <div class="navs">
            <ul class="list-unstyled">
                <li>
                    <a href="./index.html">
                        <i class="fa fa-home"></i>
                        仪表盘
                    </a>
                </li>
                <li>
                    <a href="../user_list.html">
                        <i class="fa fa-bell"></i>
                        用户管理
                    </a>
                </li>
                <li>
                    <a href="../teacher/teacher_list.html">
                        <i class="fa fa-bell"></i>
                        讲师管理
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-cog"></i>
                        课程管理
                        <i class="arrow fa fa-angle-right"></i>
                    </a>
                    <ul class="list-unstyled" style="display: block;">
                        <li>
                            <a href="./course_add.html" class="active">
                                 课程添加
                            </a>
                        </li>
                        <li>
                            <a href="../course_list.html">
                                课程列表
                            </a>
                        </li>
                        <li>
                            <a href="../course_category.html">
                                课程分类
                            </a>
                        </li>
                        <li>
                            <a href="../course_topic.html">
                                课程专题
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="../advert_list.html">
                        <i class="fa fa-bell"></i>
                        广告管理
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-cog"></i>
                        系统设置
                        <i class="arrow fa fa-angle-right"></i>
                    </a>
                    <ul class="list-unstyled">
                        <li>
                            <a href="javascript:;">
                                网站设置
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                 权限管理
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <div class="header">
                <nav class="navbar navbar-custom">
                    <div class="navbar-header">
                        <a href="javascript:;" class="navbar-brand">
                            <i class="fa fa-navicon"></i>
                        </a>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-bell"></i>
                                <span class="badge">8</span>
                            </a>
                        </li>
                        <li>
                            <a href="../home/settings.html">
                                <i class="fa fa-user"></i>
                                个人中心
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-sign-out"></i>
                                退出
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-tasks"></i>
                            </a>
                        </li>
                    </ul>
                </nav>          
            </div>
            <div class="body course-add">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">课程管理</a></li>
                    <li class="active">课程添加</li>
                </ol>
                <div class="steps">
                    <!-- 摘要 -->
                    <div class="brief">
                        <div class="thumb">
                            <img src="./uploads/course.png" alt="">
                        </div>
                        <dl class="info">
                            <dt>Git 指南</dt>
                            <dd>讲师：李鹏周</dd>
                            <dd>课时：32</dd>
                        </dl>
                    </div>
                    <!-- 步聚 -->
                    <ul class="forwards list-unstyled">
                        <li>
                            <a href="./course_add_step1.html" class="active">
                            <b>1</b>
                            基本信息
                            </a>
                        </li>
                        <li>
                            <a href="../course_add_step2.html">
                            <b>2</b>
                            课程图片
                            </a>
                        </li>
                        <li>
                            <a href="../course_add_step3.html">
                            <b>3</b>
                            课时管理
                            </a>
                        </li>
                    </ul>
                    <!-- 基本信息 -->
                    <div class="content">
                        <!-- 标题 -->
                        <div class="title">
                            <h5>基本信息 <small>BASIC INFORMATION</small></h5>
                        </div>
                        <form action="" class="basic form-horizontal">
                            <div class="form-group">
                                <label for="" class="col-xs-2 control-label">标题</label>
                                <div class="col-xs-8">
                                    <input type="text" class="form-control input-sm" value="Git指南">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-xs-2 control-label">课程描述</label>
                                <div class="col-xs-8 ckeditor">
                                    <textarea name="" rows="15" class="form-control input-sm"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-xs-2 control-label">讲师</label>
                                <div class="col-xs-8">
                                    <select name="" class="form-control input-sm">
                                        <option value="">李鹏周</option>
                                        <option value="">汪磊</option>
                                        <option value="">蒋坤</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-xs-2 control-label">分类</label>
                                <div class="col-xs-8">
                                    <select name="" class="form-control input-sm">
                                        <option value="">互联网</option>
                                    </select>
                                    <select name="" class="form-control input-sm">
                                        <option value="">网页设计</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-xs-2 control-label">标签</label>
                                <div class="col-xs-8">
                                    <input type="text" class="form-control input-sm">
                                    <p class="help-block">将会应用于按标签搜索课程、相关课程的提取等</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-10">
                                    <a href="../course_add_step2.html" class="btn btn-success btn-sm pull-right">保 存</a>
                                </div>                          
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="./assets/jquery/jquery.min.js"></script>
    <script src="./assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/nprogress/nprogress.js"></script>
    <script src="./js/common.js"></script>
</body>
</html>