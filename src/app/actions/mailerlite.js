"use server";

import { redirect } from "next/navigation";

const APIKEY = process.env.ML_APIKEY;

const mlHeaders = new Headers({
  "Content-Type": "application/json",
  Accept: "application / json",
  Authorization: `Bearer ${APIKEY}`,
});

export const getSubscribers = async () => {
  try {
    const options = {
      method: "GET",
      headers: mlHeaders,
    };
    const res = await fetch(
      `https://connect.mailerlite.com/api/subscribers`,
      options
    );
    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${error}`);
    throw error;
  }
};

export const createEmailLead = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const packages = formData.get("package");

  const bodyData = {
    email: email,
    fields: {
      name: name,
      phone: phone,
      package: packages,
    },
    groups: ["109919835523122972"],
  };

  const options = {
    method: "POST",
    headers: mlHeaders,
    body: JSON.stringify(bodyData),
  };
  try {
    const res = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      options
    );
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(`failed to post ${error}`);
  } finally {
    redirect("/thank-you");
  }
};
