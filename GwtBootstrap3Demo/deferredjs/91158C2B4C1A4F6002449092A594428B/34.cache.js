function Wbc(){}
function Lbc(a,b,c){aeb.call(this,a,b,c,($Sb(),ZSb))}
function dcc(a){var b;if(!a.i){b=new Ubc(new Wbc);a.i=b}return a.i}
function ccc(a){var b;if(!a.g){b=new Lbc(jdb(Geb(a.b)),dcc(a),bcc(a));Bdb((Heb(a.b),b),Seb(Heb(a.b)));a.g=b}return a.g}
function Ubc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;ueb(this,(a=new Ryb,asb(a,(b=new Bub(bqc),asb(b,(c=new Mxb,c.b='Project Setup',Lxb(c),c.c='basic setup and using custom themes',Lxb(c),c)),asb(b,(d=new Uxb,asb(d,(g=new eyb,dyb(g,(i=new wvb(3),qzb(i.d,cqc),i)),g)),asb(d,(j=new Xxb,asb(j,(k=new jwb,iwb(k,(n=new Ikb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new PT(n.b.b)).b),k)),asb(j,(o=new Ygc,Iyb(o,(p=new Ikb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new PT(p.b.b)).b),kW(o.ab,fqc,true),o)),j)),d)),asb(b,(e=new Uxb,asb(e,(q=new eyb,dyb(q,(r=new wvb(3),qzb(r.d,'Bootstrap2 Look-a-like Setup'),r)),q)),asb(e,(s=new Xxb,asb(s,(t=new jwb,iwb(t,(u=new Ikb,u.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new PT(u.b.b)).b),t)),asb(s,(v=new Ygc,Iyb(v,(w=new Ikb,w.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new PT(w.b.b)).b),kW(v.ab,fqc,true),v)),s)),e)),asb(b,(f=new Uxb,asb(f,(x=new eyb,dyb(x,(y=new wvb(3),qzb(y.d,'Custom Theme'),y)),x)),asb(f,(z=new Xxb,asb(z,(A=new jwb,iwb(A,(B=new Ikb,B.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new PT(B.b.b)).b),A)),asb(z,(C=new Ygc,Iyb(C,(D=new Ikb,D.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new PT(D.b.b)).b),kW(C.ab,fqc,true),C)),z)),f)),b)),a))}
LS(1236,521,ykc,Lbc);LS(1239,526,zkc,Ubc);LS(1240,1,{},Wbc);LS(1247,1,Skc);_.Ab=function tcc(){jgb(this.c,ccc(this.b.b))};var eP=bjb(xpc,'SetupPresenter',1236),gP=bjb(xpc,'SetupView',1239),fP=bjb(xpc,'SetupView_BinderImpl',1240);Wkc(wj)(34);