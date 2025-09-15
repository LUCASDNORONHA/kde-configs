import QtQuick 2.5
import QtQuick.Controls 2.0

Rectangle {
    id: root
    width: 640
    height: 480
    color: "black"  // Fundo preto

    property int stage

    onStageChanged: {
        if (stage === 1) {
            introAnimation.running = true
        }
    }

    Item {
        id: content
        anchors.fill: parent
        opacity: 0

        // Ícone de carregamento centralizado
        Image {
            id: busyIndicator
            anchors.centerIn: parent
            source: "images/loading-00.svg"
            sourceSize.width: 50
            sourceSize.height: 50

            RotationAnimator on rotation {
                id: rotationAnimator
                from: 0
                to: 360
                duration: 1000
                loops: Animation.Infinite
            }
        }

        // Logo centralizado na parte inferior
        Image {
            id: logo
            source: "images/logo.png"
            fillMode: Image.PreserveAspectFit
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.bottom: parent.bottom
            anchors.bottomMargin: 20
            sourceSize.width: 200
            sourceSize.height: 100
        }
    }

    OpacityAnimator {
        id: introAnimation
        running: false
        target: content
        from: 0
        to: 1
        duration: 1000
        easing.type: Easing.InOutQuad
    }
}
