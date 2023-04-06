(this.webpackJsonpreact_step_form=this.webpackJsonpreact_step_form||[]).push([[0],{54:function(e,a,t){e.exports=t(65)},59:function(e,a,t){},60:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(6),c=t.n(r),o=(t(59),t(43)),i=t(12),m=t(13),s=t(16),u=t(15),d=t(91),p=t(88),E=t(85),h=t(89),v=(t(60),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).continue=function(a){a.preventDefault(),e.props.nextStep()},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange;return n.a.createElement(E.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{open:!0},n.a.createElement(p.a,{title:"Enter User Details"}),n.a.createElement("div",{className:"basic-details"},n.a.createElement("input",{type:"text",className:"fname inp-form-value",placeholder:"Enter Your First Name",label:"First Name",onChange:t("firstName"),defaultValue:a.firstName}),n.a.createElement("input",{type:"text",className:"mname inp-form-value",placeholder:"Enter Your Middle Name",label:"Middle Name",onChange:t("middleName"),defaultValue:a.middleName})),n.a.createElement("div",{className:"basic-details"},n.a.createElement("input",{type:"text",className:"lname inp-form-value",placeholder:"Enter Your Last Name",label:"Last Name",onChange:t("lastName"),defaultValue:a.lastName}),n.a.createElement("input",{type:"number",className:"phone inp-form-value",maxlength:"10",placeholder:"Mobile No",label:"Mobile No",onChange:t("mobileNo"),defaultValue:a.mobileNo})),n.a.createElement("div",{className:"basic-details"},n.a.createElement("input",{type:"email",className:"email inp-form-value",placeholder:"Enter Your Email",label:"Email",onChange:t("email"),defaultValue:a.email}),n.a.createElement("input",{type:"date",className:"inp-form-value",label:"Date Of Birth",onChange:t("dob"),defaultValue:a.dob})),n.a.createElement("div",{className:"basic-details"},n.a.createElement("input",{type:"Age",className:"age inp-form-value",placeholder:"Age",label:"Age",onChange:t("age"),defaultValue:a.age}),n.a.createElement("select",{name:"blood",placeholder:"Blood Group",className:"bgroup inp-form-value",label:"Blood Group",onChange:t("bloodGroup"),defaultValue:a.bloodGroup},n.a.createElement("option",{value:"",disabled:!0,selected:!0},"Blood Group"),n.a.createElement("option",{value:"A+"},"A+"),n.a.createElement("option",{value:"B+"},"B+"),n.a.createElement("option",{value:"O+"},"O+"),n.a.createElement("option",{value:"O-"},"O-"),n.a.createElement("option",{value:"AB+"},"AB+"),n.a.createElement("option",{value:"AB-"},"AB-"))),n.a.createElement("div",{className:"basic-details"},n.a.createElement("input",{type:"number",className:"height inp-form-value",placeholder:"Height",onChange:t("height"),defaultValue:a.height}),n.a.createElement("input",{type:"number",className:"weight inp-form-value",placeholder:"Weight",onChange:t("weight"),defaultValue:a.weight})),n.a.createElement("div",{className:"basic-details gender-marital-section"},n.a.createElement("div",{className:"gender-section"},n.a.createElement("p",null,"Gender"),n.a.createElement("input",{value:"Male",name:"gender",type:"radio",onChange:t("gender"),defaultValue:a.gender}),n.a.createElement("label",{className:"gender-label"},"Male"),n.a.createElement("input",{value:"Female",name:"gender",type:"radio",onChange:t("gender"),defaultValue:a.gender}),n.a.createElement("label",{className:"gender-label"},"Female")),n.a.createElement("div",{className:"marital-status"},n.a.createElement("p",null,"Martial Status"),n.a.createElement("input",{value:"Single",name:"status",type:"radio",onChange:t("maritalStatus"),defaultValue:a.maritalStatus}),n.a.createElement("label",{className:"gender-label"},"Single"),n.a.createElement("input",{value:"Married",name:"status",type:"radio",onChange:t("maritalStatus"),defaultValue:a.maritalStatus}),n.a.createElement("label",{className:"gender-label"},"Married"),n.a.createElement("input",{value:"Divorced",name:"status",type:"radio",onChange:t("maritalStatus"),defaultValue:a.maritalStatus}),n.a.createElement("label",{className:"gender-label"},"Divorced"),n.a.createElement("input",{value:"Widowed",name:"status",type:"radio",onChange:t("maritalStatus"),defaultValue:a.maritalStatus}),n.a.createElement("label",{className:"gender-label"},"Widowed"))),n.a.createElement("br",null),n.a.createElement("div",{className:"button-section"},n.a.createElement("button",{type:"button",className:"button back",disabled:!0},"Back"),n.a.createElement(h.a,{className:"next button",type:"submit",color:"primary",variant:"contained",onClick:this.continue},"NEXT")))))}}]),t}(l.Component)),b=(t(63),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange;return n.a.createElement("div",{className:"form-contianer"},n.a.createElement(E.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{open:!0,fullWidth:!0,maxWidth:"sm"},n.a.createElement(p.a,{title:"Enter Personal Details"}),n.a.createElement("div",{className:"address-details"},n.a.createElement("input",{type:"text",className:"fname add-form-value",placeholder:"Address Line 1",label:"Address 1",onChange:t("addOne"),defaultValue:a.addOne,required:!0}),n.a.createElement("input",{type:"text",className:"mname add-form-value",placeholder:"Address Line 2",required:!0,label:"Address 1",onChange:t("addTwo"),defaultValue:a.addTwo})),n.a.createElement("div",{className:"address-details"},n.a.createElement("select",{name:"city",placeholder:"City",className:"city",label:"Address 1",onChange:t("city"),defaultValue:a.city},n.a.createElement("option",{value:"",disabled:!0,selected:!0},"City"),n.a.createElement("option",{value:"x"},"X"),n.a.createElement("option",{value:"y"},"Y"),n.a.createElement("option",{value:"z"},"Z"),n.a.createElement("option",{value:"a"},"A")),n.a.createElement("select",{name:"state",placeholder:"State",className:"state",label:"Address 1",onChange:t("state"),defaultValue:a.state},n.a.createElement("option",{value:"",disabled:!0,selected:!0},"State"),n.a.createElement("option",{value:"up"},"UP"),n.a.createElement("option",{value:"uk"},"UK"))),n.a.createElement("div",{className:"address-details"},n.a.createElement("select",{name:"country",placeholder:"Counrty",className:"country",label:"Country",onChange:t("country"),defaultValue:a.country},n.a.createElement("option",{value:"",disabled:!0,selected:!0},"Counrty"),n.a.createElement("option",{value:"india"},"India")),n.a.createElement("input",{type:"number",placeholder:"Pin Code",className:"pcode add-form-value",required:!0,label:"Address 1",onChange:t("pinCode"),defaultValue:a.pinCode})),n.a.createElement("div",{className:"button-section"},n.a.createElement(h.a,{className:"back-to-home",color:"secondary",variant:"contained",onClick:this.back},"Back"),n.a.createElement(h.a,{className:"next-thank-you",color:"primary",variant:"contained",onClick:this.continue},"NEXT"))))))}}]),t}(l.Component)),f=t(90),y=t(92),g=t(93),N=(t(64),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.values,a=e.firstName,t=e.middleName,l=e.lastName,r=e.email,c=e.mobileNo,o=e.age,i=e.bloodGroup,m=e.dob,s=e.height,u=e.weight,v=e.gender,b=e.maritalStatus,N=e.addOne,C=e.addTwo,S=e.city,O=e.state,w=e.country,k=e.pinCode;return n.a.createElement(E.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{open:!0,fullWidth:!0,maxWidth:"sm"},n.a.createElement("h1",{className:"saved-data"},"Data saved successfully"),n.a.createElement(p.a,{title:"Confirm User Data"}),n.a.createElement(f.a,null,n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"First Name",secondary:a})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Middle Name",secondary:t})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Last Name",secondary:l})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Email",secondary:r})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Mobile No",secondary:c})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Date Of Birth",secondary:m})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Age",secondary:o})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Blood Group",secondary:i})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Height",secondary:s})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Weight",secondary:u})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Gender",secondary:v})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Marital Status",secondary:b})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Address Line 1",secondary:N})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Address Line 2",secondary:C})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"City",secondary:S})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"State",secondary:O})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Country",secondary:w})),n.a.createElement("hr",null),n.a.createElement(y.a,null,n.a.createElement(g.a,{primary:"Bio",secondary:k})),n.a.createElement("hr",null)),n.a.createElement("br",null),n.a.createElement("div",{className:"button-section"},n.a.createElement(h.a,{className:"back-to-home",color:"secondary",variant:"contained",onClick:this.back},"Back"),n.a.createElement(h.a,{className:"next-thank-you",color:"primary",variant:"contained",onClick:this.continue},"NEXT")))))}}]),t}(l.Component)),C=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(E.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{open:!0,fullWidth:!0,maxWidth:"sm"},n.a.createElement(p.a,{title:"Success"}),n.a.createElement("h1",null,"Thank You For Your Submission"),n.a.createElement("p",null,"You will get an email with further instructions."))))}}]),t}(l.Component),S=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={step:1,firstName:"",lastName:"",email:"",mobileno:"",occupation:"",city:"",bio:""},e.nextStep=function(){var a=e.state.step;e.setState({step:a+1})},e.prevStep=function(){var a=e.state.step;e.setState({step:a-1})},e.handleChange=function(a){return function(t){e.setState(Object(o.a)({},a,t.target.value))}},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.step,a=this.state,t=a.firstName,l=a.middlename,r=a.lastName,c=a.email,o=a.mobileNo,i=a.dob,m=a.age,s=a.bloodGroup,u={firstName:t,middlename:l,lastName:r,email:c,mobileNo:o,dob:i,age:m,height:a.height,weight:a.weight,bloodGroup:s,gender:a.gender,maritalStatus:a.maritalStatus,addOne:a.addOne,addTwo:a.addTwo,city:a.city,state:a.state,pinCode:a.pinCode};switch(e){case 1:return n.a.createElement(v,{nextStep:this.nextStep,handleChange:this.handleChange,values:u});case 2:return n.a.createElement(b,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:u});case 3:return n.a.createElement(N,{nextStep:this.nextStep,prevStep:this.prevStep,values:u});case 4:return n.a.createElement(C,null);default:console.log("This is a multi-step form built with React.")}}}]),t}(l.Component),O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.d4552a29.chunk.js.map