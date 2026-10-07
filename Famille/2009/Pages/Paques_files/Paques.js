// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2009/Pages/Paques_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2009/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2009/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(174,174),new IWSize(174,51),new IWSize(209,240),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-6,1,8,171),url:'Paques_files/stroke.png'},{rect:new IWRect(-6,-6,8,7),url:'Paques_files/stroke_1.png'},{rect:new IWRect(2,-6,169,7),url:'Paques_files/stroke_2.png'},{rect:new IWRect(171,-6,9,7),url:'Paques_files/stroke_3.png'},{rect:new IWRect(171,1,9,171),url:'Paques_files/stroke_4.png'},{rect:new IWRect(171,172,9,8),url:'Paques_files/stroke_5.png'},{rect:new IWRect(2,172,169,8),url:'Paques_files/stroke_6.png'},{rect:new IWRect(-6,172,8,8),url:'Paques_files/stroke_7.png'}],new IWSize(174,174)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:0,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Paques_files/PaquesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
