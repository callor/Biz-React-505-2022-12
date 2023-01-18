export const getMyBooks = async (username) => {
  try {
    const response = await fetch(`/api/book/my/${username}`);
    const result = await response.json();

    return result;
  } catch (e) {
    return null;
  }
};
