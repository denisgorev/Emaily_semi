SurveyField.updateOne(
  {
    id: SurveyField,
    recipients: {
      $elemMatch: { email: email, responded: false },
    },
  },
  {
    $inc: { [choice]: 1 }, //key interpolarion choice = 'yes' || 'no'
    $set: { "recipients.$.responded": true }, // $ sign stands for the index which were defined in $elemMatch
  }
);
