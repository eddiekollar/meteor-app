Meteor.publish('company', function(_id) {
	return Companies.find({'_id': _id});
});

Meteor.publish('companies', function(){
	return Companies.find({});
});