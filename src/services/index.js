export const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
export const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
export const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/albums`
export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };