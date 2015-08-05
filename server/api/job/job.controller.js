'use strict';

var _ = require('lodash');
var Job = require('./job.model');

exports.index = function(req, res) {
    Job.find(function(err, jobs) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(jobs);
    });
};

// Get a single job
exports.show = function(req, res) {
    Job.findById(req.params.id, function(err, job) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(job);
    });
};

exports.create = function(req, res) {
    Job.create(req.body, function(err, job) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(job);
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}