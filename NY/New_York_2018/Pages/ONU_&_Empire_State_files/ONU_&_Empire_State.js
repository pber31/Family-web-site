// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreatePhotocast("http://philippeberard.toile-libre.org/ny/New_York/New_York_2018/Pages/ONU_%26_Empire_State_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippeberard.toile-libre.org/ny/New_York/New_York_2018/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippeberard.toile-libre.org/ny/New_York/New_York_2018/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(5,new IWSize(206,206),new IWSize(206,64),new IWSize(222,285),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,null,'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('ONU_&_Empire_State_files/ONU_&_Empire_StateMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
