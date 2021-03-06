/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.3.0
build: 3167
*/
YUI.add("highlight-accentfold",function(E){var D=E.Text.AccentFold,B=E.Escape,C={},A=E.mix(E.Highlight,{allFold:function(K,J,H){var I=A._TEMPLATE,F=[],G=0;H=E.merge({replacer:function(M,O,N,P){var L;if(O&&!(/\s/).test(N)){return M;}L=N.length;F.push(K.substring(G,P)+I.replace(/\{s\}/g,K.substr(P,L)));G=P+L;}},H||C);A.all(D.fold(K),D.fold(J),H);if(G<K.length-1){F.push(K.substr(G));}return F.join("");},startFold:function(G,F){return A.allFold(G,F,{startsWith:true});},wordsFold:function(H,G){var F=A._TEMPLATE;return A.words(H,D.fold(G),{mapper:function(J,I){if(I.hasOwnProperty(D.fold(J))){return F.replace(/\{s\}/g,B.html(J));}return B.html(J);}});}});},"3.3.0",{requires:["highlight-base","text-accentfold"]});