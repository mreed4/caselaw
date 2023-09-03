// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const { id } = event.queryStringParameters;
  const CASELAW_KEY = process.env.CASELAW_KEY;

  const endpoint = `https://api.case.law/v1/cases/${id}/?full_case=true&body_format=html`;

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Token ${CASELAW_KEY}`,
    },
  });

  const data = await response.json();

  // console.log(data);

  if (!data) {
    return {
      statusCode: data.statusCode || 500,
      body: JSON.stringify({ error: data.message }),
    };
  }

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: data.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};

module.exports = { handler };
