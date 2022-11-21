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

// Stats render function
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



// turn ' ' to '+' for all parameters other than category

function getSlug(name) {
	  return name.replace(/%2520/g, "+");
}





// ******************************************

// Experts

// ******************************************





			
			// Returns a slug from the category name.
			// Spaces are replaced by "-" to make
			// the URL easier to read and other
			// characters are encoded.
			function getCategorySlug(name) {
			  return name.split(' ').map(encodeURIComponent).join('+');
			}
			
			
			// Returns a name from the category slug.
			// The "-" are replaced by spaces and other
			// characters are decoded.
			function getCategoryName(slug) {
			  return slug.split('+').map(decodeURIComponent).join(' ');
			}
			


			const originalWindowTitle = document.title;

			const router = instantsearch.routers.history({
			  
			  windowTitle({ category, query }) {
			  
			    const queryTitle = query ? `Results for "${query}" | Expertbase` : originalWindowTitle;
			
			    if (category) {
			      return `${category} – ${queryTitle}`;
			    }
			
			    return queryTitle;
			  },


		createURL({ qsModule, routeState, location }) {
		    const urlParts = location.href.match(/^(.*?)\/experts/);
		    const baseUrl = `${urlParts ? urlParts[1] : ''}/`;
	
		    const categoryPath = routeState.category
		      ? `experts/${getCategorySlug(routeState.category)}/`
		      : '';
		    const queryParameters = {};




			if (routeState.query) { queryParameters.query = encodeURIComponent(routeState.query); }

			if (routeState.page !== 1) {queryParameters.page = routeState.page;}

			if (routeState.sortBy && routeState.sortBy !== 'experts') {	queryParameters.sortBy = routeState.sortBy;}

			if (routeState.hitsPerPage && routeState.hitsPerPage !== '16') {queryParameters.hitsPerPage = routeState.hitsPerPage;}

			if (routeState.departs) {queryParameters.departs = routeState.departs.map(encodeURIComponent);}

			if (routeState.expertise) {queryParameters.expertise = routeState.expertise.map(encodeURIComponent);}

			if (routeState.sector) {queryParameters.sector = routeState.sector.map(encodeURIComponent);}

			if (routeState.titles) {queryParameters.titles = routeState.titles.map(encodeURIComponent);}

			if (routeState.speaks) {queryParameters.speaks = routeState.speaks.map(encodeURIComponent);}

			if (routeState.worked_in) {queryParameters.worked_in = routeState.worked_in.map(encodeURIComponent);}

			if (routeState.trips &&	routeState.trips !== false) {queryParameters.trips = routeState.trips;}

			if (routeState.has_articles && routeState.has_articles !== false) {queryParameters.has_articles = routeState.has_articles;}

			if (routeState.premium && routeState.premium !== false) {queryParameters.premium = routeState.premium;}


			const queryString = qsModule.stringify(queryParameters, {
				addQueryPrefix: true,
				arrayFormat: 'repeat',
			});

			const qu = getSlug(queryString)
			
						

			
		    return `${baseUrl}${categoryPath}${qu}`;
		},




		  parseURL({ qsModule, location }) {
		   
		   
		   
		    const pathnameMatches = location.pathname.match(/experts\/(.*?)\/?$/);
		    
		    const category = getCategoryName((pathnameMatches && pathnameMatches[1]) || '');
			


			const {
				query = '', page, sortBy = '', hitsPerPage = '', departs = [], expertise = [], sector = [], titles = [], speaks = [], worked_in = [], trips, has_articles, premium
			} = qsModule.parse(location.search.slice(1));





			const allfrom 		= Array.isArray(departs) 	? departs 	: [departs].filter(Boolean);
			const allexpertise 	= Array.isArray(expertise) 	? expertise : [expertise].filter(Boolean);
			const allsector 	= Array.isArray(sector) 	? sector 	: [sector].filter(Boolean);
			const alltitles 	= Array.isArray(titles) 	? titles 	: [titles].filter(Boolean);
			const allspeaks 	= Array.isArray(speaks) 	? speaks 	: [speaks].filter(Boolean);
			const allworked_in 	= Array.isArray(worked_in)	? worked_in : [worked_in].filter(Boolean);


			return {
				query: decodeURIComponent(query),
				page,
				sortBy,
				hitsPerPage,
				departs: 	allfrom.map(decodeURIComponent),
				expertise: 	allexpertise.map(decodeURIComponent),
				sector: 	allsector.map(decodeURIComponent),
				titles: 	alltitles.map(decodeURIComponent),
				speaks: 	allspeaks.map(decodeURIComponent),
				worked_in: 	allworked_in.map(decodeURIComponent),
				trips,
				has_articles,
				premium,
				category,
			};
		},
	});
	

	const stateMapping = {
		stateToRoute(uiState) {
			return {
				query: 			uiState.experts.query,
				page: 			uiState.experts.page,
				sortBy: 		uiState.experts.sortBy,
				hitsPerPage: 	uiState.experts.hitsPerPage,
				departs: 		uiState.experts.refinementList && uiState.experts.refinementList.countryname,
				expertise: 		uiState.experts.refinementList && uiState.experts.refinementList.spezies,
				sector: 		uiState.experts.refinementList && uiState.experts.refinementList.sectors,
				titles: 		uiState.experts.refinementList && uiState.experts.refinementList.titles,
				speaks: 		uiState.experts.refinementList && uiState.experts.refinementList.languages,
				worked_in: 		uiState.experts.refinementList && uiState.experts.refinementList.visited,
				trips: 			uiState.experts.toggle && uiState.experts.toggle.trips,
				has_articles: 	uiState.experts.toggle && uiState.experts.toggle.has_articles,
				premium: 		uiState.experts.toggle && uiState.experts.toggle.premium,
				category: 		uiState.experts.menu && uiState.experts.menu.catname,
			};
		},

		routeToState(routeState) {
			return {

				experts: {
					query: 			routeState.query,
					page: 			routeState.page,
					sortBy: 		routeState.sortBy,
					hitsPerPage: 	routeState.hitsPerPage,
					menu: {
						catname: 	routeState.category,
					},
					refinementList: {
						countryname:routeState.departs,
						spezies: 	routeState.expertise,
						sectors: 	routeState.sector,
						titles: 	routeState.titles,
						languages: 	routeState.speaks,
						visited: 	routeState.worked_in,
					},
					toggle: {
						trips: 		routeState.trips,
						has_articles:routeState.has_articles,
						premium: 	routeState.premium,
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
		indexName: 'experts',
		searchClient,
		routing: searchRouting,
	});







	// Create the custom widget
	const customStats = instantsearch.connectors.connectStats(renderStats);


	// Main Clear Filters 
	const customClearRefinements = instantsearch.connectors.connectClearRefinements(
		renderClearRefinements
	);





	s.addWidgets([
		
		// Searchbox
		instantsearch.widgets.searchBox({
			container: '[data-widget="searchbox"]',
			placeholder: 'Search for Experts',
		}),


		// Hits per page
		instantsearch.widgets.configure({
			hitsPerPage: 16,
			filters: 'valid:1 AND paused:0',
		}),
	
	
	
		// Instantiate the stats widget
		customStats({container: document.querySelector('[data-widget="stats"]')}),
	
	
	
	
		// refinements
		customClearRefinements({
			container: document.querySelector('[data-widget="clear-filters"]'),
			includedAttributes: ['query', 'trips', 'catname', 'spezies', 'countryname', 'sectors', 'titles', 'languages', 'visited', 'PREMIUM', 'has_articles', 'stars_avg'],
		}),
	
	
	
	
	
		// mobile clear filter
		instantsearch.widgets.clearRefinements({
			container: '.ais-ClearRefinements-button',
			includedAttributes: ['query', 'trips', 'catname', 'spezies', 'countryname', 'sectors', 'titles', 'languages', 'visited', 'PREMIUM', 'has_articles', 'stars_avg'],
			templates: {
				resetLabel: 'Clear Filters',
			},
		}),




		// Sort by
		instantsearch.widgets.sortBy({
			container: '[data-widget="sort-by"]',
			items: [{
					value: 'experts',
					label: 'Newer First'
				},
				{
					value: 'experts_by_pop',
					label: 'Pop Desc'
				}
			]
		}),




		// Current Refinements Tags
		instantsearch.widgets.currentRefinements({
			container: '[data-widget="refine"]',
			excludedAttributes: ['trips', 'has_articles', 'PREMIUM'],
		}),




		// Expert Categories
		instantsearch.widgets.menu({
			container: '[data-widget="cats"]',
			attribute: 'catname',
			sortBy: ['count:desc'],
			searchable: true,
			searchablePlaceholder: 'Search Categories',
			showMore: true,
			limit: 5,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		}),




		// Spezies
		instantsearch.widgets.refinementList({
			container: '[data-widget="exp"]',
			attribute: 'spezies',
			searchable: true,
			searchablePlaceholder: 'Search Expertise',
			showMore: true,
			limit: 5,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		}),




		// from
		instantsearch.widgets.refinementList({
			container: '[data-widget="countr"]',
			attribute: 'countryname',
			searchable: true,
			limit: 5,
			searchablePlaceholder: 'Search Countries',
			showMore: true,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		}),




		// Sectors
		instantsearch.widgets.refinementList({
			container: '[data-widget="sectors"]',
			attribute: 'sectors',
			searchable: true,
			searchablePlaceholder: 'Search Sectors',
			showMore: true,
			showMoreLimit: 50,
			limit: 5,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		}),




		// titles
		instantsearch.widgets.refinementList({
			container: '[data-widget="titles"]',
			attribute: 'titles',
			searchable: true,
			searchablePlaceholder: 'Search them',
			showMore: true,
			showMoreLimit: 50,
			limit: 5,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		}),
		
		


		// Languages
		instantsearch.widgets.refinementList({
			container: '[data-widget="lang"]',
			attribute: 'languages',
			searchable: true,
			showMoreLimit: 50,
			showMore: true,
			limit: 5,
			searchablePlaceholder: 'Search Languages',
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		}),




		// Visited
		instantsearch.widgets.refinementList({
			container: '[data-widget="vis"]',
			attribute: 'visited',
			searchable: true,
			showMore: true,
			showMoreLimit: 50,
			limit: 5,
			searchablePlaceholder: 'Search Countries',
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		}),



		// Premium Toggle
		instantsearch.widgets.toggleRefinement({
			container: '[data-widget="premium"]',
			attribute: 'PREMIUM',
			on: 1,

			templates: {
				labelText: "<svg class='eb_label envelope-o'><use href='/s.svg#envelope-o'></use></svg>PRO+ / Contact Direct",
			},
		}),




		// Articles Toggle
		instantsearch.widgets.toggleRefinement({
			container: '[data-widget="wp"]',
			attribute: 'has_articles',
			on: true,

			templates: {
				labelText: "<svg class='eb_label file-o'><use href='/s.svg#file-o'></use></svg>Experts with Articles",
			},
		}),




		// trips Toggle
		instantsearch.widgets.toggleRefinement({
			container: '[data-widget="trips"]',
			attribute: 'trips',
			on: true,

			templates: {
				labelText: "<svg class='eb_label plane'><use href='/s.svg#plane'></use></svg>Experts with Trips",
			},
		}),




		// Star Rating
		instantsearch.widgets.ratingMenu({
			container: '[data-widget="ratings"]',
			attribute: 'stars_avg'
		}),




		// Pagi Top
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
		}),




		// Pagi Bottom
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
		}),





		// hits template
		instantsearch.widgets.hits({

			container: '[data-widget="hits"]',

			templates: {

				item: `
	  		<div class="profilebox">

					{{^celeb}}
						<a href="/unlock-{{objectID}}" class="tips key_plc" title="<b>Unlock</b> {{f40}}'s full contact details instantly!">
							<svg class="eb key"><use href="/s.svg#key"></use></svg>
						</a>
					{{/celeb}}
					
						<a href="/{{objectID}}">
							<div class="img_wrap70">
								<img src="/im/md_{{filename}}" loading='lazy' width="70" height="70" class="img-circle apic" alt="{{f40}} - {{singular}} from <b>{{f12}}, {{countryname}}</b>">
								<div class="tips aflag70 fg fg-{{flag}}" title="{{f40}} travels from {{f12}}, {{countryname}}<br><br><a href='?departs={{countryname}}'>More Experts from {{countryname}}</a>""></div>
							</div>
						</a>
						<h1>
							<a href="/{{objectID}}">{{{_highlightResult.sitetitle.value}}}</a>
						</h1>
					{{#stars_avg}}	
						<div class="showstars tips" data-stars="{{stars_avg}}" title="Average <b>{{stars_avg}} of 5 Stars</b> by 100% real & verified Clients<p><b><a href='/{{objectID}}#testimonials'>Read Testimonials</a></b>">
							<svg class='sr' data-rating='1'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
							<svg class='sr' data-rating='2'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
							<svg class='sr' data-rating='3'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
							<svg class='sr' data-rating='4'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
							<svg class='sr' data-rating='5'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
						</div>
					{{/stars_avg}}							
						<h2 class="h2fetch">
							{{{_highlightResult.f40.value}}} - {{{_highlightResult.singular.value}}} from {{{_highlightResult.f12.value}}}, {{{_highlightResult.countryname.value}}}
						</h2>
					
					{{#trips}}							
				        <div class="trips" data-id="{{objectID}}"></div>
   					{{/trips}}							
    
					{{#PREMIUM}}
						<a href="/{{objectID}}#queries" class="tips lpro" title="{{f40}} has a <b>Premium Profile</b> with Expertbase.<p><a href='/{{objectID}}#queries'>Write to {{f40}} DIRECT!</a></p><p><a href='/?premium=true'>More Premium Profiles</a>">
							<svg class='eb_label envelope-o'><use href='/s.svg#envelope-o'></use></svg>PRO+
						</a>
					{{/PREMIUM}}
										
					{{#updated}}
						<a href="javascript:void(0)" class="lgrn tips" title="{{f40}} has a <b>{{{updated}}}</b> Profile.">
							<svg class="eb_label bell"><use href="/s.svg#bell"></use></svg>{{{updated}}}
						</a>
					{{/updated}}
					
					{{#popindex}}
						<a href="/{{objectID}}" class="tips lorange" title="{{f40}} has a <b>{{popindex}}</b> Profile.">
							<svg class="eb_label star1"><use href="/s.svg#star1"></use></svg>{{popindex}}
						</a>
					{{/popindex}}


					<a href="/experts/{{catname}}" class="tips lblck" title="{{f40}} is a <b>{{singular}}</b>.<p><a href='/experts/{{catname}}'>▸ More {{catname}}</a>">
						<svg class="eb_label user-o"><use href="/s.svg#user-o"></use></svg>{{{_highlightResult.singular.value}}}
					</a>

					<a href="/?expertise={{f1_id}}" class="tips lgry" title="{{f40}} specialises in <b>{{f1_id}}</b> with {{f2}} Years Experience.<p><a href='/?expertise={{f1_id}}'>▸ More Experts into {{f1_id}}</a>">
						<svg class="eb_label wrench"><use href="/s.svg#wrench"></use></svg>{{{_highlightResult.f1_id.value}}} - {{f2}} Yrs
					</a>
					
					
					{{#f4_id}}
					<a href="/?expertise={{f4_id}}" class="tips lgry" title="{{f40}} specialises in <b>{{f4_id}}</b> with {{f5}} Years Experience.<p><a href='/?expertise={{f4_id}}'>▸ More Experts into {{f4_id}}</a>">
						<svg class="eb_label wrench"><use href="/s.svg#wrench"></use></svg>{{{_highlightResult.f4_id.value}}} - {{f5}} Yrs
					</a>
					{{/f4_id}}
					
					
					{{#f7_id}}
					<a href="/?expertise={{f7_id}}" class="tips lgry" title="{{f40}} specialises in <b>{{f7_id}}</b> with {{f8}} Years Experience.<p><a href='/?expertise={{f7_id}}'>▸ More Experts into {{f7_id}}</a>">
						<svg class="eb_label wrench"><use href="/s.svg#wrench"></use></svg>{{{_highlightResult.f7_id.value}}} - {{f8}} Yrs
					</a>
					{{/f7_id}}			
					
					{{#languages.0}}
					{{#languages}}
					<a href="/?speaks={{.}}" class="tips llang" title="{{f40}} is fluent and can deliver work in <b>{{.}}</b> and <b>English</b>).<p><a href='/?speaks={{.}}'>▸ More Experts fluent in {{.}}</a>">
						<svg class='eb_label comment'><use href='/s.svg#comment'></use></svg>{{.}}
					</a>
					{{/languages}}
					{{/languages.0}}
					
					{{#articles}}
						<a href="/?has_articles=true" class="tips lart" title="<a href='/{{objectID}}#profile_articles' class='profile_bar_btn'>Show Articles</a><p>{{f40}} published <b>{{articles}} free full-text Business Article/s</b>.<p><a href='/?has_articles=true'>▸ More Experts with Articles</a><br><a href='/articles'>▸ All Articles</a>">
							<svg class="eb_label file-o"><use href='/s.svg#file-o'></use></svg>ARTICLES <span class='badge bold'>{{articles}}</span>
						</a>
					{{/articles}}

					<div class="bg-results">
				        <span class="q">{{#helpers.snippet}}{ "attribute": "expertise" } {{/helpers.snippet}}</span>
				        <span class="q"><b>Keywords:</b> {{#helpers.snippet}}{ "attribute": "keywords" } {{/helpers.snippet}}</span>
				        <span class="q"><b>Profile:</b> {{#helpers.snippet}}{ "attribute": "profile" }{{/helpers.snippet}}</span>
				        <span class="q">{{#helpers.snippet}}{ "attribute": "f3" }{{/helpers.snippet}}</span>
				        <span class="q">{{#helpers.snippet}}{ "attribute": "f6" }{{/helpers.snippet}}</span>
				        <span class="q">{{#helpers.snippet}}{ "attribute": "f9" }{{/helpers.snippet}}</span>
				        <span class="q"><b>Clients:</b> {{#helpers.snippet}}{ "attribute": "clients" } {{/helpers.snippet}}</span>
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
						label: '6 Profiles',
						value: 6
					},
					{
						label: '12 Profiles',
						value: 12,
						default: true
					},
					{
						label: '20 Profiles',
						value: 20
					},
					{
						label: '26 Profiles',
						value: 26
					},
				],
			})
		]);

	});




	// Execute after Search is complete : Update trips + scroll to top if bottom pagi page was clicked
	s.on('render', () => {


		if (!window.location.hash.substr(1)) {


			$('.q:not(:has(.ais-Snippet-highlighted))').remove();


			if ($('.trips').length) {
				var a = $('.trips').map(function (x) {
					return $(this).data();
				}).toArray();

				$.ajax({
					type: 'POST',
					url: '/tripped',
					data: {
						a: a
					},
					success: function (d) {
						var res = $.parseJSON(d);
						$.each(res, function (i, itm) {
							$("div[data-id=" + i + "]").html(itm);
						});
						new $.Zebra_Tooltips($('.tips'));
						grid_item_height();

					}
				});
			}


			$('body').on('click', '.ais-Pagination-item--page', function () {
				var body = $("html, body");

				setTimeout(
					function () {
						body.stop().animate({
							scrollTop: 0
						}, 800);
					}, 300);
			});


		}
		grid_item_height();

		new $.Zebra_Tooltips($('.tips'));


	});


s.start();


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