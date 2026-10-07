// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id4()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2015/Pages/Les_Cousines_files/rss.xml",false);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://philippe.berard1.free.fr/Famille/2015/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://philippe.berard1.free.fr/Famille/2015/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(208,208),new IWSize(208,0),new IWSize(229,223),27,27,0,new IWSize(16,16)),new IWPhotoFrame([IWCreateImage('Les_Cousines_files/Formal_inset_01.png'),IWCreateImage('Les_Cousines_files/Formal_inset_02.png'),IWCreateImage('Les_Cousines_files/Formal_inset_03.png'),IWCreateImage('Les_Cousines_files/Formal_inset_06.png'),IWCreateImage('Les_Cousines_files/Formal_inset_09.png'),IWCreateImage('Les_Cousines_files/Formal_inset_08.png'),IWCreateImage('Les_Cousines_files/Formal_inset_07.png'),IWCreateImage('Les_Cousines_files/Formal_inset_04.png')],null,0,0.600000,1.000000,1.000000,1.000000,1.000000,14.000000,14.000000,14.000000,14.000000,191.000000,262.000000,191.000000,262.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Les_Cousines_files/Les_CousinesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
