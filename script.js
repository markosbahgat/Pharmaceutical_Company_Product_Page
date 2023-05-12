// Handle Toggle Model
const toggleModel = () => {
	document.getElementById('Model').classList.toggle('hidden');
};

const toggleSideOver = () => {
	document.getElementById('SideOver').classList.toggle('hidden');
};

const toggleSideBar = () => {
	const target = document.getElementById('sidebar');
	console.log(target.classList.contains('hidden'));
	if (target.classList.contains('hidden')) {
		target.classList.remove('hidden');
		target.classList.add('flex');
	} else {
		target.classList.remove('flex');
		target.classList.add('hidden');
	}
};

const tableBody = document.getElementById('table_body');
const optionsTableBody = document.getElementById('options_table_body');
[...Array(10).keys()].forEach((item) => {
	tableBody.innerHTML =
		tableBody.innerHTML +
		`
	<tr class="ring-1 ring-[#d4d4d4] rounded-[5px]">
		<td class='relative px-7 sm:w-12 sm:px-6 hidden sm:table-cell'>
			<input type='checkbox' class='absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600' />
		</td>
		<td class='whitespace-nowrap uppercase py-4 pr-3 text-sm font-medium text-gray-900 pl-4 sm:pl-0'>OXIFree</td>
		<td class='whitespace-nowrap uppercase px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'>Barcode:33029<br/>sku:POO2919</td>
		<td class='whitespace-nowrap uppercase px-3 py-4 text-sm text-gray-500 hidden md:table-cell'>${item + 1 * 5}</td>
		<td class='whitespace-nowrap uppercase px-3 py-4 text-sm text-gray-500 '>EGP 95</td>
		<td class='whitespace-nowrap uppercase px-3 py-4 text-sm text-gray-500 hidden xl:table-cell'>30%</td>
		<td class='whitespace-nowrap uppercase px-3 py-4 text-sm text-gray-500 hidden md:table-cell'>EGP 70</td>
	</tr>
`;
	optionsTableBody.innerHTML =
		optionsTableBody.innerHTML +
		`
		<tr class="ring-1 ring-[#d4d4d4] rounded-[5px]">
			<td id="table-square" class='text-center font-medium py-6'>
				<span href='#' class=' text-white bg-[#1D6CAC] cursor-pointer px-2 rounded-[3px] text-[10px] py-2.5 hover:text-slate-200'>
					Actions <i class="fa-solid fa-angle-down"></i>
				</span>
			</td>
		</tr>`;
});

const sideover = document.getElementById('SideOverContainer');
const sideOverButton = document.getElementById('SideOverOkButton');
const sideOverTitle = document.getElementById('SideOverTitle');

const getSideOverContent = (type) => {
	sideover.innerHTML = '';

	const returned = {
		filter: { buttonName: 'Filter', title: 'Filters' },
		settings: { buttonName: 'Apply', title: 'Preferences' }
	};
	sideOverButton.innerText = returned[type].buttonName;
	sideOverTitle.innerText = returned[type].title;
	if (type === 'filter') {
		['Verified', 'Status', 'Products'].forEach((item) => {
			sideover.innerHTML =
				sideover.innerHTML +
				`<div class="w-full relative inline-block text-left flex-1 my-4">
										<h3 class=" text-gray-500">${item}</h3>
										<div>
											<button
												type="button"
												class="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
												id="menu-button"
												aria-expanded="true"
												aria-haspopup="true"
											>
												All
												<svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path
														fill-rule="evenodd"
														d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
														clip-rule="evenodd"
													/>
												</svg>
											</button>
										</div>

										<div
											class="absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="menu-button"
											tabindex="-1"
										>
											<div class="py-1" role="none">
												<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
												<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"
													>Account settings</a
												>
												<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"
													>Support</a
												>
												<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"
													>License</a
												>
												<form method="POST" action="#" role="none">
													<button
														type="submit"
														class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
														role="menuitem"
														tabindex="-1"
														id="menu-item-3"
													>
														Sign out
													</button>
												</form>
											</div>
										</div>
									</div>`;
		});
	} else {
		sideover.innerHTML = `<h5 class="text-gray-400 my-4">Column Settings</h5>`;
		[
			'Order Number',
			'Status',
			'Payment Verified',
			'Client Name',
			'AWB',
			'Revision',
			'Creation Date',
			'Total Orders',
			'Payment Status',
			'City',
			'Invoice'
		].forEach((item) => {
			sideover.innerHTML =
				sideover.innerHTML +
				`<div class="w-full relative inline-flex flex-col text-left flex-1 my-2">
											<button
												type="button"
												class="inline-flex w-11/12 m-auto justify-between rounded-md px-10 py-2 text-sm  text-gray-900 shadow-sm  bg-blue-50 hover:bg-gray-50"
												id="menu-button"
												aria-expanded="true"
												aria-haspopup="true"
											>
												${item}
												<svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path
														fill-rule="evenodd"
														d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
														clip-rule="evenodd"
													/>
												</svg>
											</button>

										<div
											class="absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="menu-button"
											tabindex="-1"
										>
											<div class="py-1" role="none">
												<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
												<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"
													>Account settings</a
												>
												<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"
													>Support</a
												>
												<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"
													>License</a
												>
												<form method="POST" action="#" role="none">
													<button
														type="submit"
														class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
														role="menuitem"
														tabindex="-1"
														id="menu-item-3"
													>
														Sign out
													</button>
												</form>
											</div>
										</div>
									</div>`;
		});
	}
};
