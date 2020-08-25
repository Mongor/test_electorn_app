const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');

let win;

const createWindow = () => {
	win = new BrowserWindow({
		width: 1150,
		height: 750,
		icon: __dirname + '/img/icon_dov.svg',
		webPreferences: {
			nodeIntegration: true,
		},
	});

	win.loadFile('index.html');

	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
