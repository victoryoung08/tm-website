const contentful = require("contentful");

const base_url = "https://cdn.contentful.com";
const space = process.env.CONTENTFUL_SPACE;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const accessToken = process.env.CONTENTFUL_ACCESSTOKEN;
const contentType = process.env.CONTENTFUL_CONTENT_TYPE;
export const getCaseStudies = async () => {
  const res = await fetch(
    `${base_url}/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
};

export const getCaseStudy = async (id) => {
  const res = await fetch(
    `${base_url}/spaces/${space}/environments/${environment}/entries/${id}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data;
};

export const getAssetDetails = async (assetId) => {
  const res = await fetch(
    `${base_url}/spaces/${space}/environments/${environment}/assets/${assetId}?access_token=${accessToken}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  const assetURL = data.fields.file.url;
  return `https:${assetURL}`;
};

export const getCaseStudyPageData = async (query, value) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/master/entries?access_token=${accessToken}&content_type=caseStudies&fields.${query}=${value}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(error);
  }
};
