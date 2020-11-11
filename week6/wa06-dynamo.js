// npm install aws-sdk
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

// var params = {
//     TableName : "processblog_recovery",
//     KeyConditionExpression: "post_num = :foo and xanax = :zar", // the query expression
//     // ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
//     //     "#dt" : "date"
//     // },
//     ExpressionAttributeValues: { // the query values
//         // ":topicName": {S: "work"},
//         ":foo": {N: "2"},
//         ":zar": {N: "0"},
//         // ":bar": { S: 'Fri Oct 02 2020' },
//         // ":minDate": {N: new Date("October 2, 2020").valueOf().toString()},
//         // ":maxDate": {N: new Date("October 3, 2020").valueOf().toString()}
//     }
// };


var params = {
    TableName : "processblog_recovery",
    KeyConditionExpression: "#pn = :postNum", // the query expression
    ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
        "#pn" : "post_num"
    },
    ExpressionAttributeValues: { // the query values
        ":postNum" : {N: "1"}
    }
};


dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});