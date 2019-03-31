import axios from 'axios';
import { BASE_URL } from '.';

export async function getInternshipList(page, perPage) {
  console.log(BASE_URL);

  const { data } = await axios.get(`${BASE_URL}/internships`, {
    params: {
      page,
      per_page: perPage,
    },
  });
  return data;
}

export async function getInternship(id) {
  const { data } = await axios.get(`${BASE_URL}/internships/${id}`);
  return data;
}
