// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2009/Pages/Samuel_et_Thomas_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2009/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2009/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(164,164),new IWSize(164,14),new IWSize(197,193),27,27,0,new IWSize(8,8)),new IWPhotoFrame([IWCreateImage('Samuel_et_Thomas_files/Headlines_01.png'),IWCreateImage('Samuel_et_Thomas_files/Headlines_02.png'),IWCreateImage('Samuel_et_Thomas_files/Headlines_03.png'),IWCreateImage('Samuel_et_Thomas_files/Headlines_06.png'),IWCreateImage('Samuel_et_Thomas_files/Headlines_09.png'),IWCreateImage('Samuel_et_Thomas_files/Headlines_08.png'),IWCreateImage('Samuel_et_Thomas_files/Headlines_07.png'),IWCreateImage('Samuel_et_Thomas_files/Headlines_04.png')],null,0,0.666667,-3.000000,-3.000000,-3.000000,-3.000000,2.000000,2.000000,2.000000,2.000000,4.000000,4.000000,4.000000,4.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-4,5,8,61),url:'Samuel_et_Thomas_files/stroke.png'},{rect:new IWRect(-7,-5,11,10),url:'Samuel_et_Thomas_files/stroke_1.png'},{rect:new IWRect(4,-5,595,10),url:'Samuel_et_Thomas_files/stroke_2.png'},{rect:new IWRect(599,-7,9,12),url:'Samuel_et_Thomas_files/stroke_3.png'},{rect:new IWRect(599,5,7,61),url:'Samuel_et_Thomas_files/stroke_4.png'},{rect:new IWRect(599,66,9,7),url:'Samuel_et_Thomas_files/stroke_5.png'},{rect:new IWRect(4,66,595,7),url:'Samuel_et_Thomas_files/stroke_6.png'},{rect:new IWRect(-6,66,10,5),url:'Samuel_et_Thomas_files/stroke_7.png'}],new IWSize(604,70))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Samuel_et_Thomas_files/Samuel_et_ThomasMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
