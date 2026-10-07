// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id4()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2008/Pages/Bapteme_dElise_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://philippe.berard1.free.fr/Famille/2008/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://philippe.berard1.free.fr/Famille/2008/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(4,new IWSize(155,155),new IWSize(155,45),new IWSize(155,215),27,27,0,new IWSize(22,21)),new IWPhotoFrame([IWCreateImage('Bapteme_dElise_files/notebook_ul.png'),IWCreateImage('Bapteme_dElise_files/notebook_top.png'),IWCreateImage('Bapteme_dElise_files/notebook_ur.png'),IWCreateImage('Bapteme_dElise_files/notebook_right.png'),IWCreateImage('Bapteme_dElise_files/notebook_lr.png'),IWCreateImage('Bapteme_dElise_files/notebook_bottom.png'),IWCreateImage('Bapteme_dElise_files/notebook_ll.png'),IWCreateImage('Bapteme_dElise_files/notebook_left.png')],null,0,0.714286,3.000000,2.000000,1.000000,3.000000,18.000000,16.000000,17.000000,19.000000,76.000000,123.000000,79.000000,122.000000,null,null,null,0.400000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:0,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Bapteme_dElise_files/Bapteme_dEliseMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
