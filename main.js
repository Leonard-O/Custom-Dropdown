const dropdownHeader = document.getElementById('dropdownHeader');
const dropdownList = document.getElementById('dropdownList');
const selectedItem = document.getElementById('selectedItem');
const chevron = document.getElementById('chevron');
const dropdownItems = dropdownList.querySelectorAll('.dropdown-item');

// Toggle dropdown list visibility
dropdownHeader.addEventListener('click', () => {
	dropdownList.classList.toggle('open');
	chevron.textContent = dropdownList.classList.contains('open') ? '^' : 'v';
});

// Add click event to each item
dropdownItems.forEach((item) => {
	item.addEventListener('click', () => {
		// Update selected item text
		selectedItem.textContent = item.textContent;

		// Mark the selected item
		dropdownItems.forEach((i) => i.classList.remove('selected'));
		item.classList.add('selected');

		// Close the dropdown and toggle chevron
		dropdownList.classList.remove('open');
		chevron.textContent = 'v';
	});
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
	if (!document.getElementById('dropdown').contains(e.target)) {
		dropdownList.classList.remove('open');
		chevron.textContent = 'v';
	}
});
