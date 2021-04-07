var Newspaper = require('../models/newspaper');
// List of all Newspapers
exports.newspaper_list = function(req, res) {
        res.send('NOT IMPLEMENTED: Newspaper list');    
};
// for a specific Newspaper.
exports.newspaper_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Newspaper detail: ' + req.params.id);
};
// Handle Newspaper create on POST.
exports.newspaper_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Newspaper create POST');
};
// Handle Newspaper delete form on DELETE.
exports.newspaper_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Newspaper delete DELETE ' + req.params.id);
};
// Handle Newspaper update form on PUT.
exports.newspaper_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Newspaper update PUT' + req.params.id);
};