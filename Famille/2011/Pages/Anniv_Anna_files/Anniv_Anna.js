// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2011/Pages/Anniv_Anna_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2011/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2011/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(180,180),new IWSize(180,42),new IWSize(216,237),27,27,0,new IWSize(30,30)),new IWPhotoFrame([IWCreateImage('Anniv_Anna_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Anniv_Anna_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Anniv_Anna_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Anniv_Anna_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Anniv_Anna_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Anniv_Anna_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Anniv_Anna_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Anniv_Anna_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.700000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Anniv_Anna_files/Anniv_AnnaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
