import mapUserListTemplate from '../template/mapUserListTemplate.hbs';

export default function createMapUserList(data) {
  const mapUsersList = document.querySelector('.mapUsers_list');

  const renderUserList = usersData => {
    mapUsersList.innerHTML = mapUserListTemplate(usersData);
  };

  return renderUserList(data);
}
