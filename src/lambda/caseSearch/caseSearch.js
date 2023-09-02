const handler = async (event) => {
  const { search } = event.queryStringParameters;
  const CASELAW_KEY = process.env.CASELAW_KEY;

  const endpoint = `https://api.case.law/v1/cases/?search=${search}&page_size=1`;

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Token ${CASELAW_KEY}`,
    },
  });

  const data = await response.json();

  console.log(data);

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
