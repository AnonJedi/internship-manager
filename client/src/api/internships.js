import axios from 'axios';
import { BASE_URL } from '.';

const LIST_URL = 'https://api.myjson.com/bins/1be678';

export async function getInternshipList(page, perPage) {
  const { data } = await axios.get(LIST_URL, {
    params: {
      page,
      per_page: perPage,
    },
  });
  return [data, data, data];
}

export async function getInternship() {
  const { data } = await axios.get(LIST_URL);
  return data;
}
