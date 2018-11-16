const { GREETING } = process.env.TEST;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GREETING
  };
};
