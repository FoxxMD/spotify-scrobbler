"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["232"],{665:function(e,t,n){let r;n.r(t),n.d(t,{CompletionAdapter:function(){return ti},DefinitionAdapter:function(){return tg},DiagnosticsAdapter:function(){return tr},DocumentColorAdapter:function(){return tC},DocumentFormattingEditProvider:function(){return t_},DocumentHighlightAdapter:function(){return tl},DocumentLinkAdapter:function(){return tv},DocumentRangeFormattingEditProvider:function(){return tk},DocumentSymbolAdapter:function(){return tm},FoldingRangeAdapter:function(){return tw},HoverAdapter:function(){return tc},ReferenceAdapter:function(){return th},RenameAdapter:function(){return tp},SelectionRangeAdapter:function(){return ty},WorkerManager:function(){return e9},fromPosition:function(){return to},fromRange:function(){return ta},setupMode:function(){return tP},toRange:function(){return ts},toTextEdit:function(){return tu}});var i,o,a,s,u,c,d,l,g,f,h,p,m,v,_,k,b,C,w,y,E,A,x,I,S,T,R,D,M,P,j,L,F,O,N,W,U,V,H,K,z,q,X,B,$,Q,G,J,Y,Z,ee,et,en,er,ei,eo,ea,es,eu,ec,ed,el,eg,ef,eh,ep,em,ev,e_,ek,eb,eC,ew,ey,eE,eA,ex,eI,eS,eT,eR,eD,eM,eP,ej,eL,eF,eO,eN,eW,eU,eV,eH,eK,ez,eq,eX,eB,e$,eQ,eG,eJ,eY,eZ,e0,e1,e2=n(24),e4=Object.defineProperty,e3=Object.getOwnPropertyDescriptor,e5=Object.getOwnPropertyNames,e6=Object.prototype.hasOwnProperty,e7=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of e5(t))e6.call(e,i)||i===n||e4(e,i,{get:()=>t[i],enumerable:!(r=e3(t,i))||r.enumerable});return e},e8={};e7(e8,e2,"default"),r&&e7(r,e2,"default");var e9=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=e8.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then(e=>{t=e}).then(t=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(e=>t)}};(i=J||(J={})).MIN_VALUE=-0x80000000,i.MAX_VALUE=0x7fffffff,(o=Y||(Y={})).MIN_VALUE=0,o.MAX_VALUE=0x7fffffff,(a=Z||(Z={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=Y.MAX_VALUE),t===Number.MAX_VALUE&&(t=Y.MAX_VALUE),{line:e,character:t}},a.is=function(e){return e0.objectLiteral(e)&&e0.uinteger(e.line)&&e0.uinteger(e.character)},(s=ee||(ee={})).create=function(e,t,n,r){if(e0.uinteger(e)&&e0.uinteger(t)&&e0.uinteger(n)&&e0.uinteger(r))return{start:Z.create(e,t),end:Z.create(n,r)};if(Z.is(e)&&Z.is(t))return{start:e,end:t};throw Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},s.is=function(e){return e0.objectLiteral(e)&&Z.is(e.start)&&Z.is(e.end)},(u=et||(et={})).create=function(e,t){return{uri:e,range:t}},u.is=function(e){return e0.defined(e)&&ee.is(e.range)&&(e0.string(e.uri)||e0.undefined(e.uri))},(c=en||(en={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},c.is=function(e){return e0.defined(e)&&ee.is(e.targetRange)&&e0.string(e.targetUri)&&(ee.is(e.targetSelectionRange)||e0.undefined(e.targetSelectionRange))&&(ee.is(e.originSelectionRange)||e0.undefined(e.originSelectionRange))},(d=er||(er={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},d.is=function(e){return e0.numberRange(e.red,0,1)&&e0.numberRange(e.green,0,1)&&e0.numberRange(e.blue,0,1)&&e0.numberRange(e.alpha,0,1)},(l=ei||(ei={})).create=function(e,t){return{range:e,color:t}},l.is=function(e){return ee.is(e.range)&&er.is(e.color)},(g=eo||(eo={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},g.is=function(e){return e0.string(e.label)&&(e0.undefined(e.textEdit)||eh.is(e))&&(e0.undefined(e.additionalTextEdits)||e0.typedArray(e.additionalTextEdits,eh.is))},(f=ea||(ea={})).Comment="comment",f.Imports="imports",f.Region="region",(h=es||(es={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return e0.defined(n)&&(o.startCharacter=n),e0.defined(r)&&(o.endCharacter=r),e0.defined(i)&&(o.kind=i),o},h.is=function(e){return e0.uinteger(e.startLine)&&e0.uinteger(e.startLine)&&(e0.undefined(e.startCharacter)||e0.uinteger(e.startCharacter))&&(e0.undefined(e.endCharacter)||e0.uinteger(e.endCharacter))&&(e0.undefined(e.kind)||e0.string(e.kind))},(p=eu||(eu={})).create=function(e,t){return{location:e,message:t}},p.is=function(e){return e0.defined(e)&&et.is(e.location)&&e0.string(e.message)},(m=ec||(ec={})).Error=1,m.Warning=2,m.Information=3,m.Hint=4,(v=ed||(ed={})).Unnecessary=1,v.Deprecated=2,(el||(el={})).is=function(e){return null!=e&&e0.string(e.href)},(_=eg||(eg={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return e0.defined(n)&&(a.severity=n),e0.defined(r)&&(a.code=r),e0.defined(i)&&(a.source=i),e0.defined(o)&&(a.relatedInformation=o),a},_.is=function(e){var t;return e0.defined(e)&&ee.is(e.range)&&e0.string(e.message)&&(e0.number(e.severity)||e0.undefined(e.severity))&&(e0.integer(e.code)||e0.string(e.code)||e0.undefined(e.code))&&(e0.undefined(e.codeDescription)||e0.string(null===(t=e.codeDescription)||void 0===t?void 0:t.href))&&(e0.string(e.source)||e0.undefined(e.source))&&(e0.undefined(e.relatedInformation)||e0.typedArray(e.relatedInformation,eu.is))},(k=ef||(ef={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return e0.defined(n)&&n.length>0&&(i.arguments=n),i},k.is=function(e){return e0.defined(e)&&e0.string(e.title)&&e0.string(e.command)},(b=eh||(eh={})).replace=function(e,t){return{range:e,newText:t}},b.insert=function(e,t){return{range:{start:e,end:e},newText:t}},b.del=function(e){return{range:e,newText:""}},b.is=function(e){return e0.objectLiteral(e)&&e0.string(e.newText)&&ee.is(e.range)},(C=ep||(ep={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},C.is=function(e){return void 0!==e&&e0.objectLiteral(e)&&e0.string(e.label)&&(e0.boolean(e.needsConfirmation)||void 0===e.needsConfirmation)&&(e0.string(e.description)||void 0===e.description)},(em||(em={})).is=function(e){return"string"==typeof e},(w=ev||(ev={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},w.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},w.del=function(e,t){return{range:e,newText:"",annotationId:t}},w.is=function(e){return eh.is(e)&&(ep.is(e.annotationId)||em.is(e.annotationId))},(y=e_||(e_={})).create=function(e,t){return{textDocument:e,edits:t}},y.is=function(e){return e0.defined(e)&&eA.is(e.textDocument)&&Array.isArray(e.edits)},(E=ek||(ek={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},E.is=function(e){return e&&"create"===e.kind&&e0.string(e.uri)&&(void 0===e.options||(void 0===e.options.overwrite||e0.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||e0.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||em.is(e.annotationId))},(A=eb||(eb={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i},A.is=function(e){return e&&"rename"===e.kind&&e0.string(e.oldUri)&&e0.string(e.newUri)&&(void 0===e.options||(void 0===e.options.overwrite||e0.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||e0.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||em.is(e.annotationId))},(x=eC||(eC={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},x.is=function(e){return e&&"delete"===e.kind&&e0.string(e.uri)&&(void 0===e.options||(void 0===e.options.recursive||e0.boolean(e.options.recursive))&&(void 0===e.options.ignoreIfNotExists||e0.boolean(e.options.ignoreIfNotExists)))&&(void 0===e.annotationId||em.is(e.annotationId))},(ew||(ew={})).is=function(e){return e&&(void 0!==e.changes||void 0!==e.documentChanges)&&(void 0===e.documentChanges||e.documentChanges.every(function(e){return e0.string(e.kind)?ek.is(e)||eb.is(e)||eC.is(e):e_.is(e)}))};var te=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=eh.insert(e,t):em.is(n)?(i=n,r=ev.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=ev.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=eh.replace(e,t):em.is(n)?(i=n,r=ev.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=ev.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=eh.del(e):em.is(t)?(r=t,n=ev.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=ev.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw Error("Text edit change is not configured to manage change annotations.")},e}(),tt=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(em.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw Error("Id "+n+" is already in use.");if(void 0===t)throw Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new tt(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(function(e){if(e_.is(e)){var n=new te(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new te(e.changes[n]);t._textEditChanges[n]=r})):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(eA.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version},n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new te(r,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[e];if(!n){var r=[];this._workspaceEdit.changes[e]=r,n=new te(r),this._textEditChanges[e]=n}return n},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new tt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){var r,i,o;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(ep.is(t)||em.is(t)?r=t:n=t,void 0===r?i=ek.create(e,n):(o=em.is(r)?r:this._changeAnnotations.manage(r),i=ek.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){var i,o,a;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(ep.is(n)||em.is(n)?i=n:r=n,void 0===i?o=eb.create(e,t,r):(a=em.is(i)?i:this._changeAnnotations.manage(i),o=eb.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){var r,i,o;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(ep.is(t)||em.is(t)?r=t:n=t,void 0===r?i=eC.create(e,n):(o=em.is(r)?r:this._changeAnnotations.manage(r),i=eC.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(I=ey||(ey={})).create=function(e){return{uri:e}},I.is=function(e){return e0.defined(e)&&e0.string(e.uri)},(S=eE||(eE={})).create=function(e,t){return{uri:e,version:t}},S.is=function(e){return e0.defined(e)&&e0.string(e.uri)&&e0.integer(e.version)},(T=eA||(eA={})).create=function(e,t){return{uri:e,version:t}},T.is=function(e){return e0.defined(e)&&e0.string(e.uri)&&(null===e.version||e0.integer(e.version))},(R=ex||(ex={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},R.is=function(e){return e0.defined(e)&&e0.string(e.uri)&&e0.string(e.languageId)&&e0.integer(e.version)&&e0.string(e.text)},(D=eI||(eI={})).PlainText="plaintext",D.Markdown="markdown",(M=eI||(eI={})).is=function(e){return e===M.PlainText||e===M.Markdown},(eS||(eS={})).is=function(e){return e0.objectLiteral(e)&&eI.is(e.kind)&&e0.string(e.value)},(P=eT||(eT={})).Text=1,P.Method=2,P.Function=3,P.Constructor=4,P.Field=5,P.Variable=6,P.Class=7,P.Interface=8,P.Module=9,P.Property=10,P.Unit=11,P.Value=12,P.Enum=13,P.Keyword=14,P.Snippet=15,P.Color=16,P.File=17,P.Reference=18,P.Folder=19,P.EnumMember=20,P.Constant=21,P.Struct=22,P.Event=23,P.Operator=24,P.TypeParameter=25,(j=eR||(eR={})).PlainText=1,j.Snippet=2,(eD||(eD={})).Deprecated=1,(L=eM||(eM={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},L.is=function(e){return e&&e0.string(e.newText)&&ee.is(e.insert)&&ee.is(e.replace)},(F=eP||(eP={})).asIs=1,F.adjustIndentation=2,(ej||(ej={})).create=function(e){return{label:e}},(eL||(eL={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(O=eF||(eF={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},O.is=function(e){return e0.string(e)||e0.objectLiteral(e)&&e0.string(e.language)&&e0.string(e.value)},(eO||(eO={})).is=function(e){return!!e&&e0.objectLiteral(e)&&(eS.is(e.contents)||eF.is(e.contents)||e0.typedArray(e.contents,eF.is))&&(void 0===e.range||ee.is(e.range))},(eN||(eN={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(eW||(eW={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return e0.defined(t)&&(i.documentation=t),e0.defined(n)?i.parameters=n:i.parameters=[],i},(N=eU||(eU={})).Text=1,N.Read=2,N.Write=3,(eV||(eV={})).create=function(e,t){var n={range:e};return e0.number(t)&&(n.kind=t),n},(W=eH||(eH={})).File=1,W.Module=2,W.Namespace=3,W.Package=4,W.Class=5,W.Method=6,W.Property=7,W.Field=8,W.Constructor=9,W.Enum=10,W.Interface=11,W.Function=12,W.Variable=13,W.Constant=14,W.String=15,W.Number=16,W.Boolean=17,W.Array=18,W.Object=19,W.Key=20,W.Null=21,W.EnumMember=22,W.Struct=23,W.Event=24,W.Operator=25,W.TypeParameter=26,(eK||(eK={})).Deprecated=1,(ez||(ez={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(U=eq||(eq={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},U.is=function(e){return e&&e0.string(e.name)&&e0.number(e.kind)&&ee.is(e.range)&&ee.is(e.selectionRange)&&(void 0===e.detail||e0.string(e.detail))&&(void 0===e.deprecated||e0.boolean(e.deprecated))&&(void 0===e.children||Array.isArray(e.children))&&(void 0===e.tags||Array.isArray(e.tags))},(V=eX||(eX={})).Empty="",V.QuickFix="quickfix",V.Refactor="refactor",V.RefactorExtract="refactor.extract",V.RefactorInline="refactor.inline",V.RefactorRewrite="refactor.rewrite",V.Source="source",V.SourceOrganizeImports="source.organizeImports",V.SourceFixAll="source.fixAll",(H=eB||(eB={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},H.is=function(e){return e0.defined(e)&&e0.typedArray(e.diagnostics,eg.is)&&(void 0===e.only||e0.typedArray(e.only,e0.string))},(K=e$||(e$={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):ef.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},K.is=function(e){return e&&e0.string(e.title)&&(void 0===e.diagnostics||e0.typedArray(e.diagnostics,eg.is))&&(void 0===e.kind||e0.string(e.kind))&&(void 0!==e.edit||void 0!==e.command)&&(void 0===e.command||ef.is(e.command))&&(void 0===e.isPreferred||e0.boolean(e.isPreferred))&&(void 0===e.edit||ew.is(e.edit))},(z=eQ||(eQ={})).create=function(e,t){var n={range:e};return e0.defined(t)&&(n.data=t),n},z.is=function(e){return e0.defined(e)&&ee.is(e.range)&&(e0.undefined(e.command)||ef.is(e.command))},(q=eG||(eG={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},q.is=function(e){return e0.defined(e)&&e0.uinteger(e.tabSize)&&e0.boolean(e.insertSpaces)},(X=eJ||(eJ={})).create=function(e,t,n){return{range:e,target:t,data:n}},X.is=function(e){return e0.defined(e)&&ee.is(e.range)&&(e0.undefined(e.target)||e0.string(e.target))},(B=eY||(eY={})).create=function(e,t){return{range:e,parent:t}},B.is=function(e){return void 0!==e&&ee.is(e.range)&&(void 0===e.parent||B.is(e.parent))},($=eZ||(eZ={})).create=function(e,t,n,r){return new tn(e,t,n,r)},$.is=function(e){return!!(e0.defined(e)&&e0.string(e.uri)&&(e0.undefined(e.languageId)||e0.string(e.languageId))&&e0.uinteger(e.lineCount)&&e0.func(e.getText)&&e0.func(e.positionAt)&&e0.func(e.offsetAt))},$.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;)0>=n(i[a],o[s])?t[u++]=i[a++]:t[u++]=o[s++];for(;a<i.length;)t[u++]=i[a++];for(;s<o.length;)t[u++]=o[s++];return t}(t,function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n}),i=n.length,o=r.length-1;o>=0;o--){var a=r[o],s=e.offsetAt(a.range.start),u=e.offsetAt(a.range.end);if(u<=i)n=n.substring(0,s)+a.newText+n.substring(u,n.length);else throw Error("Overlapping edit");i=s}return n};var tn=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return Z.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return Z.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();Q=e0||(e0={}),G=Object.prototype.toString,Q.defined=function(e){return void 0!==e},Q.undefined=function(e){return void 0===e},Q.boolean=function(e){return!0===e||!1===e},Q.string=function(e){return"[object String]"===G.call(e)},Q.number=function(e){return"[object Number]"===G.call(e)},Q.numberRange=function(e,t,n){return"[object Number]"===G.call(e)&&t<=e&&e<=n},Q.integer=function(e){return"[object Number]"===G.call(e)&&-0x80000000<=e&&e<=0x7fffffff},Q.uinteger=function(e){return"[object Number]"===G.call(e)&&0<=e&&e<=0x7fffffff},Q.func=function(e){return"[object Function]"===G.call(e)},Q.objectLiteral=function(e){return null!==e&&"object"==typeof e},Q.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var tr=class{constructor(e,t,n){this._languageId=e,this._worker=t;let r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent(()=>{window.clearTimeout(t),t=window.setTimeout(()=>this._doValidate(e.uri,n),500)}),this._doValidate(e.uri,n))},i=e=>{e8.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(e8.editor.onDidCreateModel(r)),this._disposables.push(e8.editor.onWillDisposeModel(i)),this._disposables.push(e8.editor.onDidChangeModelLanguage(e=>{i(e.model),r(e.model)})),this._disposables.push(n(e=>{e8.editor.getModels().forEach(e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))})})),this._disposables.push({dispose:()=>{for(let e in e8.editor.getModels().forEach(i),this._listener)this._listener[e].dispose()}}),e8.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,t){this._worker(e).then(t=>t.doValidation(e.toString())).then(n=>{let r=n.map(e=>{var t,n;let r;return t=0,r="number"==typeof(n=e).code?String(n.code):n.code,{severity:function(e){switch(e){case ec.Error:return e8.MarkerSeverity.Error;case ec.Warning:return e8.MarkerSeverity.Warning;case ec.Information:return e8.MarkerSeverity.Info;case ec.Hint:return e8.MarkerSeverity.Hint;default:return e8.MarkerSeverity.Info}}(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:r,source:n.source}}),i=e8.editor.getModel(e);i&&i.getLanguageId()===t&&e8.editor.setModelMarkers(i,t,r)}).then(void 0,e=>{console.error(e)})}},ti=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doComplete(i.toString(),to(t))).then(n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new e8.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map(e=>{var t,n;let r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(t=e.command)&&"editor.action.triggerSuggest"===t.command?{id:t.command,title:t.title,arguments:t.arguments}:void 0,range:i,kind:function(e){let t=e8.languages.CompletionItemKind;switch(e){case eT.Text:return t.Text;case eT.Method:return t.Method;case eT.Function:return t.Function;case eT.Constructor:return t.Constructor;case eT.Field:return t.Field;case eT.Variable:return t.Variable;case eT.Class:return t.Class;case eT.Interface:return t.Interface;case eT.Module:return t.Module;case eT.Property:break;case eT.Unit:return t.Unit;case eT.Value:return t.Value;case eT.Enum:return t.Enum;case eT.Keyword:return t.Keyword;case eT.Snippet:return t.Snippet;case eT.Color:return t.Color;case eT.File:return t.File;case eT.Reference:return t.Reference}return t.Property}(e.kind)};return e.textEdit&&(void 0!==(n=e.textEdit).insert&&void 0!==n.replace?r.range={insert:ts(e.textEdit.insert),replace:ts(e.textEdit.replace)}:r.range=ts(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(tu)),e.insertTextFormat===eR.Snippet&&(r.insertTextRules=e8.languages.CompletionItemInsertTextRule.InsertAsSnippet),r});return{isIncomplete:n.isIncomplete,suggestions:o}})}};function to(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ta(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function ts(e){if(e)return new e8.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function tu(e){if(e)return{range:ts(e.range),text:e.newText}}var tc=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.doHover(r.toString(),to(t))).then(e=>{if(e){var t;return{range:ts(e.range),contents:(t=e.contents)?Array.isArray(t)?t.map(td):[td(t)]:void 0}}})}};function td(e){return"string"==typeof e?{value:e}:e&&"object"==typeof e&&"string"==typeof e.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}var tl=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDocumentHighlights(r.toString(),to(t))).then(e=>{if(e)return e.map(e=>({range:ts(e.range),kind:function(e){switch(e){case eU.Read:return e8.languages.DocumentHighlightKind.Read;case eU.Write:return e8.languages.DocumentHighlightKind.Write;case eU.Text:}return e8.languages.DocumentHighlightKind.Text}(e.kind)}))})}},tg=class{constructor(e){this._worker=e}provideDefinition(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDefinition(r.toString(),to(t))).then(e=>{if(e)return[tf(e)]})}};function tf(e){return{uri:e8.Uri.parse(e.uri),range:ts(e.range)}}var th=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.findReferences(i.toString(),to(t))).then(e=>{if(e)return e.map(tf)})}},tp=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doRename(i.toString(),to(t),n)).then(e=>(function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=e8.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:ts(i.range),text:i.newText}})}return{edits:t}})(e))}},tm=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentSymbols(n.toString())).then(e=>{if(e)return e.map(e=>({name:e.name,detail:"",containerName:e.containerName,kind:function(e){let t=e8.languages.SymbolKind;switch(e){case eH.File:return t.Array;case eH.Module:return t.Module;case eH.Namespace:return t.Namespace;case eH.Package:return t.Package;case eH.Class:return t.Class;case eH.Method:return t.Method;case eH.Property:return t.Property;case eH.Field:return t.Field;case eH.Constructor:return t.Constructor;case eH.Enum:return t.Enum;case eH.Interface:return t.Interface;case eH.Function:break;case eH.Variable:return t.Variable;case eH.Constant:return t.Constant;case eH.String:return t.String;case eH.Number:return t.Number;case eH.Boolean:return t.Boolean;case eH.Array:return t.Array}return t.Function}(e.kind),range:ts(e.location.range),selectionRange:ts(e.location.range),tags:[]}))})}},tv=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentLinks(n.toString())).then(e=>{if(e)return{links:e.map(e=>({range:ts(e.range),url:e.target}))}})}},t_=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.format(r.toString(),null,tb(t)).then(e=>{if(e&&0!==e.length)return e.map(tu)}))}},tk=class{constructor(e){this._worker=e}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.format(i.toString(),ta(t),tb(n)).then(e=>{if(e&&0!==e.length)return e.map(tu)}))}};function tb(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var tC=class{constructor(e){this._worker=e}provideDocumentColors(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentColors(n.toString())).then(e=>{if(e)return e.map(e=>({color:e.color,range:ts(e.range)}))})}provideColorPresentations(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getColorPresentations(r.toString(),t.color,ta(t.range))).then(e=>{if(e)return e.map(e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=tu(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(tu)),t})})}},tw=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getFoldingRanges(r.toString(),t)).then(e=>{if(e)return e.map(e=>{let t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case ea.Comment:return e8.languages.FoldingRangeKind.Comment;case ea.Imports:return e8.languages.FoldingRangeKind.Imports;case ea.Region:return e8.languages.FoldingRangeKind.Region}}(e.kind)),t})})}},ty=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getSelectionRanges(r.toString(),t.map(to))).then(e=>{if(e)return e.map(e=>{let t=[];for(;e;)t.push({range:ts(e.range)}),e=e.parent;return t})})}};function tE(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function tA(e){return 10===e||13===e||8232===e||8233===e}function tx(e){return e>=48&&e<=57}(e1||(e1={})).DEFAULT={allowTrailingComma:!1};var tI=function(e,t){void 0===t&&(t=!1);var n=e.length,r=0,i="",o=0,a=16,s=0,u=0,c=0,d=0,l=0;function g(){if(i="",l=0,o=r,u=s,d=c,r>=n)return o=n,a=17;var t=e.charCodeAt(r);if(tE(t)){do r++,i+=String.fromCharCode(t),t=e.charCodeAt(r);while(tE(t));return a=15}if(tA(t))return r++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,c=r,a=14;switch(t){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var t="",i=r;;){if(r>=n){t+=e.substring(i,r),l=2;break}var o=e.charCodeAt(r);if(34===o){t+=e.substring(i,r),r++;break}if(92===o){if(t+=e.substring(i,r),++r>=n){l=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="	";break;case 117:var a=function(t,n){for(var i=0,o=0;i<4||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else if(a>=97&&a<=102)o=16*o+a-97+10;else break;r++,i++}return i<4&&(o=-1),o}(4,!0);a>=0?t+=String.fromCharCode(a):l=4;break;default:l=5}i=r;continue}if(o>=0&&o<=31){if(tA(o)){t+=e.substring(i,r),l=2;break}l=6}r++}return t}(),a=10;case 47:var g=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!tA(e.charCodeAt(r));)r++;return i=e.substring(g,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var f=n-1,h=!1;r<f;){var p=e.charCodeAt(r);if(42===p&&47===e.charCodeAt(r+1)){r+=2,h=!0;break}r++,tA(p)&&(13===p&&10===e.charCodeAt(r)&&r++,s++,c=r)}return h||(r++,l=1),i=e.substring(g,r),a=13}return i+=String.fromCharCode(t),r++,a=16;case 45:if(i+=String.fromCharCode(t),++r===n||!tx(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&tx(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&tx(e.charCodeAt(r))))return l=3,e.substring(t,r);for(r++;r<e.length&&tx(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r))){if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&tx(e.charCodeAt(r))){for(r++;r<e.length&&tx(e.charCodeAt(r));)r++;n=r}else l=3}return e.substring(t,n)}(),a=11;default:for(;r<n&&function(e){if(tE(e)||tA(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}(t);)r++,t=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),r++,a=16}}return{setPosition:function(e){r=e,i="",o=0,a=16,l=0},getPosition:function(){return r},scan:t?function(){var e;do e=g();while(e>=12&&e<=15);return e}:g,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return l}}},tS="delimiter.bracket.json",tT="delimiter.array.json",tR=class{constructor(e,t){this.parent=e,this.type=t}static pop(e){return e?e.parent:null}static push(e,t){return new tR(e,t)}static equals(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t&&e!==t;){if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0}},tD=class{_state;scanError;lastWasColon;parents;constructor(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}clone(){return new tD(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this||!!e&&e instanceof tD&&this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&tR.equals(this.parents,e.parents)}getStateData(){return this._state}setStateData(e){this._state=e}},tM=class extends tr{constructor(e,t,n){super(e,t,n.onDidChange),this._disposables.push(e8.editor.onWillDisposeModel(e=>{this._resetSchema(e.uri)})),this._disposables.push(e8.editor.onDidChangeModelLanguage(e=>{this._resetSchema(e.model.uri)}))}_resetSchema(e){this._worker().then(t=>{t.resetSchema(e.toString())})}};function tP(e){let t=[],n=[],r=new e9(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);function o(){let{languageId:t,modeConfiguration:r}=e;if(tL(n),r.documentFormattingEdits&&n.push(e8.languages.registerDocumentFormattingEditProvider(t,new t_(i))),r.documentRangeFormattingEdits&&n.push(e8.languages.registerDocumentRangeFormattingEditProvider(t,new tk(i))),r.completionItems&&n.push(e8.languages.registerCompletionItemProvider(t,new ti(i,[" ",":",'"']))),r.hovers&&n.push(e8.languages.registerHoverProvider(t,new tc(i))),r.documentSymbols&&n.push(e8.languages.registerDocumentSymbolProvider(t,new tm(i))),r.tokens)n.push(e8.languages.setTokensProvider(t,{getInitialState:()=>new tD(null,null,!1,null),tokenize:(e,t)=>(function(e,t,n,r=0){let i=0,o=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2}let a=tI(t),s=n.lastWasColon,u=n.parents,c={tokens:[],endState:n.clone()};for(;;){let d=r+a.getPosition(),l="",g=a.scan();if(17===g)break;if(d===r+a.getPosition())throw Error("Scanner did not advance, next 3 characters are: "+t.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,g){case 1:u=tR.push(u,0),l=tS,s=!1;break;case 2:u=tR.pop(u),l=tS,s=!1;break;case 3:u=tR.push(u,1),l=tT,s=!1;break;case 4:u=tR.pop(u),l=tT,s=!1;break;case 6:l="delimiter.colon.json",s=!0;break;case 5:l="delimiter.comma.json",s=!1;break;case 8:case 9:case 7:l="keyword.json",s=!1;break;case 10:let f=1===(u?u.type:0);l=s||f?"string.value.json":"string.key.json",s=!1;break;case 11:l="number.json",s=!1}if(e)switch(g){case 12:l="comment.line.json";break;case 13:l="comment.block.json"}c.endState=new tD(n.getStateData(),a.getTokenError(),s,u),c.tokens.push({startIndex:d,scopes:l})}return c})(!0,e,t)}));r.colors&&n.push(e8.languages.registerColorProvider(t,new tC(i))),r.foldingRanges&&n.push(e8.languages.registerFoldingRangeProvider(t,new tw(i))),r.diagnostics&&n.push(new tM(t,i,e)),r.selectionRanges&&n.push(e8.languages.registerSelectionRangeProvider(t,new ty(i)))}o(),t.push(e8.languages.setLanguageConfiguration(e.languageId,tF));let a=e.modeConfiguration;return e.onDidChange(e=>{e.modeConfiguration!==a&&(a=e.modeConfiguration,o())}),t.push(tj(n)),tj(t)}function tj(e){return{dispose:()=>tL(e)}}function tL(e){for(;e.length;)e.pop().dispose()}var tF={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);