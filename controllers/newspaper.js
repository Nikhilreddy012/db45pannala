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
exports.newspaper_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Newspaper.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Newspaper delete form on DELETE.
exports.newspaper_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Newspaper.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Newspaper update form on PUT.
exports.newspaper_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
        try {
            let toUpdate = await Newspaper.findById( req.params.id)
            // Do updates of properties
            if(req.body.name) toUpdate.name = req.body.name;
            if(req.body.language) toUpdate.language = req.body.language;
            if(req.body.price) toUpdate.price = req.body.price;
            let result = await toUpdate.save();
            console.log("Sucess " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
        }
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
// Handle a show one view with id specified by query
exports.newspaper_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Newspaper.findById( req.query.id)
        res.render('newspaperdetail', { title: 'Newspaper Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a newspaper.
// No body, no in path parameter, no query.
// Does not need to be async
exports.newspaper_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('newspapercreate', { title: 'Newspaper Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a newspaper.
// query provides the id
exports.newspaper_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Newspaper.findById(req.query.id)
        res.render('newspaperupdate', { title: 'Newspaper Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.newspaper_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Newspaper.findById(req.query.id)
        res.render('newspaperdelete', { title: 'Newspaper Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



