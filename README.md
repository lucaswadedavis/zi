#Zi

is a CSS post-processor.

the zi.css method injects a synthetic style tag into the head of the html document.

the zi.transform method just transforms the results of zi.config method into a string appropriate to injection into that style tag.

zi.config is the important bit: it returns a json object that looks a lot like normal css.

