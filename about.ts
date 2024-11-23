// Get all editable sections
const editableSections = document.querySelectorAll('.editable');

// Function to save the data to localStorage
function saveData() {
  editableSections.forEach((section) => {
    const id = section.id; // Get the section ID
    const content = (section as HTMLElement).innerText; // Get the content
    localStorage.setItem(id, content); // Save content to localStorage
  });
}

// Function to load data from localStorage
function loadData() {
  editableSections.forEach((section) => {
    const id = section.id;
    const savedContent = localStorage.getItem(id);
    if (savedContent) {
      (section as HTMLElement).innerText = savedContent; // Set saved content
    }
  });
}

// Add event listeners for each editable section to save data when content changes
editableSections.forEach((section) => {
  section.addEventListener('input', saveData); // Save on input change
});

// Load previously saved data when the page loads
window.addEventListener('load', loadData);
