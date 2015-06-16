// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5656_5668 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5657_5669 = null;
var count__5658_5670 = (0);
var i__5659_5671 = (0);
while(true){
if((i__5659_5671 < count__5658_5670)){
var f_5672 = cljs.core._nth.call(null,chunk__5657_5669,i__5659_5671);
cljs.core.println.call(null,"  ",f_5672);

var G__5673 = seq__5656_5668;
var G__5674 = chunk__5657_5669;
var G__5675 = count__5658_5670;
var G__5676 = (i__5659_5671 + (1));
seq__5656_5668 = G__5673;
chunk__5657_5669 = G__5674;
count__5658_5670 = G__5675;
i__5659_5671 = G__5676;
continue;
} else {
var temp__4423__auto___5677 = cljs.core.seq.call(null,seq__5656_5668);
if(temp__4423__auto___5677){
var seq__5656_5678__$1 = temp__4423__auto___5677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5656_5678__$1)){
var c__3739__auto___5679 = cljs.core.chunk_first.call(null,seq__5656_5678__$1);
var G__5680 = cljs.core.chunk_rest.call(null,seq__5656_5678__$1);
var G__5681 = c__3739__auto___5679;
var G__5682 = cljs.core.count.call(null,c__3739__auto___5679);
var G__5683 = (0);
seq__5656_5668 = G__5680;
chunk__5657_5669 = G__5681;
count__5658_5670 = G__5682;
i__5659_5671 = G__5683;
continue;
} else {
var f_5684 = cljs.core.first.call(null,seq__5656_5678__$1);
cljs.core.println.call(null,"  ",f_5684);

var G__5685 = cljs.core.next.call(null,seq__5656_5678__$1);
var G__5686 = null;
var G__5687 = (0);
var G__5688 = (0);
seq__5656_5668 = G__5685;
chunk__5657_5669 = G__5686;
count__5658_5670 = G__5687;
i__5659_5671 = G__5688;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5689 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3370__auto__)){
return or__3370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_5689);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_5689)))?cljs.core.second.call(null,arglists_5689):arglists_5689));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5660 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5661 = null;
var count__5662 = (0);
var i__5663 = (0);
while(true){
if((i__5663 < count__5662)){
var vec__5664 = cljs.core._nth.call(null,chunk__5661,i__5663);
var name = cljs.core.nth.call(null,vec__5664,(0),null);
var map__5665 = cljs.core.nth.call(null,vec__5664,(1),null);
var map__5665__$1 = ((cljs.core.seq_QMARK_.call(null,map__5665))?cljs.core.apply.call(null,cljs.core.hash_map,map__5665):map__5665);
var doc = cljs.core.get.call(null,map__5665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5690 = seq__5660;
var G__5691 = chunk__5661;
var G__5692 = count__5662;
var G__5693 = (i__5663 + (1));
seq__5660 = G__5690;
chunk__5661 = G__5691;
count__5662 = G__5692;
i__5663 = G__5693;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__5660);
if(temp__4423__auto__){
var seq__5660__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5660__$1)){
var c__3739__auto__ = cljs.core.chunk_first.call(null,seq__5660__$1);
var G__5694 = cljs.core.chunk_rest.call(null,seq__5660__$1);
var G__5695 = c__3739__auto__;
var G__5696 = cljs.core.count.call(null,c__3739__auto__);
var G__5697 = (0);
seq__5660 = G__5694;
chunk__5661 = G__5695;
count__5662 = G__5696;
i__5663 = G__5697;
continue;
} else {
var vec__5666 = cljs.core.first.call(null,seq__5660__$1);
var name = cljs.core.nth.call(null,vec__5666,(0),null);
var map__5667 = cljs.core.nth.call(null,vec__5666,(1),null);
var map__5667__$1 = ((cljs.core.seq_QMARK_.call(null,map__5667))?cljs.core.apply.call(null,cljs.core.hash_map,map__5667):map__5667);
var doc = cljs.core.get.call(null,map__5667__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5667__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5698 = cljs.core.next.call(null,seq__5660__$1);
var G__5699 = null;
var G__5700 = (0);
var G__5701 = (0);
seq__5660 = G__5698;
chunk__5661 = G__5699;
count__5662 = G__5700;
i__5663 = G__5701;
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
