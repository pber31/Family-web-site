// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreateMediaCollection("http://philippe.berard1.free.fr/Famille/2009/2009_files/rss.xml",false,1,["Pas encore de photos","%d photo","%d photos"],["","%d plan","%d plans"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2009',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget16'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2009',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(206,154),new IWSize(206,32),new IWSize(206,202),27,27,0,new IWSize(48,43)),new IWPhotoFrame([IWCreateImage('2009_files/spiralbook-creme_ul.png'),IWCreateImage('2009_files/spiralbook-creme_top.png'),IWCreateImage('2009_files/spiralbook-creme_ur.png'),IWCreateImage('2009_files/spiralbook-creme_right.png'),IWCreateImage('2009_files/spiralbook-creme_lr.png'),IWCreateImage('2009_files/spiralbook-creme_bottom.png'),IWCreateImage('2009_files/spiralbook-creme_ll.png'),IWCreateImage('2009_files/spiralbook-creme_left.png')],null,1,0.444444,15.000000,0.000000,0.000000,0.000000,83.000000,40.000000,40.000000,55.000000,106.000000,40.000000,40.000000,32.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget16',null,'widget17',{showTitle:true,showMetric:true})});}
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
loadMozillaCSS('2009_files/2009Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
