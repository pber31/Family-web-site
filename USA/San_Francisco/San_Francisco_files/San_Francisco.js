// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id1()
{return IWCreateMediaCollection("http://philippeberard.toile-libre.org/usa/USA/San_Francisco/San_Francisco_files/rss.xml",false,1,["Pas encore de photos","%d photo","%d photos"],["","%d plan","%d plans"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://philippeberard.toile-libre.org/usa/USA/San_Francisco',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget13'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://philippeberard.toile-libre.org/usa/USA/San_Francisco',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(330,248),new IWSize(330,43),new IWSize(396,306),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget13',null,'widget14',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,202),url:'San_Francisco_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'San_Francisco_files/stroke_1.png'},{rect:new IWRect(1,-1,1140,2),url:'San_Francisco_files/stroke_2.png'},{rect:new IWRect(1141,-1,2,2),url:'San_Francisco_files/stroke_3.png'},{rect:new IWRect(1141,1,2,202),url:'San_Francisco_files/stroke_4.png'},{rect:new IWRect(1141,203,2,2),url:'San_Francisco_files/stroke_5.png'},{rect:new IWRect(1,203,1140,2),url:'San_Francisco_files/stroke_6.png'},{rect:new IWRect(-1,203,2,2),url:'San_Francisco_files/stroke_7.png'}],new IWSize(1142,204))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('San_Francisco_files/San_FranciscoMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
