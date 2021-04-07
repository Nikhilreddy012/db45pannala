var Newspaper = require('../models/newspaper');
// List of all Newspapers
exports.newspaper_list = async function(req, res) {
    try {
        theNewspapers = await Newspaper.find();
        res.send(theNewspapers);
    } catch (error) {
        res.error(500,`{"error": ${error}}`);
    }
};
// for a specific Newspaper.
exports.newspaper_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Newspaper detail: ' + req.params.id);
};
// Handle Newspaper create on POST.
exports.newspaper_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Newspaper();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.language = req.body.language;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
};
// Handle Newspaper delete form on DELETE.
exports.newspaper_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Newspaper delete DELETE ' + req.params.id);
};
// Handle Newspaper update form on PUT.
exports.newspaper_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Newspaper update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.newspaper_view_all_Page = async function(req, res) {
    try{
    theNewspapers = await Newspaper.find();
    res.render('newspapers', { title: 'Newspaper Search Results', results: theNewspapers });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };