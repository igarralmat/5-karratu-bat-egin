input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.pause(2100)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        basic.pause(590)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
    }
})
DFRobotMaqueenPlus.I2CInit()
