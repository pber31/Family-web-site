// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id2()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2009/Pages/Anniversaire_dElise_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2009/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://philippe.berard1.free.fr/Famille/2009/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(183,183),new IWSize(183,28),new IWSize(219,226),27,27,0,new IWSize(12,13)),new IWPhotoFrame([IWCreateImage('Anniversaire_dElise_files/Silkscreen_shape_01.png'),IWCreateImage('Anniversaire_dElise_files/Silkscreen_shape_02.png'),IWCreateImage('Anniversaire_dElise_files/Silkscreen_shape_03.png'),IWCreateImage('Anniversaire_dElise_files/Silkscreen_shape_06.png'),IWCreateImage('Anniversaire_dElise_files/Silkscreen_shape_09.png'),IWCreateImage('Anniversaire_dElise_files/Silkscreen_shape_08.png'),IWCreateImage('Anniversaire_dElise_files/Silkscreen_shape_07.png'),IWCreateImage('Anniversaire_dElise_files/Silkscreen_shape_04.png')],null,2,0.597368,0.000000,0.000000,0.000000,0.000000,9.000000,11.000000,9.000000,9.000000,258.000000,354.000000,258.000000,354.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Anniversaire_dElise_files/Anniversaire_dEliseMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
