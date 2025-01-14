// powiększenie nazw stanowisk 
const jobTitles = document.querySelectorAll('.sc-eldOKa.ebTDwS');
jobTitles.forEach(title => {
  title.style.marginTop = '20px';
});

// pogrubienie nazw miejsc pracy
const descriptions = document.querySelectorAll('.sc-gFqAYk.cmZWqd');
descriptions.forEach(description => {
  // const divider = document.createElement('span');
  // divider.innerText = ' — ';
  // const descriptionNode = description.cloneNode(true);
  const companyDiv = description.closest('.sc-ikkyvV').querySelector('.sc-fPXMhL');
  // descriptionNode.style.display = 'inline';
  // companyDiv.style.display = 'inline';
  companyDiv.style.fontWeight = 'bold';

  // companyDiv.after(descriptionNode);
  // companyDiv.after(divider);
  // description.innerText = '';
});

// poprawki w sekcji Doświadczenie
const workingTitles = document.querySelectorAll('.sc-fFoeYl');
workingTitles.forEach(workingTitle => {
  workingTitle.style.fontSize = '1.6rem';
});

const companies = document.querySelectorAll('.sc-iuUfFv');
companies.forEach(company => {
  company.style.marginTop = '1.75rem';
});

// poprawki w sekcji Edukacja, zamiana "in" na myśliki
const educationDescriptions = document.querySelectorAll('.guKBkN');
educationDescriptions.forEach(educationDescription => {
  educationDescription.style.fontStyle = 'normal';
  educationDescription.innerText = educationDescription.innerText.replace(' in ', ' — ');
});

// podmiana ikony telefonu i powiekszenie ikon
const svgPhone = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3C15 3.55228 14.5523 4 14 4H10C9.44772 4 9 3.55228 9 3V2Z" fill="#000000"/>
<rect x="5.75" y="1.75" width="12.5" height="20.5" rx="1.75" stroke="#000000" stroke-width="1.5"/>
<path d="M9 19.5H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

const icons = document.querySelectorAll('.gGoIQs svg');
icons.forEach(icon => {
  icon.style.width = '13px';
});

//podmiana fonta na Source Sans
const link = '<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400..700;1,400..700" rel="stylesheet">';
document.head.insertAdjacentHTML('beforeend', link);
document.body.style.fontFamily = '"Source Sans 3", sans-serif';

// poprawki stylu w pierwszej sekcji, dodanie zdjęcia
const mainInfos = document.querySelectorAll('.sc-hJRrWL');
mainInfos.forEach(mainInfo => {
  mainInfo.style.fontSize = '1.6rem';
});

const summary = document.querySelector('.sc-fHjqbK')
summary.style.fontSize = '1.5rem';
summary.style.lineHeight = '2rem';
summary.style.marginTop = '4rem';

const basicInfoAndPhotoContainer = document.querySelector('.sc-jEABJj');
basicInfoAndPhotoContainer.style.width = 'calc(100% - 120px)';

const nameAndPhotoDiv = document.querySelector('.sc-feUYzb'); // sc-cHqXqK
nameAndPhotoDiv.style.fontSize = '3rem';
nameAndPhotoDiv.style.textAlign = 'left';

const enumeratedBasicInfo = document.querySelector('.gaIQhO')
enumeratedBasicInfo.style.justifyContent = 'flex-start';

const photo = `<img alt="Photo"
src="https://s.gravatar.com/avatar/beac9d1954ae5522d03df94c79ea52d3?size=256&amp;cache=1713425649897"
style="width:100px;height:100px;border-radius:15%;border:2px solid #666;margin-left:20px;">`

const basicInfoContainer = document.querySelector('.sc-cwHqhk');
basicInfoContainer.style.display = 'flex';
basicInfoContainer.style.flexFlow = 'row-reverse';
basicInfoContainer.style.flexFlow = 'row-reverse';
basicInfoContainer.style.gap = '20px';
basicInfoContainer.innerHTML += photo;

// wyrównianie nazw Umiejętności
const skillsLabels = document.querySelectorAll('.sc-hmdnzv');
skillsLabels.forEach(skillsLabel => {
  skillsLabel.style.minWidth = '100px';
});

// zamiana angielskich nazw działów
const h2Titles = document.querySelectorAll('h2')
h2Titles.forEach(title => {
  title.style.lineHeight = '6rem';
  title.style.fontSize = '2.5rem';
  if (title.innerText === "Education") {
    title.innerText = "Edukacja"
  } else
  if (title.innerText === "Experience") {
    title.innerText = "Doświadczenie"
  } else
  if (title.innerText === "Skills") {
    title.innerText = "Umiejętności"
  }
})

// zamiana angielskich nazw miesięcy
const startEndDates = document.querySelectorAll('.sc-dLNtp');
startEndDates.forEach(date => {
  let [month, year = ''] = date.innerText.split(' '); 
  if (month === "January") month = "Styczeń";
  else if (month === "February") month = "Luty";
  else if (month === "March") month = "Marzec";
  else if (month === "April") month = "Kwiecień";
  else if (month === "May") month = "Maj";
  else if (month === "June") month = "Czerwiec";
  else if (month === "July") month = "Lipiec";
  else if (month === "August") month = "Sierpień";
  else if (month === "September") month = "Wrzesień";
  else if (month === "October") month = "Październik";
  else if (month === "November") month = "Listopad";
  else if (month === "December") month = "Grudzień";
  else if (month === "Present") month = "Dotychczas";
  date.innerText = year ? `${month} ${year}` : month;
})

// zamiana "in" na myślinik w Edukacja
const descriptionsInEducation = document.querySelectorAll('.sc-jEABJj.jKKkni')[2].querySelectorAll('.sc-gFqAYk.cmZWqd');
descriptionsInEducation.forEach(description => {
  const text = description.innerText;
  description.innerText = text.replace(' in ', ' — ');
})

// odstępy między zajmowanymi stanowiskami
const lis = document.querySelectorAll('li');
lis.forEach(li => {
  li.style.lineHeight = '2rem';
});