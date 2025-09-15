/*******Panel Top*********/
paneltop = new Panel
paneltop.hiding = "none"
paneltop.location = "top"
paneltop.height = 26
paneltop.offset = 0
paneltop.addWidget("org.kde.plasma.marginsseparator")

paneltop.addWidget("AvalonMenu")
paneltop.addWidget("org.kde.plasma.appmenu")
paneltop.addWidget("org.kde.plasma.panelspacer")
var systraprev = paneltop.addWidget("org.kde.plasma.systemtray")
var SystrayContainmentId = systraprev.readConfig("SystrayContainmentId")
const systray = desktopById(SystrayContainmentId)
systray.currentConfigGroup = ["General"]
let ListTrays = systray.readConfig("extraItems")
let ListTrays2 = ListTrays.replace(",org.kde.plasma.notifications", "")
systray.writeConfig("extraItems", ListTrays2)
systray.writeConfig("iconSpacing", 1)

paneltop_clock = paneltop.addWidget("org.kde.plasma.digitalclock")
paneltop_clock.currentConfigGroup = ["Appearance"]
paneltop_clock.writeConfig("showDate", "false")
paneltop_clock.writeConfig("use24hFormat", '0')
paneltop.addWidget("org.kde.milou")
paneltop.addWidget("org.kde.plasma.notifications")
paneltop.addWidget("org.kde.plasma.marginsseparator")
            /****************************/
let allDesktops = desktops()
const width = screenGeometry(allDesktops).width
panelbottom = new Panel
panelbottom.location = "bottom"
panelbottom.height = 66
panelbottom.offset = 0
panelbottom.alignment = "center"
panelbottom.panelVisibility = "2"
for (a = 1; a < width+1; a++){
}
panelbottom.maximumLength = Number(a)
panelbottom.minimumLength = 100
panelbottom.hiding = "windowscover"
panelbottom.addWidget("org.kde.plasma.marginsseparator")
panelbottom.addWidget("org.kde.plasma.marginsseparator")
panelbottom.addWidget("org.kde.plasma.marginsseparator")
panelbottom.addWidget("org.kde.plasma.icontasks")


let IDPanel = "Panel"+" "+panelbottom.id
let IDPaneltop = "Panel"+" "+paneltop.id
/*cambiando config*/
const config = ConfigFile('plasmashellrc')
config.group = 'PlasmaViews'
const config2 = ConfigFile(config, IDPanel)
config2.writeEntry('floating', 1)
const config3 = ConfigFile(config, IDPaneltop)
config3.writeEntry('floating', 1)
panelbottom.reloadConfig()
/*Buttons of aurorae*/
Buttons = ConfigFile("kwinrc")
Buttons.group = "org.kde.kdecoration2"
Buttons.writeEntry("ButtonsOnRight", "")
Buttons.writeEntry("ButtonsOnLeft", "XAI")
/*Clock, Weather and Music Widget*/
let desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
var desktopByClock = desktopsArray[j]
}
const NumX = 80
const NumY = Number(((screenGeometry(desktopByClock).height)-144)/2)-panelbottom.height
var clockANDweather = desktopByClock.addWidget("org.kde.plasma.alpacaclockweather", NumX, NumY)
clockANDweather.currentConfigGroup = ["General"]
clockANDweather.writeConfig("font1Size", 180)

const NumXV = Number((screenGeometry(desktopByClock).width)-500)
const NumYV = Number((screenGeometry(desktopByClock).height)-226)
var MusicWidget = desktopByClock.addWidget("org.kde.NowPlaying", NumXV, NumYV)
/* accent color config*/
ColorAccetFile = ConfigFile("kdeglobals")
ColorAccetFile.group = "General"
ColorAccetFile.writeEntry("accentColorFromWallpaper", "true")
plasma.loadSerializedLayout(layout);

