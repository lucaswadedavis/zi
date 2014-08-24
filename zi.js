//zi.js global zi object. depends on jQuery, but let's be real: when do I not use jQeury?

zi={};
zi.config=function(){
    var css={
      "body":{
          "font-size":"3em",
          "text-align":"center"
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
        c+=selector+"{";
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
    console.log(this.transform(this.config() ));
    $("head style#zi").html( this.transform( this.config() ) );
};