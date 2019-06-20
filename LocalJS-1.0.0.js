/* 
 * localJS V1.0.0
 * proudly make in ROC
 * localjs.blogspot.com
 */
(function(global){
  localJS={
    "版本":"1.0.0",
    "作者":"DiaWean",
    "檔案名":"localJS-1.0.0.js",
    "程式標籤":
    document.getElementsByTagName('script'),
    "預編譯":function(T,i){
      var Y=T.getAttribute("type")
      if(Y=="text/ha"||Y=="text/LJS"){
        /*
          console.log("Type= "+Y+" (Number"+i+")")
          console.log(`Number ${i}'s html :\n
              ${T.innerHTML}
          `)
        */
        eval(
          T.innerHTML
            .replace(/%變數%/g,"var")
            .replace(/將/g,"var")
            .replace(/指定為/g,"=")
            .replace(/\#define/g,"const")
            .replace(/函式/g,"function")
            .replace(/@\-\-[\S\s]+?\-\-@/g,
              (e)=>{
              //直接接在變數，字串後面要空格
              return "/*"+e.substring(
                3,//第四個開始
                (e.length-3)//到倒數第四
              )+"*/"
            })
            .replace(/@/g,"\/\/")
            .replace(/完全等於/g,"===")
            .replace(/%如果%/g,"if")
            .replace(/取得類別/g,"typeof")
            .replace(/%否則如果%/,"else if")
            .replace(/%否則%/g,"else")
            .replace(/或/g,"||")
            .replace(/中的/g,".")
            .replace(/減/g,"-")
            .replace(/加/g,"+")
            .replace(/除以/g,"/")
            .replace(/乘以/g,"*")
            .replace(/大於/g,">")
            .replace(/小於/g,"<")
            .replace(/不是/g,"!")
            .replace(/大於等於/g,">=")
            .replace(/小於等於/g,"<=")
            .replace(/不等於/g,"!=")
            .replace(/完全不等於/g,"!==")
            .replace(/等於/g,"==")
            .replace(/~區隔~/g,"")
        )
      }
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
  
  //OnLoad註冊
  global.onload=function(){
    for(var i=0;i<localJS.程式標籤.length;i++){
      localJS.預編譯(
        localJS.程式標籤[i],
        (i+1)
      )
    }
  }
  /*End 註冊全域變數*/
  
})(window)