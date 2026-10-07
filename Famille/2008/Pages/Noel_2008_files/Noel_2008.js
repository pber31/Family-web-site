// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id4()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2008/Pages/Noel_2008_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://philippe.berard1.free.fr/Famille/2008/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://philippe.berard1.free.fr/Famille/2008/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(4,new IWSize(153,153),new IWSize(153,60),new IWSize(158,228),27,27,0,new IWSize(14,14)),new IWPhotoFrame([IWCreateImage('Noel_2008_files/Hardcover_bevel_01.png'),IWCreateImage('Noel_2008_files/Hardcover_bevel_02.png'),IWCreateImage('Noel_2008_files/Hardcover_bevel_03.png'),IWCreateImage('Noel_2008_files/Hardcover_bevel_06.png'),IWCreateImage('Noel_2008_files/Hardcover_bevel_09.png'),IWCreateImage('Noel_2008_files/Hardcover_bevel_08.png'),IWCreateImage('Noel_2008_files/Hardcover_bevel_07.png'),IWCreateImage('Noel_2008_files/Hardcover_bevel_04.png')],null,0,0.400000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:0,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,256),url:'Noel_2008_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Noel_2008_files/stroke_1.png'},{rect:new IWRect(1,-1,850,2),url:'Noel_2008_files/stroke_2.png'},{rect:new IWRect(851,-1,2,2),url:'Noel_2008_files/stroke_3.png'},{rect:new IWRect(851,1,2,256),url:'Noel_2008_files/stroke_4.png'},{rect:new IWRect(851,257,2,2),url:'Noel_2008_files/stroke_5.png'},{rect:new IWRect(1,257,850,2),url:'Noel_2008_files/stroke_6.png'},{rect:new IWRect(-1,257,2,2),url:'Noel_2008_files/stroke_7.png'}],new IWSize(852,258))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Noel_2008_files/Noel_2008Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}
