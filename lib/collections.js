/* Using a schema for autform, but not attaching to collection
	 See: https://github.com/aldeed/meteor-autoform#non-collection-forms
 */
userSchema = new SimpleSchema({
	firstName: {
		type: String,
		label: "First Name"
	},
	lastName: {
		type: String,
		label: "Last Name"
	},
	jobTitle: {
		type: String,
		label: "Job Title",
		optional: true
	},
	companyId: {
		type: String,
		autoform: {omit: true}
	},
	accountType: {
		type: [String],
		label: "Account Type",
		allowedValues: ['admin', 'advisor']
	}
});

Companies = new Mongo.Collection('companies');

companySchema = new SimpleSchema({
	title: {
    type: String,
    label: "Name"
  },
  subtitle: {
    type: String,
    label:"SubTitle",
    optional: true
  },
  desc: {
  	type: String,
  	label: "Description"
  },
  website: {
  	type: String,
  	label: "Website",
  	regEx: SimpleSchema.RegEx.Url,
  	optional: true
  },
  createdById: {
    type: String,
    autoform: {omit: true},
    autoValue: function() {
      if(!this.isSet) {
        return this.userId;
      }else{
        this.unset();
      }
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
        if (!this.isSet) {
            return new Date();
        }
        else {
          this.unset();
        }},
    autoform: { omit: true }
	},
  updateById: {
    type: String,
    autoValue: function() {
      return this.userId;
    },
    autoform: { omit: true }
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    },
    autoform: { omit: true }
	}
});

Companies.attachSchema(companySchema);