// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const CASELAW_KEY = process.env.CASELAW_KEY;

  const endpoint = "https://api.case.law/v1/cases/371071?full_case=true";

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Token ${CASELAW_KEY}`,
    },
  });

  const data = await response.json();

  console.log(data.casebody.data.opinions[0].text);

  return null;
};

module.exports = { handler };
