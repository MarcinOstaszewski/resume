const descriptions = document.querySelectorAll('.sc-dprtRQ');
descriptions.forEach(description => {
  const divider = document.createElement('span');
  divider.innerText = ' — ';
  const descriptionNode = description.cloneNode(true);
  const companyDiv = description.closest('.sc-iuUfFv').querySelector('.sc-gQaihK');
  descriptionNode.style.display = 'inline';
  companyDiv.style.display = 'inline';
  companyDiv.style.fontWeight = 'bold';

  companyDiv.after(descriptionNode);
  companyDiv.after(divider);
  description.innerText = '';
});

const workingTitles = document.querySelectorAll('.sc-fFoeYl');
workingTitles.forEach(workingTitle => {
  workingTitle.style.fontSize = '1.6rem';
});

const companies = document.querySelectorAll('.sc-iuUfFv');
companies.forEach(company => {
  company.style.marginTop = '1.75rem';
});

const italics = document.querySelectorAll('.guKBkN');
italics.forEach(italic => {
  italic.style.fontStyle = 'normal';
});

const svgPhone = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3C15 3.55228 14.5523 4 14 4H10C9.44772 4 9 3.55228 9 3V2Z" fill="#000000"/>
<rect x="5.75" y="1.75" width="12.5" height="20.5" rx="1.75" stroke="#000000" stroke-width="1.5"/>
<path d="M9 19.5H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

const icons = document.querySelectorAll('.gGoIQs svg');
icons.forEach(icon => {
  icon.style.width = '13px';
});

const link = '<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400..700;1,400..700" rel="stylesheet">';
document.head.insertAdjacentHTML('beforeend', link);

document.body.style.fontFamily = '"Source Sans 3", sans-serif';

const mainInfos = document.querySelectorAll('.sc-hJRrWL');
mainInfos.forEach(mainInfo => {
  mainInfo.style.fontSize = '1.6rem';
});

document.querySelector('.bLikMV').style.fontSize = '1.5rem';

const photo = `<img alt="Photo"
  src="https://s.gravatar.com/avatar/beac9d1954ae5522d03df94c79ea52d3?size=256&amp;cache=1713425649897"
  style="width:100px;height:100px;border-radius:15%;border:2px solid #060;margin-left:20px;">`
const nameAndPhotoDiv = document.querySelector('.sc-cHqXqK');
nameAndPhotoDiv.style.display = 'flex';
nameAndPhotoDiv.innerHTML += photo;

const skillsLabels = document.querySelectorAll('.cHLYFE');
skillsLabels.forEach(skillsLabel => {
  skillsLabel.style.minWidth = '90px';
});
