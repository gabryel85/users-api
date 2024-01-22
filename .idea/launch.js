{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "launch",
			"name": "Launch Server with Nodemon",
			"runtimeExecutable": "${workspaceFolder}/node_modules/.bin/nodemon",
			"program": "${workspaceFolder}/server.js",
			"restart": true,
			"console": "integratedTerminal",
			"internalConsoleOptions": "neverOpen",
			"skipFiles": ["<node_internals>/**"],
			"env": {
				"NODE_ENV": "development"
			},
			"outFiles": ["${workspaceFolder}/**/*.js"]
		}
	]
}
