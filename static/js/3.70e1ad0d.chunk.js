(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[3],{303:function(e,t,s){e.exports={box:"ProfileDataForm_box__s7lrX",error:"ProfileDataForm_error__3t56O",contactsBox:"ProfileDataForm_contactsBox__3MSlF"}},307:function(e,t,s){},308:function(e,t,s){e.exports={content__img:"ProfileInfo_content__img__aWXvy",ava__img:"ProfileInfo_ava__img__1sQx7",content__wrapper:"ProfileInfo_content__wrapper__2gTAm",name:"ProfileInfo_name__1qIRn",info:"ProfileInfo_info__fZvyd",social:"ProfileInfo_social__e7nuA",status:"ProfileInfo_status__2eype",box:"ProfileInfo_box__1QgAN",contacts:"ProfileInfo_contacts__3L6pf"}},309:function(e,t,s){e.exports={list:"SocialLink_list__3O1cW",img:"SocialLink_img__2Z9Jr"}},310:function(e,t,s){e.exports={wrapper:"Analitics_wrapper__1B3_Q",container:"Analitics_container__29NpE",title:"Analitics_title__ppOZh",text:"Analitics_text__35dyr"}},311:function(e,t,s){e.exports={box:"ProfileStatus_box__w8n5u",status:"ProfileStatus_status__NrTLQ"}},312:function(e,t,s){e.exports={wrap:"MyPosts_wrap__3ZM4A",add__btn:"MyPosts_add__btn__iAUP0",title:"MyPosts_title__1U0lt",post:"MyPosts_post__1ITUW",ava:"MyPosts_ava__Imwzp"}},313:function(e,t,s){e.exports={wrap:"Post_wrap__2paOF",img:"Post_img__2IStc",text:"Post_text__rixVh",like__btn:"Post_like__btn__3xVpJ",like:"Post_like__2JdFf"}},314:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s(0),i=s(39),n=s(40),o=s(43),r=s(42),l=s(1),j=s.n(l),b=s(307),d=s.n(b),u=s(102),m=s(308),p=s.n(m),h=s(309),O=s.n(h),x=function(){return Object(c.jsx)("div",{className:O.a.wrapper,children:Object(c.jsxs)("ul",{className:O.a.list,children:[Object(c.jsx)("li",{className:O.a.item,children:Object(c.jsx)("a",{className:O.a.link,children:Object(c.jsx)("img",{className:O.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/08.png"})})}),Object(c.jsx)("li",{className:O.a.item,children:Object(c.jsx)("a",{className:O.a.link,children:Object(c.jsx)("img",{className:O.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/10.png"})})}),Object(c.jsx)("li",{className:O.a.item,children:Object(c.jsx)("a",{className:O.a.link,children:Object(c.jsx)("img",{className:O.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/13.png"})})}),Object(c.jsx)("li",{className:O.a.item,children:Object(c.jsx)("a",{className:O.a.link,children:Object(c.jsx)("img",{className:O.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/12.png"})})})]})})},f=s(310),_=s.n(f),g=function(){return Object(c.jsxs)("div",{className:_.a.wrapper,children:[Object(c.jsxs)("div",{className:_.a.container,children:[Object(c.jsx)("p",{className:_.a.title,children:"Posts"}),Object(c.jsx)("p",{className:_.a.text,children:"690"})]}),Object(c.jsxs)("div",{className:_.a.container,children:[Object(c.jsx)("p",{className:_.a.title,children:"Followers"}),Object(c.jsx)("p",{className:_.a.text,children:"206"})]}),Object(c.jsxs)("div",{className:_.a.container,children:[Object(c.jsx)("p",{className:_.a.title,children:"Following"}),Object(c.jsx)("p",{className:_.a.text,children:"100"})]})]})},v=s(41),N=s(112),P=s(311),k=s.n(P),w=function(e){var t=Object(l.useState)(e.status),s=Object(u.a)(t,2),a=s[0],i=s[1],n=Object(l.useState)(!1),o=Object(u.a)(n,2),r=o[0],j=o[1];Object(l.useEffect)((function(){i(e.status)}),[e.status]);return Object(c.jsxs)("div",{className:k.a.box,children:[!r&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:k.a.status,onDoubleClick:function(){j(!0)},children:e.status||"No status"})}),r&&Object(c.jsx)("div",{children:Object(c.jsx)("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,value:a,onBlur:function(){j(!1),e.updateStatus(a)}})})]})},S=s(26),y=s(135),A=s(303),I=s.n(A),F=Object(y.a)({form:"edit-profile"})((function(e){var t=e.profile,s=e.handleSubmit,a=e.error;return Object(c.jsxs)("form",{onSubmit:s,className:I.a.box,children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"save"})}),a&&Object(c.jsx)("div",{className:I.a.error,children:a}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Full name"}),": ",Object(S.c)("Full name","fullName",[],S.a)]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Looking for a job"}),": ",Object(S.c)("","lookingForAJob",[],S.a,{type:"checkbox"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"My professional skills"}),":",Object(S.c)("My professional skills","lookingForAJobDescription",[],S.b)]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"About me"}),":",Object(S.c)("About me","aboutMe",[],S.b)]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:I.a.contacts,children:Object(c.jsx)("b",{children:"Contacts:"})}),Object.keys(t.contacts).map((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("b",{children:[e,": ",Object(S.c)(e,"contacts."+e,[],S.a)]})},e)}))]})]})})),D=function(e){var t=e.profile,s=e.isOwner,a=e.goToEditMode;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[s&&Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:a,children:"edit"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Full name"}),": ",t.fullName]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob&&Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:p.a.contacts,children:Object(c.jsx)("b",{children:"Contacts:"})})," ",Object.keys(t.contacts).map((function(e){return Object(c.jsx)(M,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})})},M=function(e){var t=e.contactTitle,s=e.contactValue;return Object(c.jsxs)("div",{className:I.a.contactsBox,children:[Object(c.jsx)("span",{children:Object(c.jsx)("b",{children:t})}),Object(c.jsx)("span",{children:Object(c.jsx)("b",{children:s})})]})},C=function(e){var t=e.isOwner,s=e.profile,a=e.savePhoto,i=e.status,n=e.updateStatus,o=e.saveProfile,r=Object(l.useState)(!1),j=Object(u.a)(r,2),b=j[0],d=j[1];if(!s)return Object(c.jsx)(v.a,{});return Object(c.jsxs)("div",{className:p.a.content__wrapper,children:[Object(c.jsx)("img",{className:p.a.content__img,src:"https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg",alt:"bg"}),Object(c.jsxs)("div",{className:p.a.info,children:[Object(c.jsx)("img",{className:p.a.ava__img,src:s.photos.small||N.a}),Object(c.jsx)(w,{status:i,updateStatus:n}),Object(c.jsx)("p",{className:p.a.name,children:s.fullName}),Object(c.jsx)("p",{className:p.a.status,children:s.lookingForAJobDescription}),Object(c.jsx)("div",{className:p.a.editPhoto,children:t&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("input",{type:"file",className:p.a.uploadInput,onChange:function(e){e.target.files&&e.target.files.length&&a(e.target.files[0])}})})})]}),Object(c.jsx)("div",{className:p.a.editMode,children:b?Object(c.jsx)(F,{initialValues:s,profile:s,onSubmit:function(e){console.log(e),o(e).then((function(){d(!1)}))}}):Object(c.jsx)(D,{goToEditMode:function(){d(!0)},profile:s,isOwner:t})}),Object(c.jsxs)("div",{className:p.a.social,children:[Object(c.jsx)(x,{}),Object(c.jsx)(g,{})]})]})},J=s(101),T=s(312),U=s.n(T),q=s(313),L=s.n(q),B=function(e){return Object(c.jsxs)("div",{className:L.a.wrap,children:[Object(c.jsx)("img",{className:L.a.img,src:e.image}),Object(c.jsx)("div",{className:L.a.text,children:e.message}),Object(c.jsx)("button",{className:L.a.like__btn,children:"\u2764"}),Object(c.jsx)("p",{className:L.a.like,children:e.likeCount})]})},V=s(94),E=s(69),Q=Object(E.a)(100),W=j.a.memo((function(e){var t=e.postsData.map((function(e){return Object(c.jsx)(B,{message:e.message,likeCount:e.likeCount,image:e.image},e.id)}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:U.a.post,children:[Object(c.jsx)("p",{className:U.a.title,children:"Create Post"}),Object(c.jsx)(Z,{onSubmit:function(t){e.addNewPost(t.newPostContent)}})]}),Object(c.jsx)("div",{children:t})]})})),Z=Object(y.a)({form:"newPostContent"})((function(e){return Object(c.jsxs)("form",{className:U.a.wrap,onSubmit:e.handleSubmit,children:[Object(c.jsx)("img",{className:U.a.ava,src:"https://iqonic.design/themes/socialv/html/images/user/1.jpg"}),Object(c.jsx)(V.a,{component:S.b,name:"newPostContent",placeholder:"Write something here...",validate:[E.b,Q]}),Object(c.jsx)("button",{className:U.a.add__btn,children:"Add post"})]})})),z=W,X=s(12),R=Object(X.b)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{addNewPost:function(t){e(Object(J.a)(t))}}}))(z),Y=function(e){return Object(c.jsxs)("div",{className:d.a.profile,children:[Object(c.jsx)(C,{saveProfile:e.saveProfile,profile:e.profile,updateStatus:e.updateStatus,status:e.status,isOwner:e.isOwner,savePhoto:e.savePhoto}),Object(c.jsx)(R,{})]})},G=s(10),H=s(100),K=s(9),$=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(c.jsx)(Y,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,isOwner:!this.props.match.params.userID,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(j.a.Component);t.default=Object(K.d)(Object(X.b)((function(e){return console.log("mapStateToProps render from ProfileContainer"),{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserID:e.auth.userID,isAuth:e.auth.isAuth}}),{getUserProfile:J.c,getStatus:J.b,updateStatus:J.g,savePhoto:J.e,saveProfile:J.f}),G.f,H.a)($)}}]);
//# sourceMappingURL=3.70e1ad0d.chunk.js.map