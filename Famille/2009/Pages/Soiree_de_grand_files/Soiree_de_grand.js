// Created by iWeb 3.0.4 local-build-20261007

function createMediaStream_id3()
{return IWCreatePhotocast("http://philippe.berard1.free.fr/Famille/2009/Pages/Soiree_de_grand_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://philippe.berard1.free.fr/Famille/2009/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://philippe.berard1.free.fr/Famille/2009/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(163,163),new IWSize(163,13),new IWSize(189,191),27,27,0,new IWSize(-2,16)),new IWPhotoFrame([IWCreateImage('Soiree_de_grand_files/GraphPaper_01.png'),IWCreateImage('Soiree_de_grand_files/GraphPaper_02.png'),IWCreateImage('Soiree_de_grand_files/GraphPaper_01_1.png'),IWCreateImage('Soiree_de_grand_files/GraphPaper_01_2.png'),IWCreateImage('Soiree_de_grand_files/GraphPaper_09.png'),IWCreateImage('Soiree_de_grand_files/GraphPaper_08.png'),IWCreateImage('Soiree_de_grand_files/GraphPaper_07.png'),IWCreateImage('Soiree_de_grand_files/GraphPaper_01_3.png')],null,0,0.600000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Soiree_de_grand_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Soiree_de_grand_files/Playtime_waves_01.png'),IWCreateImage('Soiree_de_grand_files/Playtime_waves_02.png'),IWCreateImage('Soiree_de_grand_files/Playtime_waves_03.png'),IWCreateImage('Soiree_de_grand_files/Playtime_waves_06.jpg'),IWCreateImage('Soiree_de_grand_files/Playtime_waves_09.jpg'),IWCreateImage('Soiree_de_grand_files/Playtime_waves_08.jpg'),IWCreateImage('Soiree_de_grand_files/Playtime_waves_07.jpg'),IWCreateImage('Soiree_de_grand_files/Playtime_waves_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,18.000000,1.000000,1.000000,43.000000,554.000000,43.000000,554.000000,null,null,null,0.500000),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Soiree_de_grand_files/Soiree_de_grandMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id3()}
function onPageUnload()
{Widget.onunload();}
