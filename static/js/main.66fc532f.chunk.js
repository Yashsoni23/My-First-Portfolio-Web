(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){},14:function(e,a,t){e.exports=t(29)},23:function(e,a,t){},25:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t.n(l),c=t(11),s=t.n(c),m=(t(23),t(25),t(6)),r=t(0),i=t(5),o=t(3),E=t(12),d=(t(10),function(){var e=Object(l.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(l.useState)(!1),r=Object(i.a)(s,2),d=r[0],N=r[1];document.getElementById("Navbar");return console.log(d),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Navbar ",id:"Navbar"},n.a.createElement("div",{className:"Logo"},n.a.createElement("h1",{id:"logo"},"Yash soni")),window.innerWidth>500?n.a.createElement("div",{className:"NavItems ",id:"NavItems"},n.a.createElement("li",null,n.a.createElement(m.b,{to:"/",className:"NavLink "},"Home")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/About",className:"NavLink"},"About")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/Projects",className:"NavLink"},"Projects")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/Sketches",className:"NavLink"},"Sketches")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/Contact",className:"NavLink"},"Say Hi!"))):t&&n.a.createElement("div",{className:" NavItems",id:"NavItems"},n.a.createElement("li",null,n.a.createElement(m.b,{to:"/",className:"NavLink"},"Home")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/About",className:"NavLink"},"About")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/Projects",className:"NavLink"},"Projects")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/Sketches",className:"NavLink"},"Sketches")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/Contact",className:"NavLink"},"Say Hi!"))),n.a.createElement("div",{className:"Btn"},n.a.createElement(o.a,{className:"bars",onClick:window.innerWidth<500?function(){c(!t)}:function(){N(!d)},id:"bar"}),n.a.createElement(E.a,{className:"close"}))))}),N=t(13),u=t(7),v=[{id:1,image:"IMG_1360"},{id:2,image:"water-fall"},{id:3,image:"pexels-og-mpango-3041111"},{id:4,image:"pexels-og-mpango-3041111"}],h=t(8),p=function(e){var a=e.imgData,t=Object(l.useState)(1),c=Object(i.a)(t,2),s=c[0],m=c[1],r=Object(l.useState)(2),o=Object(i.a)(r,2),E=o[0],d=o[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"SliderBox"},n.a.createElement("div",{className:"sm_Container"},n.a.createElement("h2",{className:"Head4"},"My ",n.a.createElement("span",{className:"ul4"},"Sketc"),"hes ",n.a.createElement("span",{className:"arrow"},">"),n.a.createElement("span",{className:"arrow"},">"),n.a.createElement("span",{className:"arrow"},">")),n.a.createElement("div",{className:"more_btn"},n.a.createElement("button",{type:"button",className:"See_More",onClick:function(){return window.open("/Sketches")}},"See More ",n.a.createElement("span",{className:"qus"},"?")))),n.a.createElement("div",{className:"prevbtn_container btn"},n.a.createElement(h.a,{className:"pBtn",onClick:function(){!function(){switch(1!==s?m(s-1):1===s&&m(a.length),s){case 1:d(3);break;case 2:d(4);break;case 3:d(1);break;case 4:d(2)}}()}})),n.a.createElement("div",{className:"Slider"},n.a.createElement("div",{className:"slides"},n.a.createElement("div",{className:"slide1 "},a.map(function(e,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{key:e.id,className:"slide2 slide_2 "},n.a.createElement("img",{src:"/images/sketches/img".concat(s,".jpg"),alt:"images",className:"Slide Slide_Home mobile"})))})),n.a.createElement("div",{className:"slide2 mobile_slide"},a.map(function(e,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{key:e.id,className:"slide2 mobile_slide2 "},n.a.createElement("img",{src:"/images/sketches/img".concat(E,".jpg"),alt:"images",className:"Slide "})))})))),n.a.createElement("div",{className:"nextbtn_container btn"},n.a.createElement(h.b,{className:"nBtn",onClick:function(){return s!==a.length?m(s+1):s===a.length&&m(1),void(3!==s?d(E+1):3===s&&d(1))}}))))},g=function(){var e=Object(l.useState)(v),a=Object(i.a)(e,2),t=a[0],c=a[1];return console.log(c),n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{id:"Home",className:"Home"},n.a.createElement(d,null),n.a.createElement("div",{className:"Banner"},n.a.createElement("div",{className:"SometxtBox"},n.a.createElement("div",{className:"Sometxt"},n.a.createElement("h1",{className:"txt"},"Hello ,I'm ",n.a.createElement("span",{className:"name"},"Yash"),n.a.createElement("p",{className:"childtxt"},'"Programming made the impossible possible.',n.a.createElement("br",null),' You can have a only null object and a constant variable ."',n.a.createElement("br",null),n.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/yash-simejiya-8288a6225/",className:"childtxt  childtxt_hover"},"Curious to know more?"))))),n.a.createElement("div",{className:"poster_container1"},n.a.createElement("div",{className:"Poster"})))),n.a.createElement("section",{className:"About",id:"About"},n.a.createElement("div",{className:"Header"},n.a.createElement("h2",{className:"Head"},n.a.createElement("span",{className:"ulhead"},"About")," Me")),n.a.createElement("div",{className:"DivContainer"},n.a.createElement("div",{className:"ImageOuterBox"},n.a.createElement("div",{className:"ImageInnerBox ImageInnerBox_About"})),n.a.createElement("div",{className:"AboutOuterContainer"},n.a.createElement("div",{className:"AboutInnerContainer"},n.a.createElement("article",{className:"article"},n.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",n.a.createElement("span",{className:"span"},"Hey")," !! I'm Yash.I am currently doing My BCA from SilverOak University.I have much curious about To learn new technology and build something which are fix some problem,so that I trying to shape my career in IT industry. ",n.a.createElement("br",null),n.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 All tech fields are super attactive but in some of them especially my favourites are Competative Coding,Machine Learning,Data Science and ios Development. ",n.a.createElement("br",null),n.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 With this The Curiousity can't calm me down, I always make new sketches and spend a few of my hours when I want to reconnect.Some sketches i have added to this website, on Sketches Section so you must be check it out.",n.a.createElement("br",null),n.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 So it's all About me if you have any question or suggestion to ask me via drop massage in Contact form or E-mail. ",n.a.createElement("br",null),n.a.createElement("span",{className:"Greets"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Have a Nice Day!!")))))),n.a.createElement("section",{id:"Projects"},n.a.createElement("div",{className:"triangle_2"}," ",n.a.createElement("h2",{className:"Head2"},"Pro",n.a.createElement("span",{className:"ul2"},"je"),"cts")),n.a.createElement("div",{className:"projectBox"},n.a.createElement("div",{className:"Card1"},n.a.createElement("div",{className:"Circle1"},n.a.createElement("div",{className:"CircleIn NextJs"})),n.a.createElement("div",{className:"Project_Card Cd1"},n.a.createElement("div",{className:"logo_poster_container"},n.a.createElement("div",{className:"logo_poster Ecommerce"}),n.a.createElement("h1",null,"#E-commerce"),n.a.createElement("p",null,"(Comming Soon)")),n.a.createElement("div",{className:"card_cover"},n.a.createElement("span",{className:"trangle3"}),n.a.createElement("span",{className:"Details "},"Details"),n.a.createElement("div",{className:"text_container"},n.a.createElement("div",{className:"text_cols1"},n.a.createElement("h3",null,"Tech Used: "),n.a.createElement("h3",null,"Hosting: "),n.a.createElement("h3",null,"Website Type:"),n.a.createElement("h3",null,"Complated In:"),n.a.createElement("h3",null,"API:")),n.a.createElement("div",{className:"text_cols2"},n.a.createElement("p",null,"NextJs"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"))),n.a.createElement("div",{className:"report_container"},n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head SEO"},"SEO"),n.a.createElement("h4",{className:"Persent"},"-")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Best"},"Best ",n.a.createElement("br",null)," Practices"),n.a.createElement("h4",{className:"Persent Persent1"},"-")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Accessibilty"},"Accessibilty "),n.a.createElement("h4",{className:"Persent"},"-")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Performance"}," Performance"),n.a.createElement("h4",{className:"Persent Persent1"},"-"))),n.a.createElement("button",{type:"button",className:"Source_btn"},"Source Code(Comming Soon)")))),n.a.createElement("div",{className:"Card2"},n.a.createElement("div",{className:"Circle2"},n.a.createElement("div",{className:"CircleIn ReactJs"})),n.a.createElement("div",{className:"Project_Card Cd2"},n.a.createElement("div",{className:"logo_poster_container"},n.a.createElement("div",{className:"logo_poster Portfolio"}),n.a.createElement("h1",null,"#Portfolio")),n.a.createElement("div",{className:"card_cover"},n.a.createElement("span",{className:"trangle3"}),n.a.createElement("span",{className:"Details "},"Details"),n.a.createElement("div",{className:"text_container"},n.a.createElement("div",{className:"text_cols1"},n.a.createElement("h3",null,"Tech Used: "),n.a.createElement("h3",null,"Hosting: "),n.a.createElement("h3",null,"Website Type:"),n.a.createElement("h3",null,"Complated In:"),n.a.createElement("h3",null,"API:")),n.a.createElement("div",{className:"text_cols2"},n.a.createElement("p",null," React Js"),n.a.createElement("p",null,"Netlify.com"),n.a.createElement("p",null,"Static"),n.a.createElement("p",null,"12days"),n.a.createElement("p",null,"Formspree"))),n.a.createElement("div",{className:"report_container"},n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head SEO"},"SEO"),n.a.createElement("h4",{className:"Persent"},"100%")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Best"},"Best ",n.a.createElement("br",null)," Practices"),n.a.createElement("h4",{className:"Persent Persent1"},"87%")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Accessibilty"},"Accessibilty "),n.a.createElement("h4",{className:"Persent"},"83%")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Performance"}," Performance"),n.a.createElement("h4",{className:"Persent Persent1"},"53%"))),n.a.createElement("button",{type:"button",className:"Source_btn"},"Source Code")))),n.a.createElement("div",{className:"Card3"},n.a.createElement("div",{className:"Circle3"},n.a.createElement("div",{className:"CircleIn CPP"},n.a.createElement(u.a,{className:"cpp_logo"}))),n.a.createElement("div",{className:"Project_Card Cd3"},n.a.createElement("div",{className:"logo_poster_container"},n.a.createElement("div",{className:"logo_poster Bank"}),n.a.createElement("h1",null,"#Bank Managment System")),n.a.createElement("div",{className:"card_cover"},n.a.createElement("span",{className:"trangle3"}),n.a.createElement("span",{className:"Details "},"Details"),n.a.createElement("div",{className:"text_container tc3"},n.a.createElement("div",{className:"text_cols1 tc3"},n.a.createElement("h3",null,"Tech Used: "),n.a.createElement("h3",null,"DS Used: "),n.a.createElement("h3",null,"Name :"),n.a.createElement("h3",null,"Complated In:"),n.a.createElement("h3",null,"GitHub:")),n.a.createElement("div",{className:"text_cols2 tc3"},n.a.createElement("p",null,"C++"),n.a.createElement("p",null,"No"),n.a.createElement("p",null,"BMS "),n.a.createElement("p",null,"4 days"),n.a.createElement("p",null,"Yes"))),n.a.createElement("button",{type:"button",className:"Source_btn"},"Source Code"))))),n.a.createElement("div",{className:"triangle_1"})),n.a.createElement("section",{className:"Sketches"},n.a.createElement("h2",{className:"Head3"},"S",n.a.createElement("span",{className:"ul3"},"kil"),"ls"),n.a.createElement("div",{className:"Banner2"},n.a.createElement("div",{className:"poster_container"},n.a.createElement("div",{className:"Poster2"})),n.a.createElement("div",{className:"SkillBox"},n.a.createElement("div",{className:"skillset progress-10"},n.a.createElement("div",{className:"overlay"},"95%"),n.a.createElement("div",{className:"SkillName"},"HTML")),n.a.createElement("div",{className:"skillset progress-11"},n.a.createElement("div",{className:"overlay"},"92%"),n.a.createElement("div",{className:"SkillName"},"CSS")),n.a.createElement("div",{className:"skillset progress-12"},n.a.createElement("div",{className:"overlay"},"60%"),n.a.createElement("div",{className:"SkillName"},"JS")),n.a.createElement("div",{className:"skillset progress-13"},n.a.createElement("div",{className:"overlay"},"75%"),n.a.createElement("div",{className:"SkillName"},"J-QUERY")),n.a.createElement("div",{className:"skillset progress-14"},n.a.createElement("div",{className:"overlay"},"80%"),n.a.createElement("div",{className:"SkillName"},"C")),n.a.createElement("div",{className:"skillset progress-15"},n.a.createElement("div",{className:"overlay"},"75%"),n.a.createElement("div",{className:"SkillName"},"C++")),n.a.createElement("div",{className:"skillset progress-16"},n.a.createElement("div",{className:"overlay"},"64%"),n.a.createElement("div",{className:"SkillName"},"REACTJS")),n.a.createElement("div",{className:"skillset progress-17"},n.a.createElement("div",{className:"overlay"},"50%"),n.a.createElement("div",{className:"SkillName"},"NEXTJS")),n.a.createElement("div",{className:"skillset progress-18"},n.a.createElement("div",{className:"overlay"},"50%"),n.a.createElement("div",{className:"SkillName"},"PHP")),n.a.createElement("div",{className:"skillset "},n.a.createElement("div",{className:"LIlogo"},n.a.createElement(o.e,null),n.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/yash-simejiya-8288a6225/",className:"childtxt  childtxt_hover"})),n.a.createElement("button",{onClick:function(){return window.open("https://www.linkedin.com/in/yash-simejiya-8288a6225/")},className:"Profile"},"Profile",n.a.createElement(N.a,{className:"Rarrow"})))),n.a.createElement(p,{imgData:t}))),n.a.createElement("section",{className:" section_Contect",id:"Contact"},n.a.createElement("div",{className:"Contact_header"},n.a.createElement("h1",{className:"Contact_Head"},"Get in Touch")),n.a.createElement("div",{className:"Contact_container"},n.a.createElement("div",{className:"Contact_flex_container","data-aos":"fade-left"},n.a.createElement("form",{action:"https://formspree.io/f/xpznagoe",method:"POST"},n.a.createElement("div",{className:"form_container"},n.a.createElement("div",{className:"form_container_inner"},n.a.createElement("div",{className:" feild_container "},n.a.createElement("legend",null," Name*"),n.a.createElement("label",{htmlFor:"Name",className:"label",min:"5"},n.a.createElement("input",{required:!0,type:"text",name:"Name",id:"Name",autocomplete:"off",className:"input_width"}))),n.a.createElement("div",{className:"Email feild_container "},n.a.createElement("legend",null," E-mail*"),n.a.createElement("label",{htmlFor:"E-mail",className:"label"},n.a.createElement("input",{required:!0,type:"email",name:"E-mail",id:"E-mail",autoComplete:"off",className:"input_width"}))),n.a.createElement("div",{className:"Subject feild_container "},n.a.createElement("legend",null,"Subject *"),n.a.createElement("label",{htmlFor:"Subject",className:"label"},n.a.createElement("input",{required:!0,type:"Subject",name:"Subject",id:"Subject",autoComplete:"off",className:"input_width"}))),n.a.createElement("div",{className:"Massage feild_container "},n.a.createElement("legend",null," Massage*"),n.a.createElement("label",{htmlFor:"Subject",className:"label"},n.a.createElement("textarea",{title:"Massage",name:"Massage",id:"Massage",autoComplete:"off",className:"input_width"}))),n.a.createElement("button",{type:"submit",id:"btn"},"Send"))))),n.a.createElement("div",{className:"Contact_flex_inner_container","data-aos":"fade-right"},n.a.createElement("div",{className:"Head_container"},n.a.createElement("h2",{id:"Feel"},"Feel Free To Contact"),n.a.createElement("h6",{className:"para"},"Hello Everyone! Have a great day : I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You.")),n.a.createElement("div",{className:"col_container"},n.a.createElement("div",{className:"address_container"},n.a.createElement("div",{className:"contain map"},n.a.createElement("img",{src:"map.png",alt:"",className:"MEW"})),n.a.createElement("div",{className:"contain email"},n.a.createElement("img",{src:"email.png",alt:"",className:"MEW"})),n.a.createElement("div",{className:"contain web"},n.a.createElement("img",{src:"globe.png",alt:"",className:"MEW"}))),n.a.createElement("div",{className:"main_container3"},n.a.createElement("div",{className:"address container2"},n.a.createElement("h3",null,"Vatva,Ahemedabad")),n.a.createElement("div",{className:"container2 email"},n.a.createElement("h3",null,"Yashsoni48678@gmail.com")),n.a.createElement("div",{className:"container2 web"},n.a.createElement("h3",null,"www.Yashsoni.net.in")))))),n.a.createElement("div",{className:"Thanks"},"Thanks for Visiting!!"),n.a.createElement("footer",null,n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"Copy"},n.a.createElement("span",{className:"cright"},"\xa9"),"Yash Soni 2022"),n.a.createElement("div",{className:"social"},n.a.createElement(o.e,{className:"hover",onClick:function(){return window.open("https://www.linkedin.com/in/yash-simejiya-8288a6225/")}}),n.a.createElement(o.d,{className:"hover",onClick:function(){return window.open("https://www.instagram.com/itsyashsimejiya/")}}),n.a.createElement(o.b,{className:"hover",onClick:function(){return window.open("https://github.com/Yashsoni23")}}),n.a.createElement(o.c,{className:"hover",onClick:function(){return window.open(" https://www.hackerrank.com/yashsoni48678")}}),n.a.createElement(o.f,{className:"hover",onClick:function(){return window.open("https://twitter.com/YashSon19998199")}}))))))},b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",null,n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"Copy"},n.a.createElement("span",{className:"cright"},"\xa9"),"Yash Soni 2022"),n.a.createElement("div",{className:"social"},n.a.createElement(o.e,{className:"hover",onClick:function(){return window.open("https://www.linkedin.com/in/yash-simejiya-8288a6225/")}}),n.a.createElement(o.d,{className:"hover",onClick:function(){return window.open("https://www.instagram.com/itsyashsimejiya/")}}),n.a.createElement(o.b,{className:"hover",onClick:function(){return window.open("https://github.com/Yashsoni23")}}),n.a.createElement(o.c,{className:"hover",onClick:function(){return window.open(" https://www.hackerrank.com/yashsoni48678")}}),n.a.createElement(o.f,{className:"hover",onClick:function(){return window.open("https://twitter.com/YashSon19998199")}})))),n.a.createElement("div",{className:"Thanks"},"Thanks for Visiting!!"))},_=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("section",{className:"About1"},n.a.createElement("div",{className:"DivContainer"},n.a.createElement("div",{className:"ImageOuterBox"},n.a.createElement("div",{className:"ImageInnerBox ImageInnerBox_About"})),n.a.createElement("div",{className:"AboutOuterContainer"},n.a.createElement("div",{className:"AboutInnerContainer"},n.a.createElement("article",{className:"article"},n.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",n.a.createElement("span",{className:"span"},"Hey")," !! I'm Yash.I am currently doing My BCA from SilverOak University.I have much curious about To learn new technology and build something which are fix some problem,so that I trying to shape my career in IT industry. ",n.a.createElement("br",null),n.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 All tech fields are super attactive but in some of them especially my favourites are Competative Coding,Machine Learning,Data Science and ios Development. ",n.a.createElement("br",null),n.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 With this The Curiousity can't calm me down, I always make new sketches and spend a few of my hours when I want to reconnect.Some sketches i have added to this website, on Sketches Section so you must be check it out.",n.a.createElement("br",null),n.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 So it's all About me if you have any question or suggestion to ask me via drop massage in Contact form or E-mail. ",n.a.createElement("br",null),n.a.createElement("span",{className:"Greets"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Have a Nice Day!!"))))),n.a.createElement("div",{className:"SkillBox_About SkillBox"},n.a.createElement("div",{className:"skillset progress-10"},n.a.createElement("div",{className:"overlay"},"95%"),n.a.createElement("div",{className:"SkillName"},"HTML")),n.a.createElement("div",{className:"skillset progress-11"},n.a.createElement("div",{className:"overlay"},"92%"),n.a.createElement("div",{className:"SkillName"},"CSS")),n.a.createElement("div",{className:"skillset progress-12"},n.a.createElement("div",{className:"overlay"},"60%"),n.a.createElement("div",{className:"SkillName"},"JS")),n.a.createElement("div",{className:"skillset progress-13"},n.a.createElement("div",{className:"overlay"},"75%"),n.a.createElement("div",{className:"SkillName"},"JQUERY")),n.a.createElement("div",{className:"skillset progress-14"},n.a.createElement("div",{className:"overlay"},"80%"),n.a.createElement("div",{className:"SkillName"},"C")),n.a.createElement("div",{className:"skillset progress-15"},n.a.createElement("div",{className:"overlay"},"75%"),n.a.createElement("div",{className:"SkillName"},"C++")),n.a.createElement("div",{className:"skillset progress-16"},n.a.createElement("div",{className:"overlay"},"64%"),n.a.createElement("div",{className:"SkillName"},"REACTJS")),n.a.createElement("div",{className:"skillset progress-17"},n.a.createElement("div",{className:"overlay"},"50%"),n.a.createElement("div",{className:"SkillName"},"NEXTJS")),n.a.createElement("div",{className:"skillset progress-18"},n.a.createElement("div",{className:"overlay"},"50%"),n.a.createElement("div",{className:"SkillName"},"PHP"))),n.a.createElement("div",{className:"Resume_container"},n.a.createElement("button",{className:"two_btn"},"My Resume"),n.a.createElement("button",{className:"two_btn"}," Linked In Profile")),n.a.createElement(b,null)))},k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("section",{className:"project"},n.a.createElement("div",{className:"projectBox projectBox_section"},n.a.createElement("div",{className:"Card1"},n.a.createElement("div",{className:"Circle1"},n.a.createElement("div",{className:"CircleIn NextJs"})),n.a.createElement("div",{className:"Project_Card Cd1"},n.a.createElement("div",{className:"logo_poster_container"},n.a.createElement("div",{className:"logo_poster Ecommerce"}),n.a.createElement("h1",null,"#E-commerce"),n.a.createElement("p",null,"(Comming Soon)")),n.a.createElement("div",{className:"card_cover"},n.a.createElement("span",{className:"trangle3"}),n.a.createElement("span",{className:"Details "},"Details"),n.a.createElement("div",{className:"text_container"},n.a.createElement("div",{className:"text_cols1"},n.a.createElement("h3",null,"Tech Used: "),n.a.createElement("h3",null,"Hosting: "),n.a.createElement("h3",null,"Website Type:"),n.a.createElement("h3",null,"Complated In:"),n.a.createElement("h3",null,"API:")),n.a.createElement("div",{className:"text_cols2"},n.a.createElement("p",null,"NextJs"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"),n.a.createElement("p",null,"-"))),n.a.createElement("div",{className:"report_container"},n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head SEO"},"SEO"),n.a.createElement("h4",{className:"Persent"},"-")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Best"},"Best ",n.a.createElement("br",null)," Practices"),n.a.createElement("h4",{className:"Persent Persent1"},"-")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Accessibilty"},"Accessibilty "),n.a.createElement("h4",{className:"Persent"},"-")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Performance"}," Performance"),n.a.createElement("h4",{className:"Persent Persent1"},"-"))),n.a.createElement("button",{type:"button",className:"Source_btn"},"Source Code(Comming Soon)")))),n.a.createElement("div",{className:"Card2"},n.a.createElement("div",{className:"Circle2"},n.a.createElement("div",{className:"CircleIn ReactJs"})),n.a.createElement("div",{className:"Project_Card Cd2"},n.a.createElement("div",{className:"logo_poster_container"},n.a.createElement("div",{className:"logo_poster Portfolio"}),n.a.createElement("h1",null,"#Portfolio")),n.a.createElement("div",{className:"card_cover"},n.a.createElement("span",{className:"trangle3"}),n.a.createElement("span",{className:"Details "},"Details"),n.a.createElement("div",{className:"text_container"},n.a.createElement("div",{className:"text_cols1"},n.a.createElement("h3",null,"Tech Used: "),n.a.createElement("h3",null,"Hosting: "),n.a.createElement("h3",null,"Website Type:"),n.a.createElement("h3",null,"Complated In:"),n.a.createElement("h3",null,"API:")),n.a.createElement("div",{className:"text_cols2"},n.a.createElement("p",null," React Js"),n.a.createElement("p",null,"Netlify.com"),n.a.createElement("p",null,"Static"),n.a.createElement("p",null,"12days"),n.a.createElement("p",null,"Formspree"))),n.a.createElement("div",{className:"report_container"},n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head SEO"},"SEO"),n.a.createElement("h4",{className:"Persent"},"100%")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Best"},"Best ",n.a.createElement("br",null)," Practices"),n.a.createElement("h4",{className:"Persent Persent1"},"87%")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Accessibilty"},"Accessibilty "),n.a.createElement("h4",{className:"Persent"},"83%")),n.a.createElement("div",{className:"Box"},n.a.createElement("p",{className:"Report_head Performance"}," Performance"),n.a.createElement("h4",{className:"Persent Persent1"},"53%"))),n.a.createElement("button",{type:"button",className:"Source_btn"},"Source Code")))),n.a.createElement("div",{className:"Card3"},n.a.createElement("div",{className:"Circle3"},n.a.createElement("div",{className:"CircleIn CPP"},n.a.createElement(u.a,{className:"cpp_logo"}))),n.a.createElement("div",{className:"Project_Card Cd3"},n.a.createElement("div",{className:"logo_poster_container"},n.a.createElement("div",{className:"logo_poster Bank"}),n.a.createElement("h1",null,"#Bank Managment System")),n.a.createElement("div",{className:"card_cover"},n.a.createElement("span",{className:"trangle3"}),n.a.createElement("span",{className:"Details "},"Details"),n.a.createElement("div",{className:"text_container tc3"},n.a.createElement("div",{className:"text_cols1 tc3"},n.a.createElement("h3",null,"Tech Used: "),n.a.createElement("h3",null,"DS Used: "),n.a.createElement("h3",null,"Name :"),n.a.createElement("h3",null,"Complated In:"),n.a.createElement("h3",null,"GitHub:")),n.a.createElement("div",{className:"text_cols2 tc3"},n.a.createElement("p",null,"C++"),n.a.createElement("p",null,"No"),n.a.createElement("p",null,"BMS "),n.a.createElement("p",null,"4 days"),n.a.createElement("p",null,"Yes"))),n.a.createElement("button",{type:"button",className:"Source_btn"},"Source Code"))))),n.a.createElement(b,null)))},f=function(){var e=Object(l.useState)([{id:1,img:"../images/sketches/img1.jpg"},{id:2,img:"/images/sketches/img2.jpg"},{id:3,img:"/images/sketches/img3.jpg"},{id:4,img:"/images/sketches/img4.jpg"},{id:5,img:"/images/sketches/img5.jpg"},{id:6,img:"/images/sketches/img6.jpg"}]),a=Object(i.a)(e,2),t=a[0];a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("section",{className:"_Sketch_section"},n.a.createElement("div",{className:"_Sketch"},t.map(function(e,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Sketch_container"},n.a.createElement("div",{className:"slide2_Sketches slide_2 "},n.a.createElement("img",{src:"/images/sketches/img".concat(a+1,".jpg"),alt:"images",className:"Slide mobile"}))))})),n.a.createElement(b,null)))},S=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("section",{className:" section_Contect",id:"Contact"},n.a.createElement("div",{className:"Contact_container"},n.a.createElement("div",{className:"Contact_flex_container","data-aos":"fade-left"},n.a.createElement("form",{action:"https://formspree.io/f/xpznagoe",method:"POST"},n.a.createElement("div",{className:"form_container"},n.a.createElement("div",{className:"form_container_inner"},n.a.createElement("div",{className:" feild_container "},n.a.createElement("legend",null," Name*"),n.a.createElement("label",{htmlFor:"Name",className:"label",min:"5"},n.a.createElement("input",{required:!0,type:"text",name:"Name",id:"Name",autocomplete:"off",className:"input_width"}))),n.a.createElement("div",{className:"Email feild_container "},n.a.createElement("legend",null," E-mail*"),n.a.createElement("label",{htmlFor:"E-mail",className:"label"},n.a.createElement("input",{required:!0,type:"email",name:"E-mail",id:"E-mail",autoComplete:"off",className:"input_width"}))),n.a.createElement("div",{className:"Subject feild_container "},n.a.createElement("legend",null,"Subject *"),n.a.createElement("label",{htmlFor:"Subject",className:"label"},n.a.createElement("input",{required:!0,type:"Subject",name:"Subject",id:"Subject",autoComplete:"off",className:"input_width"}))),n.a.createElement("div",{className:"Massage feild_container "},n.a.createElement("legend",null," Massage*"),n.a.createElement("label",{htmlFor:"Subject",className:"label"},n.a.createElement("textarea",{title:"Massage",name:"Massage",id:"Massage",autoComplete:"off",className:"input_width"}))),n.a.createElement("button",{type:"submit",id:"btn"},"Send"))))),n.a.createElement("div",{className:"Contact_flex_inner_container","data-aos":"fade-right"},n.a.createElement("div",{className:"Head_container"},n.a.createElement("h2",{id:"Feel"},"Feel Free To Contact"),n.a.createElement("h6",{className:"para"},"Hello Everyone! Have a great day : I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You.")),n.a.createElement("div",{className:"col_container"},n.a.createElement("div",{className:"address_container"},n.a.createElement("div",{className:"contain map"},n.a.createElement("img",{src:"map.png",alt:"",className:"MEW"})),n.a.createElement("div",{className:"contain email"},n.a.createElement("img",{src:"email.png",alt:"",className:"MEW"})),n.a.createElement("div",{className:"contain web"},n.a.createElement("img",{src:"globe.png",alt:"",className:"MEW"}))),n.a.createElement("div",{className:"main_container3"},n.a.createElement("div",{className:"address container2"},n.a.createElement("h3",null,"Vatva,Ahemedabad")),n.a.createElement("div",{className:"container2 email"},n.a.createElement("h3",null,"Yashsoni48678@gmail.com")),n.a.createElement("div",{className:"container2 web"},n.a.createElement("h3",null,"www.Yashsoni.net.in")))))),n.a.createElement("div",{className:"Thanks"},"Thanks for Visiting!!"),n.a.createElement("footer",null,n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"Copy"},n.a.createElement("span",{className:"cright"},"\xa9"),"Yash Soni 2022"),n.a.createElement("div",{className:"social"},n.a.createElement(o.e,{className:"hover"}),n.a.createElement(o.d,{className:"hover"}),n.a.createElement(o.b,{className:"hover"}),n.a.createElement(o.c,{className:"hover"}),n.a.createElement(o.f,{className:"hover"}))))))};var y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(r.c,null,n.a.createElement(r.a,{path:"/",element:n.a.createElement(g,null)}),n.a.createElement(r.a,{path:"/About",element:n.a.createElement(_,null)}),n.a.createElement(r.a,{path:"/Projects",element:n.a.createElement(k,null)}),n.a.createElement(r.a,{path:"/Sketches",element:n.a.createElement(f,null)}),n.a.createElement(r.a,{path:"/Contact",element:n.a.createElement(S,null)}))))},C=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,30)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),l(e),n(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null))),C()}},[[14,3,2]]]);
//# sourceMappingURL=main.66fc532f.chunk.js.map