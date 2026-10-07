// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreateMediaCollection("http://philippe.berard1.free.fr/Famille/2012/2012_files/rss.xml",true,255,["Pas encore de photos","%d photo","%d photos"],["","%d plan","%d plans"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2012',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget17'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2012',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(165,124),new IWSize(165,32),new IWSize(206,171),27,27,0,new IWSize(60,49)),new IWPhotoFrame([IWCreateImage('2012_files/spiralboook_ul.png'),IWCreateImage('2012_files/spiralboook_top.png'),IWCreateImage('2012_files/spiralboook_ur.png'),IWCreateImage('2012_files/spiralboook_right.png'),IWCreateImage('2012_files/spiralboook_lr.png'),IWCreateImage('2012_files/spiralboook_bottom.png'),IWCreateImage('2012_files/spiralboook_ll.png'),IWCreateImage('2012_files/spiralboook_left.png')],null,1,0.533333,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget17',null,'widget18',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('2012_files/2012Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
