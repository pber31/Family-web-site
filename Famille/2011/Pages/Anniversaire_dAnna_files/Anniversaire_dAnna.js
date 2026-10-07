// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id4()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2011/Pages/Anniversaire_dAnna_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://philippe.berard1.free.fr/Famille/2011/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://philippe.berard1.free.fr/Famille/2011/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,16),new IWSize(229,222),27,27,0,new IWSize(12,18)),new IWPhotoFrame([IWCreateImage('Anniversaire_dAnna_files/FormalShadow_01.png'),IWCreateImage('Anniversaire_dAnna_files/FormalShadow_02.png'),IWCreateImage('Anniversaire_dAnna_files/FormalShadow_03.png'),IWCreateImage('Anniversaire_dAnna_files/FormalShadow_06.png'),IWCreateImage('Anniversaire_dAnna_files/FormalShadow_12.png'),IWCreateImage('Anniversaire_dAnna_files/FormalShadow_11.png'),IWCreateImage('Anniversaire_dAnna_files/FormalShadow_10.png'),IWCreateImage('Anniversaire_dAnna_files/FormalShadow_04.png')],null,2,0.400000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Anniversaire_dAnna_files/Anniversaire_dAnnaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
