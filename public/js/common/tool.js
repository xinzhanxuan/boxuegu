/**
 * Created by 轩哥哥 on 2017/8/23.
 */

define(["jquery", "datepicker", "datepicker_cn"], function ($) {
  function setDate(ele) {
    //不行：这个时候页面还能东西
    $(ele).datepicker({
      format: 'yyyy-mm-dd',//日期的格式
      //startDate: '-10d',  //可以选择的开始时间
      endDate:"+0d",        //选择的结束时间
      autoclose:true,      //选完日期自动关闭
      language:"zh-CN",     //选择语言，注意需要额外引入一个语言包
      todayBtn:"linked",
      todayHighlight:true
    });
  }
  function getParamPath() {
    var hrefPath = location.search;
    hrefPath = hrefPath.slice(1);
    var pathArr = hrefPath.split('&');
    var pathObj = {};
    pathArr.forEach(function (v, i) {
      var arr = v.split('=');
      pathObj[arr[0]] = Number(arr[1]);
    })
    return pathObj;
  }
  function getParam(key) {
    return getParamPath()[key];
  }
  
  return {
    setDate:setDate,
    getParam:getParam
  }
})