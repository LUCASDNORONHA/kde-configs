x=$@
qdbus org.kde.plasmashell /PlasmaShell evaluateScript 'function RutaDeW($x){
for (a = 0; a  < 500; a++ ) {
    appletsrc = ConfigFile(x)
    appletsrc.group = "Containments"
    var appletsrc2 = ConfigFile(appletsrc, a)
    Prueba = appletsrc2.readEntry("wallpaperplugin")
     if (Prueba == "org.kde.image") {
         break;
    }
}
var appletsrc3 = ConfigFile(appletsrc2, "Wallpaper")
var appletsrc4 = ConfigFile(appletsrc3, "org.kde.image")
var appletsrc5 = ConfigFile(appletsrc4, "General")
rutadewall = appletsrc5.readEntry("Image")
return rutadewall
}
'
