const express = require('express');
const os = require('os');
const osUtils = require('os-utils');
const disk = require('diskusage');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
    disk.check('/', (err, info) => {
        osUtils.cpuUsage((cpu) => {
            res.json({
                cpu: (cpu * 100).toFixed(2),
                mem: ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2),
                diskUsed: info ? ((info.total - info.available) / 1073741824).toFixed(2) : "N/A",
                diskTotal: info ? (info.total / 1073741824).toFixed(2) : "N/A",
                diskPercent: info ? ((1 - info.available / info.total) * 100).toFixed(2) : "N/A"
            });
        });
    });
});

module.exports = app;
