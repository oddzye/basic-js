module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  const sortingMembers = members.filter(item => typeof item === 'string').map(item => item.trim().toLowerCase()).sort();
  return sortingMembers.reduce((acc, item) => {
    return `${acc}${item[0].toUpperCase()}`;
  }, '')
};