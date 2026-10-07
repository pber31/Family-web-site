// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2013/Pages/Anniv_Elise_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2013/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2013/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(227,227),new IWSize(227,62),new IWSize(227,304),27,27,0,new IWSize(32,28)),new IWPhotoFrame([IWCreateImage('Anniv_Elise_files/highlighter_ul.png'),IWCreateImage('Anniv_Elise_files/highlighter_top.png'),IWCreateImage('Anniv_Elise_files/highlighter_ur.png'),IWCreateImage('Anniv_Elise_files/highlighter_right.png'),IWCreateImage('Anniv_Elise_files/highlighter_lr.png'),IWCreateImage('Anniv_Elise_files/highlighter_bottom.png'),IWCreateImage('Anniv_Elise_files/highlighter_ll.png'),IWCreateImage('Anniv_Elise_files/highlighter_left.png')],null,1,1.000000,17.000000,24.000000,17.000000,24.000000,33.000000,38.000000,33.000000,38.000000,40.000000,40.000000,40.000000,40.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Anniv_Elise_files/Anniv_EliseMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
