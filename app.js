const searchClient = algoliasearch(
	'PBHTEZH4YH',
	'7019dc9d095298df8a2f54d825be806a'
);


const filtersButtons = Array.prototype.slice.call(document.querySelectorAll('[data-action="open-overlay"]'));
const closeOverlayButtons = Array.prototype.slice.call(document.querySelectorAll('[data-action="close-overlay"]'));
const header = document.querySelector('#topNav');
const resultsContainer = document.querySelector('.container-results');

function openFilters() {
	document.body.classList.add('filtering');
	window.scrollTo(0, 0);
	window.addEventListener('keyup', onKeyUp);
	window.addEventListener('click', onClick);
}

function closeFilters() {
	document.body.classList.remove('filtering');
	resultsContainer.scrollIntoView();
	window.removeEventListener('keyup', onKeyUp);
	window.removeEventListener('click', onClick);
	grid_item_height();
}

function onKeyUp(event) {
	if (event.key !== 'Escape') {
		return;
	}
	closeFilters();
}

function onClick(event) {
	if (event.target !== header) {
		return;
	}
	closeFilters();
}

function attachEventListeners() {
	filtersButtons.forEach(button => {
		button.addEventListener('click', openFilters);
	});
	closeOverlayButtons.forEach(button => {
		button.addEventListener('click', closeFilters);
	});
}
attachEventListeners();

$('body').on('click', '#cls', function () {
	closeFilters();
});


const itm=
	  `<a href="{{url}}"><label class="ais-RefinementList-label"> <input type="checkbox" class="ais-RefinementList-checkbox" value="{{label}}"> <span class="ais-RefinementList-labelText">{{label}}</span> <span class="ais-RefinementList-count">{{count}}</span> </label></div>
	  </a>`;
    

const moreless=
      `{{#isShowingMore}}
        <svg class='eb_label chevron-up'><use href='/s.svg#chevron-up'></use></svg>Less
      {{/isShowingMore}}
      {{^isShowingMore}}
        <svg class='eb_label chevron-down'><use href='/s.svg#chevron-down'></use></svg>Show more
      {{/isShowingMore}}`;



var p = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
	  			<g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.143"><path d="M9 5H1M5 9L1 5l4-4" /></g>
	  			</svg>`;
var n = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
	  			<g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.143"><path d="M1 5h8M5 9l4-4-4-4" /></g>
	  			</svg>`

var empty = `<div class='hits-empty-state'>
				<div class="hits-empty-state">
				    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="138" height="138" class="hits-empty-state-image">
				      <defs>
				        <linearGradient id="c" x1="50%" x2="50%" y1="100%" y2="0%">
				          <stop offset="0%" stop-color="#F5F5FA"></stop>
				          <stop offset="100%" stop-color="#FFF"></stop>
				        </linearGradient>
				        <path id="b" d="M68.71 114.25a45.54 45.54 0 1 1 0-91.08 45.54 45.54 0 0 1 0 91.08z"></path>
				        <filter id="a" width="140.6%" height="140.6%" x="-20.3%" y="-15.9%" filterUnits="objectBoundingBox">
				          <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
				          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5.5"></feGaussianBlur>
				          <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0.145098039 0 0 0 0 0.17254902 0 0 0 0 0.380392157 0 0 0 0.15 0"></feColorMatrix>
				          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
				          <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="1.5"></feGaussianBlur>
				          <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 0.364705882 0 0 0 0 0.392156863 0 0 0 0 0.580392157 0 0 0 0.2 0"></feColorMatrix>
				          <feMerge>
				            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
				            <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
				          </feMerge>
				        </filter>
				      </defs>
				      <g fill="none" fill-rule="evenodd">
				        <circle cx="68.85" cy="68.85" r="68.85" fill="#5468FF" opacity=".07"></circle>
				        <circle cx="68.85" cy="68.85" r="52.95" fill="#5468FF" opacity=".08"></circle>
				        <use fill="#000" filter="url(#a)" href="#b"></use>
				        <use fill="url(#c)" href="#b"></use>
				        <path d="M76.01 75.44c5-5 5.03-13.06.07-18.01a12.73 12.73 0 0 0-18 .07c-5 4.99-5.03 13.05-.07 18a12.73 12.73 0 0 0 18-.06zm2.5 2.5a16.28 16.28 0 0 1-23.02.09A16.29 16.29 0 0 1 55.57 55a16.28 16.28 0 0 1 23.03-.1 16.28 16.28 0 0 1-.08 23.04zm1.08-1.08l-2.15 2.16 8.6 8.6 2.16-2.15-8.6-8.6z" fill="#5369FF"></path>
				      </g>
				    </svg>
				
				    <p class="hits-empty-state-title">
				      No matches for now.
				    </p>
				    <p class="hits-empty-state-description">
				      Try to reset your applied filters.
				    </p>
				  </div>
                <a href="javascript:window.location.href=/^[^?]+/.exec(window.location.href)[0]">▸ Clear All</a><p><p>
                <a href="/">▸ Experts</a> | <a href="/articles">▸ Articles</a> | <a href="/opportunities">▸ Opportunities</a>
              </div>`;

// stats

// Create the render function
const renderStats = (renderOptions, isFirstRender) => {
	const {
		nbHits,
		processingTimeMS,
		query,
		widgetParams
	} = renderOptions;

	if (isFirstRender) {
		return;
	}

	let count = '';
	if (nbHits > 1) {
		count += `${nbHits} results`;
	} else if (nbHits === 1) {
		count += `1 result`;
	} else {
		count += `no result`;
	}

	widgetParams.container.innerHTML = `
    
    ${query ? `${count} in ${processingTimeMS} ms</q>` : ' '}
  `;
};


// Main Clear Filters 

const renderClearRefinements = (renderOptions, isFirstRender) => {
	const {
		hasRefinements,
		refine,
		widgetParams
	} = renderOptions;

	if (isFirstRender) {
		const button = document.createElement('button');
		button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                          <g fill="none" fillRule="evenodd" opacity=".4">
                            <path d="M0 0h11v11H0z" />
                            <path fill="#000" fillRule="nonzero" d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"/>
                          </g>
                        </svg>  Clear All`;

		button.addEventListener('click', () => {
			refine();
		});

		widgetParams.container.appendChild(button);
	}

	widgetParams.container.querySelector('button').disabled = !hasRefinements;
};



	function getSlug(name) {
	  return name.replace(/%2520/g, "+");
	}






// ******************************************************

// Articles 

// ******************************************************


if ($('#eb_articles').length) {


	// defaults
	const routeStateDefaultValues = {

		query: '',
		page: '1',
		category: '',
		is: '',
		sortBy: 'whitepapers',
		hitsPerPage: '16',
	};


	// global instantsearch 
	const originalWindowTitle = document.title;
	const router = instantsearch.routers.history({
		windowTitle(routeState) {
			const indexState = routeState.query || {}
			if (!indexState.length) {
				return originalWindowTitle;
			}
			return `${indexState} - Articles Hits | Expertbase`;
		},


		createURL({
			qsModule,
			routeState,
			location
		}) {


			const {
				protocol,
				hostname,
				port = '',
				pathname
			} = location;
			const portWithPrefix = port === '' ? '' : `:${port}`;
			const urlParts = location.href.match(/^(.*?)\//);
			const baseUrl = (urlParts && urlParts[0]) || `${protocol}${hostname}${portWithPrefix}${pathname}`;
			const queryParameters = {};


			if (routeState.query &&
				routeState.query !== routeStateDefaultValues.query) {
				queryParameters.query = encodeURIComponent(routeState.query);
			}

			if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
				queryParameters.page = routeState.page;
			}

			if (routeState.category &&
				routeState.category !== routeStateDefaultValues.category) {
				queryParameters.category = routeState.category.map(encodeURIComponent);
			}

			if (routeState.is &&
				routeState.is !== routeStateDefaultValues.is) {
				queryParameters.is = routeState.is.map(encodeURIComponent);
			}
			if (routeState.sortBy &&
				routeState.sortBy !== routeStateDefaultValues.sortBy) {
				queryParameters.sortBy = routeState.sortBy;
			}
			if (routeState.hitsPerPage &&
				routeState.hitsPerPage !== routeStateDefaultValues.hitsPerPage) {
				queryParameters.hitsPerPage = routeState.hitsPerPage;
			}



			const queryString = qsModule.stringify(queryParameters, {
				addQueryPrefix: true,
				arrayFormat: 'repeat',
			});

			const qu = getSlug(queryString)


			return `${baseUrl}articles/${qu}`;




		},


		parseURL({
			qsModule,
			location
		}) {

			const pathnameMatches = location.pathname.match(/articles\/(.*?)\/?$/);

			const queryParameters = qsModule.parse(location.search.slice(1));

			const {
				query = '', page, category = [], is = [], sortBy = '', hitsPerPage = ''
			} = queryParameters;


			const allcomp = Array.isArray(category) ? category : [category].filter(Boolean);
			const allis = Array.isArray(is) ? is : [is].filter(Boolean);


			return {
				query: decodeURIComponent(query),
				page,
				sortBy,
				hitsPerPage,
				category: allcomp.map(decodeURIComponent),
				is: allis.map(decodeURIComponent),
			};
		},
	});

	const stateMapping = {
		stateToRoute(uiState) {
			return {
				query: uiState.whitepapers.query,
				page: uiState.whitepapers.page,
				sortBy: uiState.whitepapers.sortBy,
				hitsPerPage: uiState.whitepapers.hitsPerPage,
				category: uiState.whitepapers.refinementList && uiState.whitepapers.refinementList.competency,
				is: uiState.whitepapers.refinementList && uiState.whitepapers.refinementList.popularity,
			};
		},

		routeToState(routeState) {
			return {

				whitepapers: {
					query: routeState.query,
					page: routeState.page,
					sortBy: routeState.sortBy,
					hitsPerPage: routeState.hitsPerPage,
					refinementList: {
						competency: routeState.category,
						popularity: routeState.is,
					},
				}
			};
		},
	};

	const searchRouting = {
		router,
		stateMapping,
	};


	const s = instantsearch({
		indexName: 'whitepapers',
		searchClient,
		routing: searchRouting,

	});


	s.addWidgets([
		instantsearch.widgets.searchBox({
			container: '[data-widget="searchbox"]',
			placeholder: 'Search all Articles',
		})
	]);

	s.addWidgets([
		instantsearch.widgets.configure({
			hitsPerPage: 16,
		})
	]);


	// Current Refinements Tags
	s.addWidgets([
		instantsearch.widgets.currentRefinements({
			container: '[data-widget="refine"]',
			excludedAttributes: ['reading_time'],

		})
	]);


	// Create the custom widget
	const customStats = instantsearch.connectors.connectStats(renderStats);

	// Instantiate the stats widget
	s.addWidgets([
		customStats({
			container: document.querySelector('[data-widget="stats"]'),
		})
	]);


	// Main Clear Filters 

	const customClearRefinements = instantsearch.connectors.connectClearRefinements(
		renderClearRefinements
	);

	s.addWidgets([
		customClearRefinements({
			container: document.querySelector('[data-widget="clear-filters"]'),
			includedAttributes: ['query', 'competency', 'popularity', 'reading_time'],
		})
	]);


	// mobile clear filter
	s.addWidgets([
		instantsearch.widgets.clearRefinements({
			container: '.ais-ClearRefinements-button',
			includedAttributes: ['query', 'competency', 'popularity', 'reading_time'],
			templates: {
				resetLabel: 'Clear Filters',
			},
		})
	]);


	// Sort by
	s.addWidgets([
		instantsearch.widgets.sortBy({
			container: '[data-widget="sort-by"]',
			items: [{
					value: 'whitepapers',
					label: 'Newer Desc'
				},
				{
					value: 'claps',
					label: 'Claps Desc'
				},
				{
					value: 'mostread',
					label: 'Read Desc'
				}
			]
		})
	]);


	// Cats
	s.addWidgets([
		instantsearch.widgets.refinementList({
			container: '[data-widget="competency"]',
			attribute: 'competency',
			searchable: true,
			searchablePlaceholder: 'Search Categories',
			showMore: true,
			limit: 15,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		})
	]);


	// pop
	s.addWidgets([
		instantsearch.widgets.refinementList({
			container: '[data-widget="popularity"]',
			attribute: 'popularity',
			searchable: false,
			showMore: false,
			limit: 3,
		})
	]);


	s.addWidgets([
		instantsearch.widgets.rangeSlider({
			container: '[data-widget="reading_time"]',
			attribute: 'reading_time',
			tooltips: false,
		})
	]);


	// hits template

	s.addWidgets([
		instantsearch.widgets.hits({

			container: '[data-widget="hits"]',

			templates: {

				item: `
	  		<div class="profilebox">

				{{^celeb}}
					<a href="/unlock-{{siteid}}" class="tips key_plc" title="<b>Unlock</b> {{f40}}'s full contact details instantly!">
						<svg class="eb key"><use href="/s.svg#key"></use></svg>
					</a>
				{{/celeb}}
					
				<a href="/a{{objectID}}-{{escaped_title}}">
					<div class="img_wrap50">
						<img src="/im/50_{{filename}}" width="50" height="50" loading='lazy' class="img-circle apic tips" title="Meet {{f40}} - {{singular}} from {{f12}}, {{countryname}} the contributor of <b>'{{header}}'</b>">
						<div class="tips aflag50 fg fg-{{flag}}" title="{{f40}} travels from <b>{{f12}}, {{countryname}}</b><br><br><a href='/?departs={{countryname}}'>More Experts from {{countryname}}</a>""></div>
					</div>
				</a>
				<div class="dim"><svg class="eb_label clock-o"><use href="/s.svg#clock-o"></use></svg>{{reading_time}} min  |  <svg class="eb_label rythm"><use href="/s.svg#rythm"></use></svg>{{claps}}</div>
				<h1>
					<a href="/a{{objectID}}-{{escaped_title}}">{{{_highlightResult.header.value}}}</a>
				</h1>
				<h2 class="h2fetch">
					A full-text Business Article by <a href="/{{siteid}}" class="tips" title="Visit <b>{{f40}}'s Business Profile</b> Now on Expertbase">{{{_highlightResult.f40.value}}}</a> | A {{{_highlightResult.singular.value}}} from {{{_highlightResult.f12.value}}}, {{{_highlightResult.countryname.value}}}
				</h2>
		        
		        <div class="trips" data-id="{{objectID}}"></div>
				
				{{#PREMIUM}}
					<a href="/{{objectID}}#queries" class="tips lpro" title="{{f40}} has a <b>Premium Profile</b> with Expertbase.<p><a href='/{{objectID}}#queries'>Write to {{f40}} DIRECT!</a></p><p><a href='/?premium=true'>More Premium Profiles</a>">
						<svg class='eb_label envelope-o'><use href='/s.svg#envelope-o'></use></svg>PRO+
					</a>
				{{/PREMIUM}}
									
				{{#updated}}
					<div class="lgrn" title="{{f40}} has a {{{updated}}} Profile.">
						<svg class="eb_label bell"><use href="/s.svg#bell"></use></svg>{{{updated}}}
					</div>
				{{/updated}}
				
				{{#popularity}}
					<a href="/a{{objectID}}-{{escaped_title}}" class="tips lorange" title="'<b>{{header}}</b>' is a {{popularity}} Article.<p><a href='/a{{objectID}}-{{escaped_title}}'><p>▸ Read Now.</a>">
						<svg class="eb_label star1"><use href="/s.svg#star1"></use></svg>{{popularity}}
					</a>
				{{/popularity}}


				<a href="/articles?category={{competency}}" class="tips lblck" title="This Article is filed in Category <b>'{{competency}}'</b>. <a href='/articles?category={{competency}}'><p>▸ More Articles on {{competency}}</a>">
					<svg class="eb_label folder-open-o"><use href="/s.svg#folder-open-o"></use></svg>{{{_highlightResult.competency.value}}}
				</a>


				<div class="s14">
			        {{{_highlightResult.intro.value}}}<br>
				    <span class="q">{{#helpers.snippet}}{ "attribute": "partone" }{{/helpers.snippet}} {{#helpers.snippet}}{ "attribute": "parttwo" }{{/helpers.snippet}}</span>
			    </div>     				        
			</div>
      `,
				empty: empty,
			},
		})
	]);


	$(function () {

		// Hits per Page
		s.addWidgets([
			instantsearch.widgets.hitsPerPage({
				container: '[data-widget="hits-per-page"]',
				items: [{
						label: '6 Articles',
						value: 6
					},
					{
						label: '12 Articles',
						value: 12,
						default: true
					},
					{
						label: '20 Articles',
						value: 20
					},
					{
						label: '26 Articles',
						value: 26
					},
				],
			})
		]);

	});


	// Pagi Top
	s.addWidgets([
		instantsearch.widgets.pagination({
			container: '[data-widget="pag1"]',

			padding: 2,
			showFirst: false,
			showLast: false,
			scrollTo: false,
			templates: {
				previous: p,
				next: n,

			}
		})
	]);


	// Pagi Bottom
	s.addWidgets([
		instantsearch.widgets.pagination({
			container: '[data-widget="pag2"]',

			padding: 2,
			showFirst: false,
			showLast: false,
			scrollTo: false,
			templates: {
				previous: p,
				next: n,

			}
		})
	]);


	// Execute after Search is complete : Update trips + scroll to top is bottom pagi page was clicked
	s.on('render', () => {

		$('.q:not(:has(.ais-Snippet-highlighted))').remove();


		grid_item_height();
		new $.Zebra_Tooltips($('.tips'));


	});


	s.start();


}


// ******************************************************

// Opportunities 

// ******************************************************


if ($('#eb_opps').length) {


	// defaults
	const routeStateDefaultValues = {

		query: '',
		page: '1',
		cat: '',
		country: '',
		expertise: '',
		sectors: '',
		language: '',
		delivery: '',
		hitsPerPage: '16',
	};


	// global instantsearch 
	const originalWindowTitle = document.title;
	const router = instantsearch.routers.history({
		windowTitle(routeState) {
			const indexState = routeState.query || {}
			if (!indexState.length) {
				return originalWindowTitle;
			}
			return `${indexState} - Open Opportunities | Expertbase`;
		},


		createURL({
			qsModule,
			routeState,
			location
		}) {


			const {
				protocol,
				hostname,
				port = '',
				pathname
			} = location;
			const portWithPrefix = port === '' ? '' : `:${port}`;
			const urlParts = location.href.match(/^(.*?)\//);
			const baseUrl = (urlParts && urlParts[0]) || `${protocol}${hostname}${portWithPrefix}${pathname}`;
			const queryParameters = {};


			if (routeState.query &&
				routeState.query !== routeStateDefaultValues.query) {
				queryParameters.query = encodeURIComponent(routeState.query);
			}

			if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
				queryParameters.page = routeState.page;
			}

			if (routeState.cat &&
				routeState.cat !== routeStateDefaultValues.cat) {
				queryParameters.cat = routeState.cat.map(encodeURIComponent);
			}

			if (routeState.country &&
				routeState.country !== routeStateDefaultValues.country) {
				queryParameters.country = routeState.country.map(encodeURIComponent);
			}

			if (routeState.expertise &&
				routeState.expertise !== routeStateDefaultValues.expertise) {
				queryParameters.expertise = routeState.expertise.map(encodeURIComponent);
			}

			if (routeState.sectors &&
				routeState.sectors !== routeStateDefaultValues.sectors) {
				queryParameters.sectors = routeState.sectors.map(encodeURIComponent);
			}

			if (routeState.language &&
				routeState.language !== routeStateDefaultValues.language) {
				queryParameters.language = routeState.language.map(encodeURIComponent);
			}

			if (routeState.delivery &&
				routeState.delivery !== routeStateDefaultValues.delivery) {
				queryParameters.delivery = routeState.delivery.map(encodeURIComponent);
			}

			if (routeState.hitsPerPage &&
				routeState.hitsPerPage !== routeStateDefaultValues.hitsPerPage) {
				queryParameters.hitsPerPage = routeState.hitsPerPage;
			}

			
			const queryString = qsModule.stringify(queryParameters, {
				addQueryPrefix: true,
				arrayFormat: 'repeat',
			});

			const qu = getSlug(queryString)


			return `${baseUrl}opportunities/${qu}`;

			
			
		},


		parseURL({
			qsModule,
			location
		}) {

			const pathnameMatches = location.pathname.match(/opportunities\/(.*?)\/?$/);

			const queryParameters = qsModule.parse(location.search.slice(1));

			const {
				query = '', page, cat = [], country = [], expertise = [], sectors = [], language = [], delivery = '', hitsPerPage = ''
			} = queryParameters;


			const allcat = Array.isArray(cat) ? cat : [cat].filter(Boolean);
			const allcountry = Array.isArray(country) ? country : [country].filter(Boolean);
			const allexpertise = Array.isArray(expertise) ? expertise : [expertise].filter(Boolean);
			const allsectors = Array.isArray(sectors) ? sectors : [sectors].filter(Boolean);
			const alllanguage = Array.isArray(language) ? language : [language].filter(Boolean);
			const alldelivery = Array.isArray(delivery) ? delivery : [delivery].filter(Boolean);


			return {
				query: decodeURIComponent(query),
				page,
				hitsPerPage,
				cat: allcat.map(decodeURIComponent),
				country: allcountry.map(decodeURIComponent),
				expertise: allexpertise.map(decodeURIComponent),
				sectors: allsectors.map(decodeURIComponent),
				language: alllanguage.map(decodeURIComponent),
				delivery: alldelivery.map(decodeURIComponent),
			};
		},
	});

	const stateMapping = {
		stateToRoute(uiState) {
			return {
				query: uiState.opportunities.query,
				page: uiState.opportunities.page,
				hitsPerPage: uiState.opportunities.hitsPerPage,
				cat: uiState.opportunities.refinementList && uiState.opportunities.refinementList.cat,
				country: uiState.opportunities.refinementList && uiState.opportunities.refinementList.country,
				expertise: uiState.opportunities.refinementList && uiState.opportunities.refinementList.expertise,
				sectors: uiState.opportunities.refinementList && uiState.opportunities.refinementList.sectors,
				language: uiState.opportunities.refinementList && uiState.opportunities.refinementList.language,
				delivery: uiState.opportunities.refinementList && uiState.opportunities.refinementList.delivery,
			};
		},

		routeToState(routeState) {
			return {

				opportunities: {
					query: routeState.query,
					page: routeState.page,
					hitsPerPage: routeState.hitsPerPage,
					refinementList: {
						cat: routeState.cat,
						country: routeState.country,
						expertise: routeState.expertise,
						sectors: routeState.sectors,
						language: routeState.language,
						delivery: routeState.delivery,
					},
				}
			};
		},
	};

	const searchRouting = {
		router,
		stateMapping,
	};


	const s = instantsearch({
		indexName: 'opportunities',
		searchClient,
		routing: searchRouting,
	});


	s.addWidgets([
		instantsearch.widgets.searchBox({
			container: '[data-widget="searchbox"]',
			placeholder: 'Search all Opportunities',
		})
	]);

	s.addWidgets([
		instantsearch.widgets.configure({
			hitsPerPage: 16,
		})
	]);


	// Current Refinements Tags
	s.addWidgets([
		instantsearch.widgets.currentRefinements({
			container: '[data-widget="refine"]',
			includedAttributes: ['query', 'sectors', 'language', 'expertise', 'cat', 'country', 'delivery'],
		})
	]);


	// Create the custom widget
	const customStats = instantsearch.connectors.connectStats(renderStats);

	// Instantiate the stats widget
	s.addWidgets([
		customStats({
			container: document.querySelector('[data-widget="stats"]'),
		})
	]);


	// Main Clear Filters 

	const customClearRefinements = instantsearch.connectors.connectClearRefinements(
		renderClearRefinements
	);

	s.addWidgets([
		customClearRefinements({
			container: document.querySelector('[data-widget="clear-filters"]'),
			includedAttributes: ['query', 'sectors', 'language', 'expertise', 'cat', 'country', 'delivery'],
		})
	]);


	// mobile clear filter
	s.addWidgets([
		instantsearch.widgets.clearRefinements({
			container: '.ais-ClearRefinements-button',
			includedAttributes: ['query', 'sectors', 'language', 'expertise', 'cat', 'country', 'delivery'],
			templates: {
				resetLabel: 'Clear Filters',
			},
		})
	]);


	// Opp Type
	s.addWidgets([
		instantsearch.widgets.refinementList({
			container: '[data-widget="cat"]',
			attribute: 'cat',
			searchable: true,
			searchablePlaceholder: 'Search ...',
			showMore: true,
			limit: 15,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		})
	]);


	// project_country
	s.addWidgets([
		instantsearch.widgets.refinementList({
			container: '[data-widget="country"]',
			attribute: 'country',
			searchable: true,
			searchablePlaceholder: 'Search ...',
			showMore: true,
			limit: 15,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		})
	]);


	// delivery type
	s.addWidgets([
		instantsearch.widgets.refinementList({
			container: '[data-widget="deltype"]',
			attribute: 'delivery',
		})
	]);


	// expertise
	s.addWidgets([
		instantsearch.widgets.refinementList({
			container: '[data-widget="expertise"]',
			attribute: 'expertise',
			searchable: true,
			searchablePlaceholder: 'Search ...',
			showMore: true,
			limit: 15,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		})
	]);


	// sectors
	s.addWidgets([
		instantsearch.widgets.refinementList({
			container: '[data-widget="sectors"]',
			attribute: 'sectors',
			searchable: true,
			searchablePlaceholder: 'Search ...',
			showMore: true,
			limit: 15,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		})
	]);


	// lang
	s.addWidgets([
		instantsearch.widgets.refinementList({
			container: '[data-widget="language"]',
			attribute: 'language',
			searchable: true,
			searchablePlaceholder: 'Search ...',
			showMore: true,
			limit: 15,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		})
	]);


	// hits template

	s.addWidgets([
		instantsearch.widgets.hits({

			container: '[data-widget="hits"]',

			templates: {

				item: `
	  		
	  {{#live}}
	  		<div class="profilebox">
	  			<div class="circle">
					<div class="flag_opp tips fg48 fg48-{{flag}}" title="{{#online}}This is a <b>Live / Virtual {{cat}} Opportunity</b> requested by a client for {{country}} {{/online}}{{^online}}This Opportunity will take place in <b>{{opp_venue}}</b>{{/online}}<p><a href='/opportunities?country={{country}}'>▸ More Opportunities in {{country}}</a>">
					</div>
				</div>
				
				<h1>
					<a href="/opportunity-{{objectID}}-{{escaped_title}}">{{{_highlightResult.opp_title.value}}}</a>
				</h1>     


				<div class='divider'></div>
				
				<div class="size-13">Opportunity Type:</div>

				<div class="tips lblck" title="This Opportunity is filed in Category <b>'{{cat}}'</b>. <a href='/opportunities?in={{cat}}'><p>▸ More Opportunities in {{cat}}</a>">
					<svg class="eb_label folder-open-o"><use href="/s.svg#folder-open-o"></use></svg>{{{_highlightResult.cat.value}}}
				</div>
				

				<div class='divider'></div>

				<div class="size-13">Start:</div>
				<div class="relat">
				<div class="tips llang" title="This Opportunity's start date is <b>{{opp_startdate}}</b><p><a href='opportunity-{{objectID}}-{{escaped_title}}' class='apply'>Apply {{#opp_startdate}}before{{/opp_startdate}} {{opp_applic_closing}}</a>">
					<svg class='eb_label cal'><use href='/s.svg#cal'></use></svg>{{{_highlightResult.opp_startdate.value}}}
				</div>
				</div>
				
				<div class="size-13">Duration:</div>
				<div class="relat">
				<div class="tips llang" title="This Opportunity's duration is <b>{{opp_duration}}</b>">
					<svg class='eb_label clock-o'><use href='/s.svg#clock-o'></use></svg>{{{_highlightResult.opp_duration.value}}}
				</div>
				</div>

				<div class="size-13">Venue:</div>
				<div class="relat">
				<div class="tips {{#online}}lyell{{/online}}{{^online}}llang{{/online}}" title="<span class='flex abs'><svg class='eb info-circle'><use href='/s.svg#info-circle'></use></svg></span>This Opportunity {{#online}}shall be delivered <b>Live Online / Virtually to the client's audience in {{country}}</b>.{{/online}}{{^online}}take place live with physical presence requested in <b>{{opp_venue}}</b>{{/online}} <div class='divider'></div><a href='/opportunities?country={{country}}'>▸ More Opportunities in {{country}}</a>">
					<svg class='eb_label map-marker'><use href='/s.svg#map-marker'></use></svg>{{{_highlightResult.opp_venue.value}}}<span class="flex"><svg class='eb {{#online}}video{{/online}}{{^online}}plane{{/online}} size-20'><use href='/s.svg#{{#online}}video{{/online}}{{^online}}plane{{/online}}'></use></svg></span>
				</div>
				</div>
				
				<div class="size-13">Main Delivery Language:</div>
				<div class="relat">
				<div class="tips llang" title="Language of Delivery for this Opportunity shall mainly be <b>{{language}}</b>.<div class='divider'></div><a href='/opportunities?language={{language}}'>▸ More Opps with delivery in {{language}} Language</a>">
					<svg class='eb_label comment'><use href='/s.svg#comment'></use></svg>{{{_highlightResult.language.value}}} 
				</div>
				</div>

				<div class='divider'></div>


				{{#expertise.0}}
					<div class="showmore"><svg class="eb_label chevron-down"><use href="/s.svg#chevron-down"></use></svg>Show More</div>
				{{/expertise.0}}
				
				<div class="mr softhide">
				{{#expertise.0}}
					<div class="size-13">Required Specialisation:</div>
					{{#expertise}}
						<div class="tips lorange" title="This Opportunity requires an applicant to have expertise / experience delivering projects in, or closely related to, <b>{{.}}</b>.<p><a href='?expertise={{.}}'>▸ More Opportunities req. '{{.}}'</a>">
							<svg class='eb_label wrench'><use href='/s.svg#wrench'></use></svg>{{.}}
						</div>
					{{/expertise}}
				{{/expertise.0}}
	
					<div class='divider'></div>
	
				{{#sectors.0}}
					<div class="size-13">Requested Sector Experience:</div>
					{{#sectors}}
						<div class="tips lgrn" title="The client indicated that Applicants with relevant Industry/Sector Experience in, or closely related to <b>{{.}}</b> may be an advantage.<p><a href='?sectors={{.}}' may be of advantage>▸ More Opportunities req. '{{.}}'</a>">
							<svg class='eb_label industry'><use href='/s.svg#industry'></use></svg>{{.}}
						</div>
					{{/sectors}}
				{{/sectors.0}}
				</div>
				

				<div class='divider'></div>

				<div class="s14">
				    <span class="q">{{#helpers.snippet}}{ "attribute": "opp_description" }{{/helpers.snippet}}</span>
			    </div>     				        
			</div>
	{{/live}}
      `,
				empty: empty,
			},
		})
	]);


	$(function () {
		// Hits per Page
		s.addWidgets([
			instantsearch.widgets.hitsPerPage({
				container: '[data-widget="hits-per-page"]',
				items: [{
						label: '6 / Page',
						value: 6,
						default: true
					},
					{
						label: '12 / Page',
						value: 12
					},
					{
						label: '18 / Page',
						value: 18
					},
					{
						label: '24 / Page',
						value: 24
					},
				],
			})
		]);

	});


	// Pagi Top
	s.addWidgets([
		instantsearch.widgets.pagination({
			container: '[data-widget="pag1"]',

			padding: 2,
			showFirst: false,
			showLast: false,
			scrollTo: false,
			templates: {
				previous: p,
				next: n,

			}
		})
	]);


	// Pagi Bottom
	s.addWidgets([
		instantsearch.widgets.pagination({
			container: '[data-widget="pag2"]',

			padding: 2,
			showFirst: false,
			showLast: false,
			scrollTo: false,
			templates: {
				previous: p,
				next: n,

			}
		})
	]);


	// Execute after Search is complete : Update trips + scroll to top is bottom pagi page was clicked
	s.on('render', () => {

		$('.q:not(:has(.ais-Snippet-highlighted))').remove();


		grid_item_height();
		new $.Zebra_Tooltips($('.tips'));


	});


	s.start();


}
$(function () {
	$('body').on('click', '.showmore', function () {

		$(this).hide();
		$(this).siblings('.mr').slideDown();
		setTimeout(
			function () {
				grid_item_height();
			}, 700);
	});

});