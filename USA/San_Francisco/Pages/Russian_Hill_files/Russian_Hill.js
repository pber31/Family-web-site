// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id1()
{return IWCreatePhotocast("http://philippeberard.toile-libre.org/usa/USA/San_Francisco/Pages/Russian_Hill_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://philippeberard.toile-libre.org/usa/USA/San_Francisco/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://philippeberard.toile-libre.org/usa/USA/San_Francisco/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(6,new IWSize(165,165),new IWSize(165,30),new IWSize(198,210),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,null,'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Russian_Hill_files/Russian_HillMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
