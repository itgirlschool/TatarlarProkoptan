

const prepareNameData = (data) => {
  const dataPost = data.trim()[0].toUpperCase() + data.trim().slice(1);
  return dataPost;
};
const prepareOtherData = (data) => {
  const dataPost = data.trim();
  return dataPost;
};

const postData = async (lastName, firstName, surName, phone, email) => {
  const lastNamePost = prepareNameData(lastName);
  const firstNamePost = prepareNameData(firstName);
  const surnamePost = prepareNameData(surName);
  const phonePost = prepareOtherData(phone);
  const emailPost = prepareOtherData(email);
  console.log(lastNamePost, firstNamePost, surnamePost, phonePost, emailPost);
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (err) {console.log(err)}
};

export default postData;
