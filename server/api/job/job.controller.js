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
};

exports.addComment = function(req, res, next) {
    var jobId = req.body._id;
    var newComment={};
    newComment.text = req.body.newComment;
    newComment.owner=req.body.userName;

    Job.findById(jobId, function(err, job) {

        job.comments.push(newComment);
        job.applicants.push(req.body.userId);
       //_.extend(job.comments,req.body)
        job.save(function(err) {
            if (err) return validationError(res, err);
            res.status(200).send('OK');
        });
        
    });



// Thing.findById(req.params.id, function(err, thing) {
//         if (err) {
//             return handleError(res, err);
//         }
//         if (!thing) {
//             return res.status(404).send('Not Found');
//         }
//         var updated = _.merge(thing, req.body);
//         updated.save(function(err) {
//             if (err) {
//                 return handleError(res, err);
//             }
//             return res.status(200).json(thing);
//         });
//     });


};