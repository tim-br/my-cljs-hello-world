// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4423__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__10096_10108 = cljs.core.seq(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__10097_10109 = null;
var count__10098_10110 = (0);
var i__10099_10111 = (0);
while(true){
if((i__10099_10111 < count__10098_10110)){
var f_10112 = chunk__10097_10109.cljs$core$IIndexed$_nth$arity$2(null,i__10099_10111);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_10112], 0));

var G__10113 = seq__10096_10108;
var G__10114 = chunk__10097_10109;
var G__10115 = count__10098_10110;
var G__10116 = (i__10099_10111 + (1));
seq__10096_10108 = G__10113;
chunk__10097_10109 = G__10114;
count__10098_10110 = G__10115;
i__10099_10111 = G__10116;
continue;
} else {
var temp__4423__auto___10117 = cljs.core.seq(seq__10096_10108);
if(temp__4423__auto___10117){
var seq__10096_10118__$1 = temp__4423__auto___10117;
if(cljs.core.chunked_seq_QMARK_(seq__10096_10118__$1)){
var c__3739__auto___10119 = cljs.core.chunk_first(seq__10096_10118__$1);
var G__10120 = cljs.core.chunk_rest(seq__10096_10118__$1);
var G__10121 = c__3739__auto___10119;
var G__10122 = cljs.core.count(c__3739__auto___10119);
var G__10123 = (0);
seq__10096_10108 = G__10120;
chunk__10097_10109 = G__10121;
count__10098_10110 = G__10122;
i__10099_10111 = G__10123;
continue;
} else {
var f_10124 = cljs.core.first(seq__10096_10118__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_10124], 0));

var G__10125 = cljs.core.next(seq__10096_10118__$1);
var G__10126 = null;
var G__10127 = (0);
var G__10128 = (0);
seq__10096_10108 = G__10125;
chunk__10097_10109 = G__10126;
count__10098_10110 = G__10127;
i__10099_10111 = G__10128;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10129 = cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3370__auto__ = cljs.core.constant$keyword$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3370__auto__)){
return or__3370__auto__;
} else {
return cljs.core.constant$keyword$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_10129], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_10129)))?cljs.core.second(arglists_10129):arglists_10129)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.constant$keyword$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.constant$keyword$url)){
if(cljs.core.truth_(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__10100 = cljs.core.seq(cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__10101 = null;
var count__10102 = (0);
var i__10103 = (0);
while(true){
if((i__10103 < count__10102)){
var vec__10104 = chunk__10101.cljs$core$IIndexed$_nth$arity$2(null,i__10103);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10104,(0),null);
var map__10105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10104,(1),null);
var map__10105__$1 = ((cljs.core.seq_QMARK_(map__10105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10105):map__10105);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10105__$1,cljs.core.constant$keyword$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10105__$1,cljs.core.constant$keyword$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__10130 = seq__10100;
var G__10131 = chunk__10101;
var G__10132 = count__10102;
var G__10133 = (i__10103 + (1));
seq__10100 = G__10130;
chunk__10101 = G__10131;
count__10102 = G__10132;
i__10103 = G__10133;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__10100);
if(temp__4423__auto__){
var seq__10100__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10100__$1)){
var c__3739__auto__ = cljs.core.chunk_first(seq__10100__$1);
var G__10134 = cljs.core.chunk_rest(seq__10100__$1);
var G__10135 = c__3739__auto__;
var G__10136 = cljs.core.count(c__3739__auto__);
var G__10137 = (0);
seq__10100 = G__10134;
chunk__10101 = G__10135;
count__10102 = G__10136;
i__10103 = G__10137;
continue;
} else {
var vec__10106 = cljs.core.first(seq__10100__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10106,(0),null);
var map__10107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10106,(1),null);
var map__10107__$1 = ((cljs.core.seq_QMARK_(map__10107))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10107):map__10107);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10107__$1,cljs.core.constant$keyword$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10107__$1,cljs.core.constant$keyword$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__10138 = cljs.core.next(seq__10100__$1);
var G__10139 = null;
var G__10140 = (0);
var G__10141 = (0);
seq__10100 = G__10138;
chunk__10101 = G__10139;
count__10102 = G__10140;
i__10103 = G__10141;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
