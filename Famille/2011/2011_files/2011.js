// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreateMediaCollection("http://philippe.berard1.free.fr/Famille/2011/2011_files/rss.xml",true,255,["Pas encore de photos","%d photo","%d photos"],["","%d plan","%d plans"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2011',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget23'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2011',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(145,109),new IWSize(145,26),new IWSize(160,150),27,27,0,new IWSize(10,10)),new IWPhotoFrame([IWCreateImage('2011_files/Formal_inset_01.png'),IWCreateImage('2011_files/Formal_inset_02.png'),IWCreateImage('2011_files/Formal_inset_03.png'),IWCreateImage('2011_files/Formal_inset_06.png'),IWCreateImage('2011_files/Formal_inset_09.png'),IWCreateImage('2011_files/Formal_inset_08.png'),IWCreateImage('2011_files/Formal_inset_07.png'),IWCreateImage('2011_files/Formal_inset_04.png')],null,0,0.360000,1.000000,1.000000,1.000000,1.000000,14.000000,14.000000,14.000000,14.000000,191.000000,262.000000,191.000000,262.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget23',null,'widget24',{showTitle:true,showMetric:true})});}
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
loadMozillaCSS('2011_files/2011Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
