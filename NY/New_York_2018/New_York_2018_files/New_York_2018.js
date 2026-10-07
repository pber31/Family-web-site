// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreateMediaCollection("http://philippeberard.toile-libre.org/ny/New_York/New_York_2018/New_York_2018_files/rss.xml",true,255,["Pas encore de photos","%d photo","%d photos"],["","%d plan","%d plans"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippeberard.toile-libre.org/ny/New_York/New_York_2018',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget11'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippeberard.toile-libre.org/ny/New_York/New_York_2018',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(238,178),new IWSize(238,39),new IWSize(297,232),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget11',null,'widget12',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('New_York_2018_files/New_York_2018Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
