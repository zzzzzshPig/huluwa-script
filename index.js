const robot = require("robotjs");   //控制鼠标键盘等操作

const ioHook = require('iohook');

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function run () {
  robot.moveMouse(1598, 441);	//移动鼠标
  await sleep(1000)
  robot.mouseClick();	 //鼠标点击
  robot.moveMouse(1590, 506);	//移动鼠标
  await sleep(1000)
  robot.mouseClick();	 //鼠标点击
  robot.moveMouse(616, 468);	//移动鼠标
  await sleep(1000)
  robot.mouseClick();	 //鼠标点击
  robot.moveMouse(506, 632);	//移动鼠标
  await sleep(1000)
  robot.mouseClick();	 //鼠标点击
}

const timer = setInterval(run, 10000);

ioHook.registerShortcut([88], event => {
  clearInterval(timer)
  ioHook.unload()
  ioHook.stop()
})

ioHook.start()
