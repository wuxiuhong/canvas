!function(S){"use strict";var Y="ht",B=S[Y],b=Math,z=b.max,W=b.min,r=b.abs,c=b.atan2,C=(b.cos,b.sin,b.ceil),E=B.Default,t=E.getInternal(),p=B.List,d=t.Mat,P=t.getNodeRect,$=t.intersectionLineRect,j=E.getDistance,w=E.setEdgeType,i="left",U="right",u="top",L="bottom",J="edge.type",X="edge.gap",m="edge.center",o="edge.extend",A=function(M,L){return P(M,L).width},n=function(m,N){return P(m,N).height},e=function(o,w){return t.getEdgeAgentPosition(o,w._40I,w.s("edge.source.position"),w.s("edge.source.offset.x"),w.s("edge.source.offset.y"),w.s("edge.source.anchor.x"),w.s("edge.source.anchor.y"))},V=function(n,h){return t.getEdgeAgentPosition(n,h._41I,h.s("edge.target.position"),h.s("edge.target.offset.x"),h.s("edge.target.offset.y"),h.s("edge.target.anchor.x"),h.s("edge.target.anchor.y"))},F=function(E,G){var r=E.s(J),i=E.getEdgeGroup();if(i){var D=0;if(i.eachSiblingEdge(function(O){G.isVisible(O)&&O.s(J)==r&&D++}),D>1)return E.s(X)*(D-1)/2}return 0},H=function(D,s){var l=D.s(J),p=D.isLooped();if(!D.getEdgeGroup())return p?D.s(X):0;var L,U=0,g=0,y=0;return D.getEdgeGroup().getSiblings().each(function(K){K.each(function(e){if(e._40I===D._40I&&e.s(J)==l&&s.isVisible(e)){var u=e.s(X);L?(g+=y/2+u/2,y=u):(L=e,y=u),e===D&&(U=g)}})}),p?g-U+y:U-g/2},Q=function(Q,h){var d=h.s("edge.corner.radius");return E.toRoundedCorner(Q,d)};t.addMethod(B.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),w("boundary",function(F,n,w,A){A||(n=-n);var g,i=e(w,F),r=V(w,F),v=P(w,F._40I),E=P(w,F._41I),X=new d(c(r.y-i.y,r.x-i.x)),M=j(i,r),u=i.x,R=i.y;return g=X.tf(0,n),i={x:g.x+u,y:g.y+R},g=X.tf(M,n),r={x:g.x+u,y:g.y+R},g=$(i,r,v),g&&(i={x:g[0],y:g[1]}),g=$(i,r,E),g&&(r={x:g[0],y:g[1]}),{points:new p([i,r])}}),w("ripple",function(w,l,J,G){G||(l=-l);var r=e(J,w),R=V(J,w),z=j(r,R),Z=W(w.s("edge.offset"),z/2),q=w.s("edge.ripple.size"),u=w.s("edge.ripple.length"),T=w.s("edge.ripple.both"),U=w.s(m),t=w.s("edge.ripple.elevation"),X=new p,n=w.s("edge.ripple.straight")?null:new p,H=new d(c(R.y-r.y,R.x-r.x));G||(t=-t),z-=2*Z,u>0&&(q=C(z/u));var o=z/q;n&&n.add(1);for(var E=0;q>E;E++)n&&n.add(3),0===E?X.add({x:Z+o*E,y:U?0:l}):X.add({x:Z+o*E,y:l}),X.add({x:Z+o*E+o/2,y:t+l}),T&&(t=-t);for(X.add({x:Z+z,y:U?0:l}),E=0;E<X.size();E++){var P=H.tf(X.get(E));P.x+=r.x,P.y+=r.y,X.set(E,P)}return{points:X,segments:n}}),w("h.v",function(Y,g,F){g=H(Y,F);var I=new p,l=Y.s(m),R=e(F,Y),v=R.x,r=R.y,o=V(F,Y),X=o.x,x=o.y,N=0,d=0,C=X-v,D=x-r;return l||(N=A(F,Y._40I)/2,d=n(F,Y._41I)/2),C>=0&&0>=D?(I.add({x:v+N,y:r+g}),I.add({x:X+g,y:r+g}),I.add({x:X+g,y:x+d})):0>=C&&D>=0?(I.add({x:v-N,y:r+g}),I.add({x:X+g,y:r+g}),I.add({x:X+g,y:x-d})):C>=0&&D>=0?(I.add({x:v+N,y:r+g}),I.add({x:X-g,y:r+g}),I.add({x:X-g,y:x-d})):(I.add({x:v-N,y:r+g}),I.add({x:X-g,y:r+g}),I.add({x:X-g,y:x+d})),Q(I,Y)}),w("v.h",function(j,v,w){v=H(j,w);var C=new p,T=j.s(m),E=e(w,j),z=E.x,J=E.y,F=V(w,j),f=F.x,c=F.y,g=0,s=0,U=f-z,S=c-J;return T||(g=A(w,j._41I)/2,s=n(w,j._40I)/2),U>=0&&0>=S?(C.add({x:z+v,y:J-s}),C.add({x:z+v,y:c+v}),C.add({x:f-g,y:c+v})):0>=U&&S>=0?(C.add({x:z+v,y:J+s}),C.add({x:z+v,y:c+v}),C.add({x:f+g,y:c+v})):U>=0&&S>=0?(C.add({x:z-v,y:J+s}),C.add({x:z-v,y:c+v}),C.add({x:f-g,y:c+v})):(C.add({x:z-v,y:J-s}),C.add({x:z-v,y:c+v}),C.add({x:f+g,y:c+v})),Q(C,j)}),w("ortho",function(o,l,F){var b=new p,i=o.s(m),x=o.s("edge.ortho"),N=o._40I,J=o._41I,v=e(F,o),G=v.x,t=v.y,s=V(F,o),T=s.x,j=s.y,h=T-G,B=j-t,d=i?0:A(F,N)/2,I=i?0:n(F,N)/2,R=i?0:A(F,J)/2,u=i?0:n(F,J)/2,c=(h-(d+R)*(h>0?1:-1))*x,U=(B-(I+u)*(B>0?1:-1))*x;return r(h)<r(B)?h>=0&&0>=B?(b.add({x:G+l,y:t-I}),b.add({x:G+l,y:t+U+l-I}),b.add({x:T+l,y:t+U+l-I}),b.add({x:T+l,y:j+u})):0>=h&&B>=0?(b.add({x:G+l,y:t+I}),b.add({x:G+l,y:t+U+l+I}),b.add({x:T+l,y:t+U+l+I}),b.add({x:T+l,y:j-u})):h>=0&&B>=0?(b.add({x:G+l,y:t+I}),b.add({x:G+l,y:t+U-l+I}),b.add({x:T+l,y:t+U-l+I}),b.add({x:T+l,y:j-u})):(b.add({x:G+l,y:t-I}),b.add({x:G+l,y:t+U-l-I}),b.add({x:T+l,y:t+U-l-I}),b.add({x:T+l,y:j+u})):h>=0&&0>=B?(b.add({x:G+d,y:t+l}),b.add({x:G+c+l+d,y:t+l}),b.add({x:G+c+l+d,y:j+l}),b.add({x:T-R,y:j+l})):0>=h&&B>=0?(b.add({x:G-d,y:t+l}),b.add({x:G+c+l-d,y:t+l}),b.add({x:G+c+l-d,y:j+l}),b.add({x:T+R,y:j+l})):h>=0&&B>=0?(b.add({x:G+d,y:t+l}),b.add({x:G+c-l+d,y:t+l}),b.add({x:G+c-l+d,y:j+l}),b.add({x:T-R,y:j+l})):(b.add({x:G-d,y:t+l}),b.add({x:G+c-l-d,y:t+l}),b.add({x:G+c-l-d,y:j+l}),b.add({x:T+R,y:j+l})),Q(b,o)}),w("flex",function(u,E,q){var D=new p,C=u.s("edge.flex")+F(u,q),c=u.s(m),Z=u._40I,W=u._41I,b=e(q,u),X=b.x,O=b.y,B=V(q,u),g=B.x,T=B.y,j=g-X,H=T-O,l=c?0:A(q,Z)/2,G=c?0:n(q,Z)/2,P=c?0:A(q,W)/2,_=c?0:n(q,W)/2,U=j>0?C:-C,f=H>0?C:-C;return r(j)<r(H)?j>=0&&0>=H?(D.add({x:X+E,y:O-G}),D.add({x:X+E,y:O+f+E-G}),D.add({x:g+E,y:T-f+E+_}),D.add({x:g+E,y:T+_})):0>=j&&H>=0?(D.add({x:X+E,y:O+G}),D.add({x:X+E,y:O+f+E+G}),D.add({x:g+E,y:T-f+E-_}),D.add({x:g+E,y:T-_})):j>=0&&H>=0?(D.add({x:X+E,y:O+G}),D.add({x:X+E,y:O+f-E+G}),D.add({x:g+E,y:T-f-E-_}),D.add({x:g+E,y:T-_})):(D.add({x:X+E,y:O-G}),D.add({x:X+E,y:O+f-E-G}),D.add({x:g+E,y:T-f-E+_}),D.add({x:g+E,y:T+_})):j>=0&&0>=H?(D.add({x:X+l,y:O+E}),D.add({x:X+U+E+l,y:O+E}),D.add({x:g-U+E-P,y:T+E}),D.add({x:g-P,y:T+E})):0>=j&&H>=0?(D.add({x:X-l,y:O+E}),D.add({x:X+U+E-l,y:O+E}),D.add({x:g-U+E+P,y:T+E}),D.add({x:g+P,y:T+E})):j>=0&&H>=0?(D.add({x:X+l,y:O+E}),D.add({x:X+U-E+l,y:O+E}),D.add({x:g-U-E-P,y:T+E}),D.add({x:g-P,y:T+E})):(D.add({x:X-l,y:O+E}),D.add({x:X+U-E-l,y:O+E}),D.add({x:g-U-E+P,y:T+E}),D.add({x:g+P,y:T+E})),Q(D,u)}),w("extend.east",function(P,X,M){var G=new p,w=P.s(o)+F(P,M),t=P.s(m),b=e(M,P),R=b.x+(t?0:A(M,P._40I)/2),i=b.y,H=V(M,P),x=H.x+(t?0:A(M,P._41I)/2),g=H.y,O=z(R,x)+w;return i>g?(G.add({x:R,y:i+X}),G.add({x:O+X,y:i+X}),G.add({x:O+X,y:g-X}),G.add({x:x,y:g-X})):(G.add({x:R,y:i-X}),G.add({x:O+X,y:i-X}),G.add({x:O+X,y:g+X}),G.add({x:x,y:g+X})),Q(G,P)}),w("extend.west",function(M,f,l){var Y=new p,K=M.s(o)+F(M,l),n=M.s(m),J=e(l,M),T=J.x-(n?0:A(l,M._40I)/2),O=J.y,L=V(l,M),G=L.x-(n?0:A(l,M._41I)/2),R=L.y,C=W(T,G)-K;return O>R?(Y.add({x:T,y:O+f}),Y.add({x:C-f,y:O+f}),Y.add({x:C-f,y:R-f}),Y.add({x:G,y:R-f})):(Y.add({x:T,y:O-f}),Y.add({x:C-f,y:O-f}),Y.add({x:C-f,y:R+f}),Y.add({x:G,y:R+f})),Q(Y,M)}),w("extend.north",function(S,L,B){var M=new p,X=S.s(o)+F(S,B),g=S.s(m),H=e(B,S),z=H.x,C=H.y-(g?0:n(B,S._40I)/2),y=V(B,S),N=y.x,w=y.y-(g?0:n(B,S._41I)/2),v=W(C,w)-X;return z>N?(M.add({y:C,x:z+L}),M.add({y:v-L,x:z+L}),M.add({y:v-L,x:N-L}),M.add({y:w,x:N-L})):(M.add({y:C,x:z-L}),M.add({y:v-L,x:z-L}),M.add({y:v-L,x:N+L}),M.add({y:w,x:N+L})),Q(M,S)}),w("extend.south",function(h,w,X){var r=new p,u=h.s(o)+F(h,X),K=h.s(m),C=e(X,h),y=C.x,G=C.y+(K?0:n(X,h._40I)/2),$=V(X,h),t=$.x,q=$.y+(K?0:n(X,h._41I)/2),I=z(G,q)+u;return y>t?(r.add({y:G,x:y+w}),r.add({y:I+w,x:y+w}),r.add({y:I+w,x:t-w}),r.add({y:q,x:t-w})):(r.add({y:G,x:y-w}),r.add({y:I+w,x:y-w}),r.add({y:I+w,x:t+w}),r.add({y:q,x:t+w})),Q(r,h)});var N=function(e,G,F,V,y){if(V.sort(function(u,Y){var T=u.getSourceAgent()===G?u.getTargetAgent():u.getSourceAgent(),A=Y.getSourceAgent()===G?Y.getTargetAgent():Y.getSourceAgent(),h=T.p(),y=A.p();if(F===i||F===U){if(h.y>y.y)return 1;if(h.y<y.y)return-1}else{if(h.x>y.x)return 1;if(h.x<y.x)return-1}return E.sortFunc(u.getId(),Y.getId())}),y){for(var R,m,I,B=e.getSourceAgent(),h=e.getTargetAgent(),A=0;A<V.size();A++){var n=V.get(A);n.getSourceAgent()===B&&n.getTargetAgent()===h||n.getTargetAgent()===B&&n.getSourceAgent()===h?(m||(m=new p),m.add(n,0)):m?(I||(I=new p),I.add(n)):(R||(R=new p),R.add(n))}V.clear(),R&&V.addAll(R),m&&V.addAll(m),I&&V.addAll(I)}var l=V.indexOf(e),P=V.size(),Q=e.s(X);return{side:F,index:l,size:P,offset:-Q*(P-1)/2+Q*l}},f=function(q,S,n,$,u){var O=S.s(J);return N(S,n,$,n.getAgentEdges().toList(function(e){return q.isVisible(e)&&e.s(J)===O}),u)},h=function(_,b){var p=_.getSourceAgent()===b?_.getTargetAgent():_.getSourceAgent(),q=b.p(),A=p.p(),w=A.x-q.x,I=A.y-q.y;return w>0&&r(I)<=w?U:0>w&&r(I)<=-w?i:I>0&&r(w)<=I?L:u},x=function(t,V,d){var v=V.s(J),D=h(V,d);return N(V,d,D,d.getAgentEdges().toList(function(E){return t.isVisible(E)&&E.s(J)===v&&h(E,d)===D}))},R=function(H,w){var b=H.getSourceAgent()===w,K=b?H.getTargetAgent():H.getSourceAgent(),y=w.p(),W=K.p();return b?y.y>W.y?u:L:y.x<W.x?U:i},g=function(p,g,o){var Z=g.s(J),I=R(g,o);return N(g,o,I,o.getAgentEdges().toList(function(i){return p.isVisible(i)&&i.s(J)===Z&&R(i,o)===I}),I===U||I===L)},a=function(g,z){var b=g.getSourceAgent()===z,X=b?g.getTargetAgent():g.getSourceAgent(),$=z.p(),n=X.p();return b?$.x<n.x?U:i:$.y>n.y?u:L},l=function(M,e,C){var P=e.s(J),S=a(e,C);return N(e,C,S,C.getAgentEdges().toList(function(e){return M.isVisible(e)&&e.s(J)===P&&a(e,C)===S}),S===U||S===L)},_=function(Z,v,o){var a=Z.getSourceAgent(),B=Z.getTargetAgent(),k=a.getId()>B.getId(),R=k?B:a,t=k?a:B,l=R.p(),V=t.p(),S=o(v,Z,R),M=o(v,Z,t),y=Z.s(m),q=y?0:A(v,R)/2,G=y?0:A(v,t)/2,z=y?0:n(v,R)/2,P=y?0:n(v,t)/2,d=S.offset,r=M.offset,g=S.side,X=M.side,j=new p;return g===u?(j.add({x:l.x+d,y:l.y-z}),j.add({x:l.x+d,y:V.y+r}),X===i?j.add({x:V.x-G,y:V.y+r}):j.add({x:V.x+G,y:V.y+r})):g===L?(j.add({x:l.x+d,y:l.y+z}),j.add({x:l.x+d,y:V.y+r}),X===i?j.add({x:V.x-G,y:V.y+r}):j.add({x:V.x+G,y:V.y+r})):g===i?(j.add({x:l.x-q,y:l.y+d}),j.add({x:V.x+r,y:l.y+d}),X===L?j.add({x:V.x+r,y:V.y+P}):j.add({x:V.x+r,y:V.y-P})):g===U&&(j.add({x:l.x+q,y:l.y+d}),j.add({x:V.x+r,y:l.y+d}),X===L?j.add({x:V.x+r,y:V.y+P}):j.add({x:V.x+r,y:V.y-P})),k&&j.reverse(),Q(j,Z)};w("ortho2",function(b,_,V){var t,k,F=b.s(m),y=b.s("edge.ortho"),B=b.getSourceAgent(),h=b.getTargetAgent(),Y=B.getId()>h.getId(),D=Y?h:B,l=Y?B:h,R=D.p(),g=l.p(),H=x(V,b,D),K=x(V,b,l),z=F?0:A(V,D)/2,w=F?0:n(V,D)/2,J=F?0:A(V,l)/2,E=F?0:n(V,l)/2,f=new p,c=H.offset,P=K.offset,O=H.side;return O===U?(t=g.y>R.y?-c:c,k=R.x+z+(g.x-J-R.x-z)*y,f.add({x:R.x+z,y:R.y+c}),f.add({x:k+t,y:R.y+c}),f.add({x:k+t,y:g.y+P}),f.add({x:g.x-J,y:g.y+P})):O===i?(t=g.y>R.y?-c:c,k=R.x-z-(R.x-z-g.x-J)*y,f.add({x:R.x-z,y:R.y+c}),f.add({x:k-t,y:R.y+c}),f.add({x:k-t,y:g.y+P}),f.add({x:g.x+J,y:g.y+P})):O===L?(t=g.x>R.x?-c:c,k=R.y+w+(g.y-E-R.y-w)*y,f.add({x:R.x+c,y:R.y+w}),f.add({x:R.x+c,y:k+t}),f.add({x:g.x+P,y:k+t}),f.add({x:g.x+P,y:g.y-E})):O===u&&(t=g.x>R.x?-c:c,k=R.y-w-(R.y-w-g.y-E)*y,f.add({x:R.x+c,y:R.y-w}),f.add({x:R.x+c,y:k-t}),f.add({x:g.x+P,y:k-t}),f.add({x:g.x+P,y:g.y+E})),Y&&f.reverse(),Q(f,b)},!0),w("flex2",function(R,t,o){var C,E=R.getSourceAgent(),h=R.getTargetAgent(),f=E.getId()>h.getId(),Y=f?h:E,V=f?E:h,I=Y.p(),G=V.p(),D=x(o,R,Y),q=x(o,R,V),b=R.s(m),e=R.s("edge.flex")+(D.size-1)/2*R.s(X),K=b?0:A(o,Y)/2,O=b?0:n(o,Y)/2,_=b?0:A(o,V)/2,B=b?0:n(o,V)/2,r=new p,N=D.offset,M=q.offset,l=D.side;return l===U?(C=G.y>I.y?-N:N,r.add({x:I.x+K,y:I.y+N}),r.add({x:I.x+K+e+C,y:I.y+N}),r.add({x:G.x-_-e+C,y:G.y+M}),r.add({x:G.x-_,y:G.y+M})):l===i?(C=G.y>I.y?-N:N,r.add({x:I.x-K,y:I.y+N}),r.add({x:I.x-K-e-C,y:I.y+N}),r.add({x:G.x+_+e-C,y:G.y+M}),r.add({x:G.x+_,y:G.y+M})):l===L?(C=G.x>I.x?-N:N,r.add({x:I.x+N,y:I.y+O}),r.add({x:I.x+N,y:I.y+O+e+C}),r.add({x:G.x+M,y:G.y-B-e+C}),r.add({x:G.x+M,y:G.y-B})):l===u&&(C=G.x>I.x?-N:N,r.add({x:I.x+N,y:I.y-O}),r.add({x:I.x+N,y:I.y-O-e-C}),r.add({x:G.x+M,y:G.y+B+e-C}),r.add({x:G.x+M,y:G.y+B})),f&&r.reverse(),Q(r,R)},!0),w("extend.north2",function(U,Y,y){var A=U.getSourceAgent(),i=U.getTargetAgent(),P=A.getId()>i.getId(),j=P?i:A,J=P?A:i,N=j.p(),v=J.p(),R=f(y,U,j,u),T=f(y,U,J,u,!0),x=U.s(m),l=x?0:n(y,j)/2,w=x?0:n(y,J)/2,I=R.offset,C=T.offset,E=U.s(o)+(R.size-1)/2*U.s(X),e=W(N.y-l,v.y-w)-E+(N.x<v.x?I:-I),c=new p;return c.add({x:N.x+I,y:N.y-l}),c.add({x:N.x+I,y:e}),c.add({x:v.x+C,y:e}),c.add({x:v.x+C,y:v.y-w}),P&&c.reverse(),Q(c,U)},!0),w("extend.south2",function(W,w,H){var d=W.getSourceAgent(),e=W.getTargetAgent(),J=d.getId()>e.getId(),h=J?e:d,v=J?d:e,E=h.p(),i=v.p(),j=f(H,W,h,L),t=f(H,W,v,L,!0),$=W.s(m),B=$?0:n(H,h)/2,U=$?0:n(H,v)/2,q=j.offset,A=t.offset,c=W.s(o)+(j.size-1)/2*W.s(X),D=z(E.y+B,i.y+U)+c+(E.x>i.x?q:-q),r=new p;return r.add({x:E.x+q,y:E.y+B}),r.add({x:E.x+q,y:D}),r.add({x:i.x+A,y:D}),r.add({x:i.x+A,y:i.y+U}),J&&r.reverse(),Q(r,W)},!0),w("extend.west2",function(B,T,D){var k=B.getSourceAgent(),q=B.getTargetAgent(),R=k.getId()>q.getId(),S=R?q:k,P=R?k:q,b=S.p(),j=P.p(),F=f(D,B,S,u),I=f(D,B,P,u,!0),x=B.s(m),J=x?0:A(D,S)/2,G=x?0:A(D,P)/2,w=F.offset,C=I.offset,E=B.s(o)+(F.size-1)/2*B.s(X),H=W(b.x-J,j.x-G)-E+(b.y<j.y?w:-w),M=new p;return M.add({x:b.x-J,y:b.y+w}),M.add({x:H,y:b.y+w}),M.add({x:H,y:j.y+C}),M.add({x:j.x-G,y:j.y+C}),R&&M.reverse(),Q(M,B)},!0),w("extend.east2",function(G,w,g){var O=G.getSourceAgent(),Z=G.getTargetAgent(),K=O.getId()>Z.getId(),i=K?Z:O,H=K?O:Z,v=i.p(),N=H.p(),q=f(g,G,i,u),V=f(g,G,H,u,!0),F=G.s(m),D=F?0:A(g,i)/2,I=F?0:A(g,H)/2,_=q.offset,s=V.offset,y=G.s(o)+(q.size-1)/2*G.s(X),e=z(v.x+D,N.x+I)+y+(v.y>N.y?_:-_),C=new p;return C.add({x:v.x+D,y:v.y+_}),C.add({x:e,y:v.y+_}),C.add({x:e,y:N.y+s}),C.add({x:N.x+I,y:N.y+s}),K&&C.reverse(),Q(C,G)},!0),w("v.h2",function(t,u,A){return _(t,A,g)},!0),w("h.v2",function(t,h,d){return _(t,d,l)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);