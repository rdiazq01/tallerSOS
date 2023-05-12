import * as service from '../services/statService.js';

export function getStats(req, res) {
    service.getStats(req, res);
}

export function findByperiod(req, res) {
    service.findByperiod(req, res);
}

