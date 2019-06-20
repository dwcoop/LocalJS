/* 
 * localJS V1.0.1
 * proudly make in ROC
 * localjs.blogspot.com
 */
(function(global){
  localJS={
    "版本":"1.0.1",
    "檔案名":"localJS-1.0.1.js",
    "程式標籤":
    document.getElementsByTagName('script'),
    "編譯":function(T){
      var 編譯物件={
        "/%變數%/g" : "var",
        "/將/g" : "var",
        "/指定為/g" : "=",
        "/\#define/g" : "const",
        "/函式/g" : "function",
        "/@\-\-[\S\s]+?\-\-@/g" : function(e){
          //直接接在變數，字串後面要空格
          return "/*"+e.substring(
            3,//第四個開始
            (e.length-3)//到倒數第四
          )+"*/"
        },
        "/@/g" : "\/\/",
        "/這個/g" : "this",
        "/完全等於/g" : "===",
        "/%如果%/g" : "if",
        "/取得類別/g" : "typeof",
        "/新的/g" : "new",
        "/實例/g" : "class",
        "/%否則如果%/g" : "else if",
        "/%否則%/g" : "else",
        "/或/g" : "||",
        "/中的/g" : ".",
        "/減/g" : "-",
        "/加/g" : "+",
        "/除以/g" : "/",
        "/乘以/g" : "*",
        "/大於/g" : ">",
        "/小於/g" : "<",
        "/不是/g" : "!",
        "/大於等於/g" : ">=",
        "/小於等於/g" : "<=",
        "/不等於/g" : "!=",
        "/完全不等於/g" : "!==",
        "/等於/g" : "==",
        "/~區隔~/g" : ""
      };
      Object.keys(編譯物件).map(function(key) {
        var value = 編譯物件[key];
        if(typeof value=="function"){
          eval("T=T.replace("+key+","+value+")")
        }else{
          eval("T=T.replace("+key+",'"+value+"')")
        }
      });
      eval(T);
    },
    "string":{
      "物件":"object",
      "字串":"string",
      "函式":"function"
    }
  }
  /*End localJS 物件(共5個屬性，2個物件)*/
  
  /*
   開始全域程式中文化
   需在最後加上
   global.XXX=XXX
  */
  視窗=function(M){
    if(typeof M=='object'){
      return global.alert(M.標題)
    }else if(typeof M=='string'){
      return global.alert(M)
    }else{
      throw new TypeError(
        '[localJS]程式名：“視窗”，錯誤：參數類別錯誤'
      )
    }
  }
  輸入=function(M){
    if(typeof M=='object'){
      return global.prompt(M.標題)
    }else if(typeof M=='string'){
      return global.prompt(M)
    }else{
      throw new TypeError(
        '[localJS]程式名：“輸入”，錯誤：參數類別錯誤'
      )
    }
  }
  執行=function(T){
    eval(T)
  }
  確認=function(M){
    if(typeof M=='object'){
      return global.confirm(M.標題)
    }else if(typeof M=='string'){
      return global.confirm(M)
    }else{
      throw new TypeError(
        '[localJS]程式名：“確認”，錯誤：參數類別錯誤'
      )
    }
  };
  網址={
    "網址名稱":location.href,
    "井字":location.hash.substr(1),
    "搜尋":location.search.substr(1)
  }
  加反斜線=function(str) {
    str = str.replace(/\\/g, '\\\\');
    str = str.replace(/\'/g, '\\\'');
    str = str.replace(/\"/g, '\\"');
    str = str.replace(/\0/g, '\\0');
    return str;
  }
  移除反斜線=function(str) {
    str = str.replace(/\\'/g, '\'');
    str = str.replace(/\\"/g, '"');
    str = str.replace(/\\0/g, '\0');
    str = str.replace(/\\\\/g, '\\');
    return str;
  }
  /*End 全域程式中文化*/
  
  /*
   開始註冊全域變數
  */
  global.localJS = global.LJS = localJS
  global.中文    = localJS.string;
  global.視窗    = 視窗
  global.輸入    = 輸入
  global.確認    = 確認
  global.網址    = 網址
  global.執行    = 執行
  global.加反斜線    = 加反斜線
  global.移除反斜線    = 移除反斜線
  
  Object.defineProperty(String.prototype,"反斜線",{
    get:function(){
      var str=this.toString();
      alert(str)
      str = str.replace(/\\/g, '\\\\');
      str = str.replace(/\'/g, '\\\'');
      str = str.replace(/\"/g, '\\"');
      str = str.replace(/\0/g, '\\0');
      return str;
    }
  })
  String.prototype.加反斜線 = function() {
    var str=this.toString();
    str = str.replace(/\\/g, '\\\\');
    str = str.replace(/\'/g, '\\\'');
    str = str.replace(/\"/g, '\\"');
    str = str.replace(/\0/g, '\\0');
    return str;
  };
  String.prototype.移除反斜線 = function() {
    var str= this.toString();
    str = str.replace(/\\'/g, '\'');
    str = str.replace(/\\"/g, '"');
    str = str.replace(/\\0/g, '\0');
    str = str.replace(/\\\\/g, '\\');
    return str;
  };
  
  //OnLoad註冊
  global.addEventListener("load",function(){
    for(var i=0;i<localJS.程式標籤.length;i++){
      var type=localJS.程式標籤[i].getAttribute("type");
      if(type=="text/ha"||type=="text/LJS"){
        localJS.編譯(localJS.程式標籤[i].innerHTML)
      }
    }
  })
  /*End 註冊全域變數*/
  
})(window)