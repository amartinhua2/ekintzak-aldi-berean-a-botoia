DFRobotMaqueenPlus.I2CInit()
let hasiera = 0
basic.forever(function () {
    while (hasiera == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 30)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
    }
})
basic.forever(function () {
    while (hasiera == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
    }
})
