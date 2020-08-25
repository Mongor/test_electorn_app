const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');

let win;

const createWindow = () => {
	win = new BrowserWindow({
		width: 950,
		height: 750,
		icon: __dirname + '',
	});
};
