function setDemoImage(m){var t=0;$demo_list.find("li").each(function(){t+=1;var e=$(this).find("button");if(!m.demos.hasOwnProperty(t))return!1;var o='<img src="'+m.defaulturl+"demos/"+m.demos[t]+'" alt="">',o=$(o);o.css({width:"100%","margin-top":10}),e.append(o),e.css({"font-weight":"600","font-size":"15px",color:"#212529","text-decoration":"underline"})})}var $demo_list,json;window.frameElement&&($demo_list=$(parent.document.getElementsByClassName("ui-card theme-editor__card")),json={defaulturl:"//obest.org/shopify/porto/adminpanel/",demos:{1:"home01.jpg",2:"home02.jpg",3:"home03.jpg",4:"home04.jpg",5:"home05.jpg",6:"home06.jpg",7:"home07.jpg",8:"home08.jpg",9:"home09.jpg",10:"home10.jpg",11:"home11.jpg",12:"home12.jpg",13:"home13.jpg",14:"home16.jpg",15:"home17.jpg",16:"home18.jpg",17:"home19.jpg",18:"home20.jpg"}},$(document).ready(function(){setDemoImage(json)}));