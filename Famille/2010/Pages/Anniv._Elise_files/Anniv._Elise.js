// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id3()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2010/Pages/Anniv._Elise_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://philippe.berard1.free.fr/Famille/2010/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://philippe.berard1.free.fr/Famille/2010/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(180,180),new IWSize(180,28),new IWSize(216,223),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-5,5,10,170),url:'Anniv._Elise_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Anniv._Elise_files/stroke_1.png'},{rect:new IWRect(5,-5,170,10),url:'Anniv._Elise_files/stroke_2.png'},{rect:new IWRect(175,-5,10,10),url:'Anniv._Elise_files/stroke_3.png'},{rect:new IWRect(175,5,10,170),url:'Anniv._Elise_files/stroke_4.png'},{rect:new IWRect(175,175,10,10),url:'Anniv._Elise_files/stroke_5.png'},{rect:new IWRect(5,175,170,10),url:'Anniv._Elise_files/stroke_6.png'},{rect:new IWRect(-5,175,10,10),url:'Anniv._Elise_files/stroke_7.png'}],new IWSize(180,180)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Anniv._Elise_files/Anniv._EliseMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
