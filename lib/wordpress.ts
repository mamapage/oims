export type WordPressRequest = {
  query: string;
  variables?: Record<string, unknown>;
};

export async function fetchWordPress<T>({ query, variables }: WordPressRequest): Promise<T> {
  const endpoint = process.env.WORDPRESS_GRAPHQL_URL;

  if (!endpoint) {
    throw new Error("WORDPRESS_GRAPHQL_URL is not set");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`WordPress request failed: ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(`WordPress GraphQL error: ${JSON.stringify(json.errors)}`);
  }

  return json.data as T;
}

export const SAMPLE_QUERY = `
  query HomepageData {
    options {
      instituteName
      instituteSubline
      affiliationText
      heroHeadline
      heroSubheadline
      admissionsTicker
      ctaPrimaryLabel
      ctaPrimaryUrl
      ctaSecondaryLabel
      ctaSecondaryUrl
    }
    programs(first: 20) {
      nodes {
        programCode
        programTitle
        programHighlight
      }
    }
    features(first: 20) {
      nodes {
        featureTitle
        featureBody
      }
    }
    partners(first: 20) {
      nodes {
        partnerName
      }
    }
  }
`;
