define(['jquery','util','form'],function($,util){
    util.setMenu(location.pathname);

    //绑定表单提交单击事件
    $('#courseBtn').click(function(){
      $('#courseForm').ajaxSubmit({
        type:'post',
        url:'/api/course/create',
        dataType:'json',
        success:function(data){
          if(data.code==200){
            location.href='/course/basic?cs_id='+data.result.cs_id;
          }
        }
      });
    });
});