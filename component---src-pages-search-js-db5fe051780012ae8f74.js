"use strict";(self.webpackChunkmichellemtchai_github_io=self.webpackChunkmichellemtchai_github_io||[]).push([[996],{4746:function(e,t,a){a.d(t,{Z:function(){return F}});var n=a(7294),l=a(8165),r=a(5444),c="Pagination-module--pagination--220Jl",u=function(e){var t=e.page,a=e.totalPages,l=e.baseUrl,u=e.className,o=function(e){return function(){var n=t+e;n>0&&n<=a&&(0,r.c4)(l+"/page/"+n)}},i=u?u+" "+c:c;return n.createElement("div",{className:i},n.createElement("button",{className:"Pagination-module--left--1H7uL",disabled:t-1<=0,onClick:o(-1)},"Prev"),n.createElement("p",null,"Page ",t),n.createElement("button",{className:"Pagination-module--right--LhP1y",disabled:t+1>a,onClick:o(1)},"Next"))},o=a(2499),i=a(5074),s=function(e){var t=e.list;return n.createElement("div",{className:"Projects-module--projects--1FOFQ"},t.length>0?t.map((function(e){return n.createElement("section",{key:e.contentful_id},n.createElement(r.rU,{to:"/projects/"+e.slug,alt:e.name},n.createElement(i.Z,{className:"Projects-module--previewImage--2rAAu",src:e.previewImage,alt:e.name,demo:e.demoUrl}),n.createElement("ul",null,n.createElement("li",null,n.createElement("h3",null,e.name)),n.createElement("li",null,n.createElement("p",null,e.summary)),n.createElement("li",null,n.createElement(o.Z,{list:e.technologies})))))})):n.createElement("p",{className:"Projects-module--noProject--1S0LZ"},"No project found."))},m=a(9149),f=function(e){var t=e.label,a=e.value,l=e.options,r=e.update,c=(0,n.useState)(a),u=c[0],o=c[1];return n.createElement("fieldset",{className:"FilterSelect-module--fieldset--26Jwr"},n.createElement("label",null,t,":"),n.createElement("select",{value:u,onChange:function(e){var t=e.target.value;o(t),r(t)}},l.map((function(e){return n.createElement("option",{key:e.value,value:e.value},e.label)}))))},g=a(3433),d=a(7606),h=a(4694),p=a(8014),v=a(8167),E="FilterCheckList-module--checked--1DR2a";h.library.add(p.mRB,v.NC);var b=function(e){var t=e.label,a=e.value,l=e.options,r=e.update,c=e.initialized,u=e.updateInitialized,o=function(e){return e.length===l.length},i=(0,n.useState)(!c||o(a)),s=i[0],m=i[1],f=function(e){var t=[];return e&&l.forEach((function(e){t.push(e.value)})),t},h=(0,n.useState)(c?a:f(!0)),p=h[0],v=h[1];(0,n.useEffect)((function(){c||(u(!0),r(f(!0),!0))}),[]);var b=function(e){var t=e.target.value,a=(0,g.Z)(p);if(a.includes(t)){var n=a.indexOf(t);a.splice(n,1)}else a.push(t);v(a),r(a),m(o(a))},y=function(e){var t=e.checked?["fas","check-square"]:["far","square"];return n.createElement(d.G,{icon:t})};return n.createElement("fieldset",{className:"FilterCheckList-module--fieldset--1hVXb"},n.createElement("section",{className:"FilterCheckList-module--heading--1ntgf"},n.createElement("label",null,t,":"),l.length>0&&n.createElement("label",{htmlFor:"check-all",className:s?E:void 0},n.createElement("input",{type:"checkbox",id:"check-all",name:"check-all",value:"all",checked:s,onChange:function(){var e=!s;m(e);var t=f(e);v(t),r(t)}}),n.createElement(y,{checked:s}),"All")),n.createElement("section",{className:"FilterCheckList-module--body--2NMHT"},l.length>0?l.map((function(e){return n.createElement("label",{key:e.value,htmlFor:e.value,className:p.includes(e.value)?E:void 0},n.createElement("input",{type:"checkbox",id:e.value,name:e.value,value:e.value,checked:p.includes(e.value),onChange:b}),n.createElement(y,{checked:p.includes(e.value)}),e.label)})):n.createElement("p",null,"There are no options.")))},y=function(e){var t=e.query,a=e.category,l=e.closeModal,c=e.filters,u=e.search,o=(0,n.useState)(c.sortBy.value),i=o[0],s=o[1],m=(0,n.useState)(c.sortDir.value),g=m[0],h=m[1],p=(0,n.useState)(c.stacks.value),v=p[0],E=p[1],y=Object.assign({},c.sortBy,{value:i,update:s}),k=Object.assign({},c.sortDir,{value:g,update:h}),S=Object.assign({},c.stacks,{value:v,update:function(e,t){void 0===t&&(t=!1),E(e),t&&c.stacks.update(e)}});return n.createElement("dialog",{open:!0,className:"FilterDialog-module--dialog--1ndge"},n.createElement("section",{className:"FilterDialog-module--header--2LjUN"},n.createElement("h1",null,n.createElement(d.G,{icon:["fa","sliders-h"]}),"Filter Dialog"),n.createElement("button",{onClick:l},"×")),n.createElement("section",{className:"FilterDialog-module--body--27zhW"},n.createElement(f,Object.assign({label:"Sort By"},y)),n.createElement(f,Object.assign({label:"Sort Direction"},k)),n.createElement(b,Object.assign({label:"Stacks"},S))),n.createElement("section",{className:"FilterDialog-module--footer--1TVr_"},n.createElement("button",{className:"FilterDialog-module--cancel--2G1hC",onClick:l},"Cancel"),n.createElement("button",{className:"FilterDialog-module--submit--3knQp",onClick:function(){c.sortBy.update(i),c.sortDir.update(g),c.stacks.update(v),l(),(0,r.c4)(u?"/search/"+a+"/"+t:"/"+a)}},"Filter")))},k=function(e){var t=e.category,a=e.query,l=e.filters,r=e.search,c=(0,n.useState)(!1),u=c[0],o=c[1];return n.createElement(n.Fragment,null,n.createElement("button",{className:"FilterButton-module--filterButton--2_3A8",onClick:function(){o(!0)}},n.createElement(d.G,{icon:["fa","sliders-h"]}),"Filter"),n.createElement(m.Z,{show:u,updateShow:o},n.createElement(y,{query:a,category:t,closeModal:function(){return o(!1)},filters:l,search:r})))},S=a(7106),N=a(6236),F=function(e){var t=e.results,a=e.filters,r=e.baseUrl,c=e.query,o=e.page,i=e.heading,m=e.title,f=e.description,g=e.category,d=Math.ceil(t.length/10);d=0===d?1:d;var h,p=(h=10*(o-1),t.slice(h,h+10)),v=function(e){var t=e.className;return d>1&&n.createElement(u,{page:o,totalPages:d,baseUrl:r,className:t})},E=(0,n.useContext)(N.k),b=E.setTitle,y=E.setDescription,F=E.setSelectedCategory;return(0,n.useEffect)((function(){b(m),y(f),F(g)}),[]),o>0&&o<=d?n.createElement(n.Fragment,null,n.createElement(l.Z,{range:""===g?"all":g}),n.createElement("h2",{className:"PaginateProjects-module--heading--2N9Cf"},i),n.createElement("section",{className:"PaginateProjects-module--topInfo--19Sgu"},n.createElement(k,{query:c,category:""===g?"all":g,filters:a,search:"Search"===i}),n.createElement("p",{className:"PaginateProjects-module--summary--n_Ksx"},d>1&&p.length+" of ",t.length," Project",p.length>1&&"s",c&&' for "'+c+'"'),n.createElement(v,null)),n.createElement(s,{list:p}),n.createElement(v,{className:"PaginateProjects-module--bottomPagination--yCPJt"})):n.createElement(S.default,null)}},5168:function(e,t,a){var n=a(7294),l=a(7106);t.Z=function(e){var t=e.params,a=e.Component;if(t){var r=t.match(/^page\/(\d+)$/);if(r&&2===r.length){var c=parseInt(r[1]);return n.createElement(a,{page:c})}return n.createElement(l.default,null)}return n.createElement(a,{page:1})}},2957:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(3433),l=a(7294),r=a(5168),c=a(4746),u=a(5444),o=a(6582),i=a(6236),s=a(2389),m=a(73),f=a(7480),g=a(3520),d=function(e){var t=e.category,a=e.query,n=e.page,r=(0,l.useContext)(i.k),d=r.searchFiltersTerm,h=r.setSearchFiltersTerm,p=r.searchFiltersRange,v=r.setSearchFiltersRange,E=r.searchFiltersSortBy,b=r.setSearchFiltersSortBy,y=r.searchFiltersSortDir,k=r.setSearchFiltersSortDir,S=r.searchFiltersStacks,N=r.setSearchFiltersStacks,F=r.searchFiltersStackOptions,C=r.setSearchFiltersStackOptions,P=(0,u.K2)("848583979").allContentfulProject,j=function(e){var t=a.split(/\s+/g),n=new RegExp("("+t.join("|")+")","gi"),r=e.replace(n,(function(e){return"<b>"+e+"</b>"})),c=(0,s.a)().data("settings",{fragment:!0}).use(m.Z,f.R).use(g.Z,{createElement:l.createElement}).processSync("<i>"+r+"<i>");return l.createElement(l.Fragment,null,c.result.props.children)},D=function(e){var t=Object.assign({},e);return t.name=j(t.name),t.summary=j(t.summary),t.technologies=t.technologies.map((function(e){return Object.assign({},e,{label:j(e.name)})})),t},O=function(){var e=P.nodes,n=[];return"all"===t?e.forEach((function(e){var t=Z(e);t>0&&n.push(Object.assign({},D(e),{relevance:t}))})):P.nodes.forEach((function(e){var a=e.category.map((function(e){return e.slug})),l=Z(e);a.includes(t)&&l>0&&n.push(Object.assign({},D(e),{relevance:l}))})),n=(0,o.q_)(n,S,d===a),(0,o.Mx)(n,y,E)},q=function(e,t){var a=e.match(t);return a?a.length:0},Z=function(e){var t=a.split(/\s+/g),n=new RegExp("("+t.join("|")+")","gi"),l=0;return l+=q(e.name,n),l+=q(e.summary,n),l+=_(e.technologies,n)},_=function(e,t){for(var a=0,n=0;n<e.length;n++){var l=q(e[n].name,t);l>0&&(a+=l)}return a},x=O(),B={sortBy:{value:E,update:b,options:[{label:"Relevance",value:"relevance"},{label:"Project Name",value:"name"}]},sortDir:{value:y,update:k,options:o.N3},stacks:{initialized:d===a&&p===t,updateInitialized:function(){v(t),h(a)},value:S,update:N,options:d===a?F:(0,o.UP)(x)}};return(0,l.useEffect)((function(){C(B.stacks.options)}),[]),l.createElement(c.Z,{results:O(),baseUrl:"/search/"+t+"/"+a,query:a,page:n,heading:"Search",title:'Search for "'+a+'" - Page '+n,description:"Page "+n+' of search for term "'+a+'" in "'+t+'".',category:"all"===t?"":t,filters:B})},h=a(7106),p=function(e){var t=e.params,a=e.data.allContentfulCategory.nodes.map((function(e){return e.slug})),c=decodeURI(t.query);if(["all"].concat((0,n.Z)(a)).includes(t.category)){var u=t["*"];return l.createElement(r.Z,{params:u,Component:function(e){var a=e.page;return l.createElement(d,{category:t.category,query:c,page:a})}})}return l.createElement(h.default,null)}},6582:function(e,t,a){a.d(t,{UP:function(){return n},N3:function(){return l},Mx:function(){return r},q_:function(){return c}});var n=function(e){var t={},a=[];return e.forEach((function(e){e.technologies.forEach((function(e){t[e.name]||(t[e.name]=e.contentful_id)}))})),Object.keys(t).sort().forEach((function(e){a.push({label:e,value:t[e]})})),a},l=[{label:"Ascending",value:"ASC"},{label:"Descending",value:"DESC"}],r=function(e,t,a){return e.sort((function(e,n){return"ASC"===t?"string"==typeof e[a]?n[a].localeCompare(e[a]):n[a]-e[a]:"string"==typeof e[a]?e[a].localeCompare(n[a]):e[a]-n[a]}))},c=function(e,t,a){return a?e.filter((function(e){var a=e.technologies.map((function(e){return e.contentful_id}));return u(a,t)})):e},u=function(e,t){for(var a=0;a<t.length;a++)if(e.includes(t[a]))return!0;return!1}}}]);
//# sourceMappingURL=component---src-pages-search-js-db5fe051780012ae8f74.js.map