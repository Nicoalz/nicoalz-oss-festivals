import axios from "axios";
const BASE_URL =
  "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&rows=100";
/**
 *
 * @param {string} department : Use first two numbers of ZipCode. Ex: '01' for Ain
 * @returns {Promise<Array>} : array of festivals, docs: https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/
 */
export const getFestivalsByDepartment = async (department) => {
  const url = `${BASE_URL}&refine.departement=${department}`;
  const response = await axios.get(url);
  if (response.data.nhits === 0) throw new Error("Invalid department");
  return response.data.records;
};

/**
 *
 * @param {string} month : Use two numbers for month. Ex: '01' for January
 * @returns {Promise<Array>} : array of festivals, docs: https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/
 */
export const getFestivalsByMonth = async (month) => {
  const months = {
    "01": "janvier",
    "02": "fevrier",
    "03": "mars",
    "04": "avril",
    "05": "mai",
    "06": "juin",
    "07": "juillet",
    "08": "aout",
    "09": "septembre",
    10: "octobre",
    11: "novembre",
    12: "decembre",
  };
  const monthLetter = months[month];
  if (!monthLetter) throw new Error("Invalid month");
  const monthParam = `${month} (${monthLetter})`;
  const url = `${BASE_URL}&refine.mois_habituel_de_debut=${monthParam}`;
  const response = await axios.get(url);
  return response.data.records;
};
