//zi.js global zi object.

zi={};
zi.config=function(){
    var css={
      "body":{
          "font-size":"3em"
      },
      "div":{
          "padding":"30px",
          "margin":"30px",
          "border":"1px solid #000"
      }
    };
    return css;
};
zi.transform=function(css){
    var c="";
    for (var selector in css){
        c+="{";
        for (var property in css[selector]){
            c+=property+" : "+css[selector][property]+";";
        }
        c+="}";
    }
    return c;
};
zi.css=function(){
    if ($("head#zi").length<1){
        $("head").append("<style type='text/css' id='zi'></style>");
    }
    $("head#zi").html( this.transform( this.config() ) );
};