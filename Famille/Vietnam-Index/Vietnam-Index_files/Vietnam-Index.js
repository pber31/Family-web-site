// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id1()
{return IWCreateMediaCollection("http://philippe.berard1.free.fr/Famille/Vietnam-Index/Vietnam-Index_files/rss.xml",true,255,["Pas encore de photos","%d photo","%d photos"],["","%d plan","%d plans"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://philippe.berard1.free.fr/Famille/Vietnam-Index',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget8'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://philippe.berard1.free.fr/Famille/Vietnam-Index',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(316,237),new IWSize(316,46),new IWSize(379,298),27,27,0,new IWSize(79,62)),new IWPhotoFrame([IWCreateImage('Vietnam-Index_files/hardcover-1_ul.png'),IWCreateImage('Vietnam-Index_files/hardcover-1_top.jpg'),IWCreateImage('Vietnam-Index_files/hardcover-1_ur.png'),IWCreateImage('Vietnam-Index_files/hardcover-1_right.png'),IWCreateImage('Vietnam-Index_files/hardcover-1_lr.png'),IWCreateImage('Vietnam-Index_files/hardcover-1_bottom.png'),IWCreateImage('Vietnam-Index_files/hardcover-1_ll.png'),IWCreateImage('Vietnam-Index_files/hardcover-1_left.png')],null,0,0.666667,0.000000,0.000000,0.000000,0.000000,62.000000,39.000000,55.000000,53.000000,1.000000,1.000000,1.000000,1.000000,null,null,null,0.500000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget8',null,'widget9',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Vietnam-Index_files/Vietnam-IndexMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();fixupIECSS3Opacity('id2');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
