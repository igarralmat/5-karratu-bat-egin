input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.pause(2000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(580)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        basic.pause(580)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
    }
})
DFRobotMaqueenPlus.I2CInit()
