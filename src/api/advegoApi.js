// @flow
const ADVEGO_URL = "https://advego.com/text/seo/"
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
}

export const runSeoAnalysis = (lang = "ru", text = "") => {
  const formData = new FormData();
  formData.append("id_lang", lang)
  formData.append("job_text", text)

  return fetch(ADVEGO_URL, {
    method: 'POST',
    headers,
    body: formData
  })
}