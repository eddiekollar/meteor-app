Router.map(function () {
	this.route('home', {
		path: '/'	
	});

	this.route('company', {
  	path: 'company/:_id',
  	waitOn: function() {
  		return this.subscribe('company', this.params._id);
  	},
  	data: function() {
  		return {
  			company: Companies.findOne({'_id': this.params._id})
  		}
  	},
  	onBeforeAction: function (pause) {
    	AccountsTemplates.ensureSignedIn.call(this, pause);
  	}
  });

  this.route('companies', {
  	path: 'companies',
  	waitOn: function() {
  		return this.subscribe('companies');
  	},
  	data: function() {
  		return {
  			companies: Companies.find({})
			}
  	},
  	onBeforeAction: function (pause) {
    	AccountsTemplates.ensureSignedIn.call(this, pause);
  	}
  });
});