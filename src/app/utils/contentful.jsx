const contentful = require("contentful");

const base_url = "https://cdn.contentful.com";
const space = process.env.CONTENTFUL_SPACE;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const accessToken = process.env.CONTENTFUL_ACCESSTOKEN;
const contentType = process.env.CONTENTFUL_CONTENT_TYPE;
const caseStudiesContentTypeId = "caseStudies";

const client = contentful.createClient({
  space: space,
  environment: environment,
  accessToken: accessToken,
});

export const getCaseStudies = async () => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCaseStudiesContent = async () => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}&content_type=${caseStudiesContentTypeId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();
    const items = data.items;
    const caseStudyFields = items.map((item) => item.fields);
    return caseStudyFields;
  } catch (err) {
    console.log(err);
  }
};

export const getFields = async () => {
  try {
    const { items } = await getCaseStudies();
    const caseStudies = items.filter(
      (item) => item.sys.space.sys.id === "98888r78yd9b"
    );
    const fields = caseStudies.map((cs) => cs.fields);
    return fields;
  } catch (err) {
    console.log(err);
  }
};

export const getLogos = async () => {
  try {
    const fields = await getFields();
    const logos = fields.filter((field) => field.title === "logos");
    return logos;
  } catch (err) {
    console.log(err);
  }
};

export const getCaseStudy = async (id) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/${environment}/entries/${id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAssetDetails = async (assetId) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${space}/environments/${environment}/assets/${assetId}?access_token=${accessToken}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    const assetURL = data.fields.file.url;
    return `https:${assetURL}`;
  } catch (err) {
    console.log(err);
  }
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
