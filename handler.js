'use strict';
const emojis = [
  '🥉', '🥈', '🥇', '🌟', '🚀', '🪐', '🌌'
]

module.exports.rank = async (event) => {
  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[Math.min(rank, emojis.length - 1)];
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        headers:
          { 'Acces-Control-Allow-Origin': '*', },
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: rankEmoji
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
