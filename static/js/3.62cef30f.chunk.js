(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[3],{297:function(e,t,s){e.exports={box:"ProfileDataForm_box__s7lrX",error:"ProfileDataForm_error__3t56O",contactsBox:"ProfileDataForm_contactsBox__3MSlF"}},301:function(e,t,s){},302:function(e,t,s){e.exports={content__img:"ProfileInfo_content__img__aWXvy",ava__img:"ProfileInfo_ava__img__1sQx7",content__wrapper:"ProfileInfo_content__wrapper__2gTAm",name:"ProfileInfo_name__1qIRn",info:"ProfileInfo_info__fZvyd",social:"ProfileInfo_social__e7nuA",status:"ProfileInfo_status__2eype",box:"ProfileInfo_box__1QgAN",contacts:"ProfileInfo_contacts__3L6pf"}},303:function(e,t,s){e.exports={list:"SocialLink_list__3O1cW",img:"SocialLink_img__2Z9Jr"}},304:function(e,t,s){e.exports={wrapper:"Analitics_wrapper__1B3_Q",container:"Analitics_container__29NpE",title:"Analitics_title__ppOZh",text:"Analitics_text__35dyr"}},305:function(e,t,s){e.exports={box:"ProfileStatus_box__w8n5u",status:"ProfileStatus_status__NrTLQ"}},306:function(e,t,s){e.exports={wrap:"MyPosts_wrap__3ZM4A",add__btn:"MyPosts_add__btn__iAUP0",title:"MyPosts_title__1U0lt",post:"MyPosts_post__1ITUW",ava:"MyPosts_ava__Imwzp"}},307:function(e,t,s){e.exports={wrap:"Post_wrap__2paOF",img:"Post_img__2IStc",text:"Post_text__rixVh",like__btn:"Post_like__btn__3xVpJ",like:"Post_like__2JdFf"}},308:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s(39),i=s(40),n=s(44),o=s(43),r=s(0),l=s(1),j=s.n(l),b=s(301),d=s.n(b),u=s(103),m=s(302),p=s.n(m),h=s(303),O=s.n(h),x=function(){return Object(r.jsx)("div",{className:O.a.wrapper,children:Object(r.jsxs)("ul",{className:O.a.list,children:[Object(r.jsx)("li",{className:O.a.item,children:Object(r.jsx)("a",{className:O.a.link,children:Object(r.jsx)("img",{className:O.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/08.png"})})}),Object(r.jsx)("li",{className:O.a.item,children:Object(r.jsx)("a",{className:O.a.link,children:Object(r.jsx)("img",{className:O.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/10.png"})})}),Object(r.jsx)("li",{className:O.a.item,children:Object(r.jsx)("a",{className:O.a.link,children:Object(r.jsx)("img",{className:O.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/13.png"})})}),Object(r.jsx)("li",{className:O.a.item,children:Object(r.jsx)("a",{className:O.a.link,children:Object(r.jsx)("img",{className:O.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/12.png"})})})]})})},f=s(304),_=s.n(f),g=function(){return Object(r.jsxs)("div",{className:_.a.wrapper,children:[Object(r.jsxs)("div",{className:_.a.container,children:[Object(r.jsx)("p",{className:_.a.title,children:"Posts"}),Object(r.jsx)("p",{className:_.a.text,children:"690"})]}),Object(r.jsxs)("div",{className:_.a.container,children:[Object(r.jsx)("p",{className:_.a.title,children:"Followers"}),Object(r.jsx)("p",{className:_.a.text,children:"206"})]}),Object(r.jsxs)("div",{className:_.a.container,children:[Object(r.jsx)("p",{className:_.a.title,children:"Following"}),Object(r.jsx)("p",{className:_.a.text,children:"100"})]})]})},v=s(42),N=s(134),P=s(305),k=s.n(P),w=function(e){var t=Object(l.useState)(e.status),s=Object(u.a)(t,2),a=s[0],c=s[1],i=Object(l.useState)(!1),n=Object(u.a)(i,2),o=n[0],j=n[1];Object(l.useEffect)((function(){c(e.status)}),[e.status]);return Object(r.jsxs)("div",{className:k.a.box,children:[!o&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:k.a.status,onDoubleClick:function(){j(!0)},children:e.status||"No status"})}),o&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,value:a,onBlur:function(){j(!1),e.updateStatus(a)}})})]})},S=s(26),y=s(136),A=s(297),I=s.n(A),F=Object(y.a)({form:"edit-profile"})((function(e){var t=e.profile,s=e.handleSubmit,a=e.error;return Object(r.jsxs)("form",{onSubmit:s,className:I.a.box,children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"save"})}),a&&Object(r.jsx)("div",{className:I.a.error,children:a}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Full name"}),": ",Object(S.c)("Full name","fullName",[],S.a)]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Looking for a job"}),": ",Object(S.c)("","lookingForAJob",[],S.a,{type:"checkbox"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"My professional skills"}),":",Object(S.c)("My professional skills","lookingForAJobDescription",[],S.b)]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"About me"}),":",Object(S.c)("About me","aboutMe",[],S.b)]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:I.a.contacts,children:Object(r.jsx)("b",{children:"Contacts:"})}),Object.keys(t.contacts).map((function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("b",{children:[e,": ",Object(S.c)(e,"contacts."+e,[],S.a)]})},e)}))]})]})})),D=function(e){var t=e.profile,s=e.isOwner,a=e.goToEditMode;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[s&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:a,children:"edit"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Full name"}),": ",t.fullName]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob&&Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:p.a.contacts,children:Object(r.jsx)("b",{children:"Contacts:"})})," ",Object.keys(t.contacts).map((function(e){return Object(r.jsx)(M,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})})},M=function(e){var t=e.contactTitle,s=e.contactValue;return Object(r.jsxs)("div",{className:I.a.contactsBox,children:[Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:t})}),Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:s})})]})},C=function(e){var t=e.isOwner,s=e.profile,a=e.savePhoto,c=e.status,i=e.updateStatus,n=e.saveProfile,o=Object(l.useState)(!1),j=Object(u.a)(o,2),b=j[0],d=j[1];if(!s)return Object(r.jsx)(v.a,{});return Object(r.jsxs)("div",{className:p.a.content__wrapper,children:[Object(r.jsx)("img",{className:p.a.content__img,src:"https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg",alt:"bg"}),Object(r.jsxs)("div",{className:p.a.info,children:[Object(r.jsx)("img",{className:p.a.ava__img,src:s.photos.small||N.a}),Object(r.jsx)(w,{status:c,updateStatus:i}),Object(r.jsx)("p",{className:p.a.name,children:s.fullName}),Object(r.jsx)("p",{className:p.a.status,children:s.lookingForAJobDescription}),Object(r.jsx)("div",{className:p.a.editPhoto,children:t&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("input",{type:"file",className:p.a.uploadInput,onChange:function(e){e.target.files&&e.target.files.length&&a(e.target.files[0])}})})})]}),Object(r.jsx)("div",{className:p.a.editMode,children:b?Object(r.jsx)(F,{initialValues:s,profile:s,onSubmit:function(e){console.log(e),n(e).then((function(){d(!1)}))}}):Object(r.jsx)(D,{goToEditMode:function(){d(!0)},profile:s,isOwner:t})}),Object(r.jsxs)("div",{className:p.a.social,children:[Object(r.jsx)(x,{}),Object(r.jsx)(g,{})]})]})},J=s(102),T=s(306),U=s.n(T),q=s(307),L=s.n(q),B=function(e){return Object(r.jsxs)("div",{className:L.a.wrap,children:[Object(r.jsx)("img",{className:L.a.img,src:e.image}),Object(r.jsx)("div",{className:L.a.text,children:e.message}),Object(r.jsx)("button",{className:L.a.like__btn,children:"\u2764"}),Object(r.jsx)("p",{className:L.a.like,children:e.likeCount})]})},V=s(95),E=s(70),Q=Object(E.a)(100),W=j.a.memo((function(e){var t=e.postsData.map((function(e){return Object(r.jsx)(B,{message:e.message,likeCount:e.likeCount,image:e.image},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:U.a.post,children:[Object(r.jsx)("p",{className:U.a.title,children:"Create Post"}),Object(r.jsx)(Z,{onSubmit:function(t){e.addNewPost(t.newPostContent)}})]}),Object(r.jsx)("div",{children:t})]})})),Z=Object(y.a)({form:"newPostContent"})((function(e){return Object(r.jsxs)("form",{className:U.a.wrap,onSubmit:e.handleSubmit,children:[Object(r.jsx)("img",{className:U.a.ava,src:"https://iqonic.design/themes/socialv/html/images/user/1.jpg"}),Object(r.jsx)(V.a,{component:S.b,name:"newPostContent",placeholder:"Write something here...",validate:[E.b,Q]}),Object(r.jsx)("button",{className:U.a.add__btn,children:"Add post"})]})})),z=W,X=s(12),R=Object(X.b)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{addNewPost:function(t){e(Object(J.a)(t))}}}))(z),Y=function(e){return Object(r.jsxs)("div",{className:d.a.profile,children:[Object(r.jsx)(C,{saveProfile:e.saveProfile,profile:e.profile,updateStatus:e.updateStatus,status:e.status,isOwner:e.isOwner,savePhoto:e.savePhoto}),Object(r.jsx)(R,{})]})},G=s(10),H=s(101),K=s(9),$=function(e){Object(n.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(r.jsx)(Y,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,isOwner:!this.props.match.params.userID,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(j.a.Component);t.default=Object(K.d)(Object(X.b)((function(e){return console.log("mapStateToProps render from ProfileContainer"),{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserID:e.auth.userID,isAuth:e.auth.isAuth}}),{getUserProfile:J.c,getStatus:J.b,updateStatus:J.g,savePhoto:J.e,saveProfile:J.f}),G.g,H.a)($)}}]);
//# sourceMappingURL=3.62cef30f.chunk.js.map