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
				      Need help with this?
				    </p>
				    <p class="hits-empty-state-description">
				      <a href="#contact"><button class='action_btn'>Just Ask!<button></a>
				    </p>
				    
				  </div><p>&nbsp;</p>
                <a href="/">▸ Reset All</a><p><p>
                <a href="/experts">▸ Experts</a> | <a href="/articles">▸ Articles</a> | <a href="/opportunities">▸ Opportunities</a>
              </div>`;





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
                        </svg>  Clear Filters`;

		button.addEventListener('click', () => {
			refine();
		});

		widgetParams.container.appendChild(button);
	}

	!hasRefinements ? $("#experts_clear-filters").hide() : $("#experts_clear-filters").show();
};




function getSlug(name) {
	  return name.replace(/%2520/g, "+");
}





// ******************************************

// Experts

// ******************************************




			
			// Returns a slug from the category name.
			// Spaces are replaced by "+" to make
			// the URL easier to read and other
			// characters are encoded.
			function getCategorySlug(name) { 
				if (name) {	return name.split(' ').map(encodeURIComponent).join('+').replace(/\b\w/g, l => l.toLowerCase());}
			}
			
			// Returns a name from the category slug.
			// The "+" are replaced by spaces and other
			// characters are decoded.
			function getCategoryName(slug) {
			  return slug.split('+').map(decodeURIComponent).join(' ').replace(/\b\w/g, l => l.toUpperCase());
			}
			
			
			// file leftover url phrases from old urls with the chance to offer some search results
			function query_check(m){
				
				var l = Array(
				"brainy-","into-","from-","with-work-experience-in-","fluent-in-","with-sector-experience-in-","delivering-",
				"with-confirmed-trips","has-videos","with-great-articles","by-popularity","is-Premium","profiles--","--","-/",",-","-");
				
				for (var i = 0; i < l.length; i++) {
				    m = m.split(l[i]).join(' ');
				}
				return m;
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
		      ? `${getCategorySlug(routeState.category)}/`
		      : '';


			// for breadcrumbs 03/21
		    var cat = routeState.category
		      ? `&emsp;<svg xmlns="http://www.w3.org/2000/svg" width="9" viewBox="0 0 11 11" height="9px"><path d="m3.3 11-1.4-1.5 4.2-4-4.2-4 1.4-1.5 5.7 5.5z"></path></svg>&emsp;${routeState.category}`
		      : '';
			$('#cat_here').html(cat);
		      
		    var cat = routeState.category
		      ? `<a href="/">Home</a>&emsp;<svg xmlns="http://www.w3.org/2000/svg" width="9" viewBox="0 0 11 11" height="9px"><path d="m3.3 11-1.4-1.5 4.2-4-4.2-4 1.4-1.5 5.7 5.5z"></path></svg>&emsp;<a href="/experts">Experts</a><span id="cat_here"></span>&emsp;>&emsp;${routeState.category}`
		      : '';
			$('#index').html(cat);


		    const queryParameters = {};
			



			if (routeState.query) { queryParameters.query = encodeURIComponent(routeState.query); }

			if (routeState.page !== 1) {queryParameters.page = routeState.page;}

			if (routeState.sortBy && routeState.sortBy !== 'experts') {	queryParameters.sortBy = routeState.sortBy;}

			if (routeState.hitsPerPage && routeState.hitsPerPage !== '12') {queryParameters.hitsPerPage = routeState.hitsPerPage;}

			if (routeState.departs) {queryParameters.departs = routeState.departs.map(encodeURIComponent);}

			if (routeState.expertise) {queryParameters.expertise = routeState.expertise.map(encodeURIComponent);}

			if (routeState.sector) {queryParameters.sector = routeState.sector.map(encodeURIComponent);}

			if (routeState.titles) {queryParameters.titles = routeState.titles.map(encodeURIComponent);}

			if (routeState.speaks) {queryParameters.speaks = routeState.speaks.map(encodeURIComponent);}

			if (routeState.worked_in) {queryParameters.worked_in = routeState.worked_in.map(encodeURIComponent);}

			if (routeState.trips &&	routeState.trips !== false) {queryParameters.trips = routeState.trips;}

			if (routeState.has_articles && routeState.has_articles !== false) {queryParameters.has_articles = routeState.has_articles;}

			if (routeState.PREMIUM && routeState.PREMIUM !== '0') {queryParameters.PREMIUM = routeState.PREMIUM;}

			if (routeState.popindex) {queryParameters.popindex = routeState.popindex.map(encodeURIComponent);}
			
			

			const queryString = qsModule.stringify(queryParameters, {
				addQueryPrefix: true,
				arrayFormat: 'repeat',
			});

			const qu = getSlug(queryString)
			
		    return `${baseUrl}experts/${categoryPath}${qu}`;
		},






		  parseURL({ qsModule, location }) {
		   
		   			

		   
		    const pathnameMatches = location.pathname.match(/experts\/(.*?)\/?$/); 			
		    
		    const category = getCategoryName((pathnameMatches && pathnameMatches[1]) || '');

			

			const {
				query = '', page, sortBy = '', departs = [], expertise = [], sector = [], titles = [], speaks = [], worked_in = [], trips, has_articles, PREMIUM, popindex=[], hitsPerPage = ''
			} = qsModule.parse(location.search.slice(1));





			const allfrom 		= Array.isArray(departs) 	? departs 	: [departs].filter(Boolean);
			const allexpertise 	= Array.isArray(expertise) 	? expertise : [expertise].filter(Boolean);
			const allsector 	= Array.isArray(sector) 	? sector 	: [sector].filter(Boolean);
			const alltitles 	= Array.isArray(titles) 	? titles 	: [titles].filter(Boolean);
			const allspeaks 	= Array.isArray(speaks) 	? speaks 	: [speaks].filter(Boolean);
			const allworked_in 	= Array.isArray(worked_in)	? worked_in : [worked_in].filter(Boolean);
			const allpopindex 	= Array.isArray(popindex)	? popindex :  [popindex].filter(Boolean);


			return {
				query: query_check(decodeURIComponent(query)),
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
				PREMIUM,
				category,
				popindex:	allpopindex.map(decodeURIComponent),
			};
		},
	});

	const stateMapping = {
		stateToRoute(uiState) {

			return {
				query: 			uiState.experts.query,
				page: 			uiState.experts.page,
				hitsPerPage: 	uiState.experts.hitsPerPage,
				sortBy: 		uiState.experts.sortBy,
				departs: 		uiState.experts.refinementList && uiState.experts.refinementList.countryname,
				expertise: 		uiState.experts.refinementList && uiState.experts.refinementList.spezies,
				sector: 		uiState.experts.refinementList && uiState.experts.refinementList.sectors,
				titles: 		uiState.experts.refinementList && uiState.experts.refinementList.titles,
				speaks: 		uiState.experts.refinementList && uiState.experts.refinementList.languages,
				worked_in: 		uiState.experts.refinementList && uiState.experts.refinementList.visited,
				trips: 			uiState.experts.toggle && uiState.experts.toggle.trips,
				has_articles: 	uiState.experts.toggle && uiState.experts.toggle.has_articles,
				PREMIUM: 		uiState.experts.toggle && uiState.experts.toggle.PREMIUM,
				category: 		uiState.experts.menu && uiState.experts.menu.catname,
				popindex: 		uiState.experts.refinementList && uiState.experts.refinementList.popindex
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
						popindex: 	routeState.popindex,
					},
					toggle: {
						trips: 		routeState.trips,
						has_articles:routeState.has_articles,
						PREMIUM: 	routeState.PREMIUM,
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





	// Main Clear Filters 
	const customClearRefinements = instantsearch.connectors.connectClearRefinements(
		renderClearRefinements
	);





	
	// resolve refinement labels

	const encodedLabels = {
		  'Expertise': 'spezies',
		  'Departs':'countryname',
		  'Category':'catname',
		  'Delivers':'titles',
		  'Ratings':'stars_avg',
		  'Has Articles':'has_articles',
		  'Work Experience':'visited',
		  'Fluent in':"languages",
		  'Hired':'trips',
		  'PRO+':'PREMIUM',
		  'Your Search':'query',
		  'Popularity':'popindex',
		  'Sector Experience':'sectors'
	};

	const decodedLabels = Object.keys(encodedLabels).reduce((acc, key) => {
	  const newKey = encodedLabels[key];
	  const newValue = key;
	
	  return {
	    ...acc,
	    [newKey]: newValue,
	  };
	}, {});

	function getLabelSlug(name) {
	  return decodedLabels[name] || name;
	}






	s.addWidgets([
		
		// Searchbox
		instantsearch.widgets.searchBox({
			container: '#experts_searchbox',
			placeholder: "Try 'leadership' or 'marketing'",
			showLoadingIndicator: false,
		}),



		// config
		instantsearch.widgets.configure({
			hitsPerPage: 12,
			filters: 'valid:1 AND paused:0',
		}),
	
		
		
		// Hits per page
		instantsearch.widgets.hitsPerPage({
			container: '#experts_hits-per-page',
			items: [{
					label: '5 / Page',
					value: 5
				},
				{
					label: '10 / Page',
					value: 10,
					default: true
				},
				{
					label: '15 / Page',
					value: 15
				},
				{
					label: '20 / Page',
					value: 20
				},
			],
		}),
	
	
	
	
	
		// refinements
		customClearRefinements({
			container: document.querySelector('#experts_clear-filters'),
			includedAttributes: ['catname','query','spezies','countryname','sectors','titles','languages','visited','PREMIUM','has_articles','trips','stars_avg','popindex'],
		}),
	
	
	
	
	
		// mobile clear filter
		instantsearch.widgets.clearRefinements({
			container: '.ais-ClearRefinements-button',
			includedAttributes: ['catname','query','spezies','countryname','sectors','titles','languages','visited','PREMIUM','has_articles','trips','stars_avg','popindex'],
			templates: {
				resetLabel: 'Clear Filters',
			},
		}),

		
		// Stats
		instantsearch.widgets.stats({
		  container: '#experts_stats',
		  
		  templates: {
		    text: `
			      {{#hasNoResults}}No results{{/hasNoResults}}
			      {{#hasOneResult}}1 Expert{{/hasOneResult}}
			      {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} Experts{{/hasManyResults}}
			      found in {{processingTimeMS}}ms
		    `,
		  },
		  
		}),


		// Sort by
		instantsearch.widgets.sortBy({
			container: '#experts_sort-by',
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
			container: '#experts_refine',
			includedAttributes: ['catname','query','spezies','countryname','sectors','titles','languages','visited','PREMIUM','has_articles','trips','stars_avg','popindex'],
			transformItems(items) {
		      return items.map(item => ({
		        ...item,
		        label: getLabelSlug(item.label),
		      }));
		    },
		}),




		// Expert Categories
		instantsearch.widgets.menu({
			container: '#experts_cats',
			attribute: 'catname',
			sortBy: ['count:desc'],
			showMore: true,
			limit: 5,
			showMoreLimit: 50,
			templates: {
				showMoreText: 
				`{{#isShowingMore}}
			        <svg><use href='/s.svg#chevron-up'></use></svg>Less
			      {{/isShowingMore}}
			      {{^isShowingMore}}
			        <svg><use href='/s.svg#chevron-down'></use></svg>More Expert Categories
			      {{/isShowingMore}}`,
			    item: itm
			},
		}),




		// Spezies
		instantsearch.widgets.refinementList({
			container: '#experts_exp',
			attribute: 'spezies',
			searchable: true,
			searchablePlaceholder: 'Search Expertise',
			showMore: true,
			limit: 5,
			showMoreLimit: 50,
			templates: {
				searchableLoadingIndicator() {
				return '...';
				},
				showMoreText: 
				`{{#isShowingMore}}
			        <svg><use href='/s.svg#chevron-up'></use></svg>Less
			      {{/isShowingMore}}
			      {{^isShowingMore}}
			        <svg><use href='/s.svg#chevron-down'></use></svg>More Specialties
			      {{/isShowingMore}}`,
			    item: itm
			},
		}),




		// from
		instantsearch.widgets.refinementList({
			container: '#experts_countr',
			attribute: 'countryname',
			searchable: true,
			limit: 5,
			searchablePlaceholder: 'Search Countries',
			showMore: true,
			showMoreLimit: 50,
			templates: {
				searchableLoadingIndicator() {
				return '...';
				},
				showMoreText: 
				`{{#isShowingMore}}
			        <svg><use href='/s.svg#chevron-up'></use></svg>Less
			      {{/isShowingMore}}
			      {{^isShowingMore}}
			        <svg><use href='/s.svg#chevron-down'></use></svg>More Countries
			      {{/isShowingMore}}`,
			    item: itm,
			},
		}),




		// Sectors
		instantsearch.widgets.refinementList({
			container: '#experts_sectors',
			attribute: 'sectors',
			searchable: true,
			searchablePlaceholder: 'Search Sectors',
			showMore: true,
			showMoreLimit: 50,
			limit: 5,
			templates: {
				searchableLoadingIndicator() {
				return '...';
				},
				showMoreText: 
				`{{#isShowingMore}}
			        <svg><use href='/s.svg#chevron-up'></use></svg>Less
			      {{/isShowingMore}}
			      {{^isShowingMore}}
			        <svg><use href='/s.svg#chevron-down'></use></svg>More Sectors
			      {{/isShowingMore}}`,
			    item: itm
			},
		}),




		// titles
		instantsearch.widgets.refinementList({
			container: '#experts_titles',
			attribute: 'titles',
			searchable: true,
			searchablePlaceholder: 'Search them',
			showMore: true,
			showMoreLimit: 50,
			limit: 5,
			templates: {
				searchableLoadingIndicator() {
				return '...';
				},
				showMoreText: 
				`{{#isShowingMore}}
			        <svg><use href='/s.svg#chevron-up'></use></svg>Less
			      {{/isShowingMore}}
			      {{^isShowingMore}}
			        <svg><use href='/s.svg#chevron-down'></use></svg>More Titles
			      {{/isShowingMore}}`,
			    item: itm
			},
		}),
		
		


		// Languages
		instantsearch.widgets.refinementList({
			container: '#experts_lang',
			attribute: 'languages',
			searchable: true,
			showMoreLimit: 50,
			showMore: true,
			limit: 5,
			searchablePlaceholder: 'Search Languages',
			templates: {
				searchableLoadingIndicator() {
				return '...';
				},
				showMoreText: 
				`{{#isShowingMore}}
			        <svg><use href='/s.svg#chevron-up'></use></svg>Less
			      {{/isShowingMore}}
			      {{^isShowingMore}}
			        <svg><use href='/s.svg#chevron-down'></use></svg>More Languages
			      {{/isShowingMore}}`,
			    item: itm
			},
		}),




		// Visited
		instantsearch.widgets.refinementList({
			container: '#experts_vis',
			attribute: 'visited',
			searchable: true,
			showMore: true,
			showMoreLimit: 50,
			limit: 5,
			searchablePlaceholder: 'Search Countries',
			templates: {
				searchableLoadingIndicator() {
				return '...';
				},
				showMoreText: 
				`{{#isShowingMore}}
			        <svg><use href='/s.svg#chevron-up'></use></svg>Less
			      {{/isShowingMore}}
			      {{^isShowingMore}}
			        <svg><use href='/s.svg#chevron-down'></use></svg>More Worked In Countries
			      {{/isShowingMore}}`,
			    item: itm
			},
		}),



		// popularity
		instantsearch.widgets.refinementList({
			container: '#experts_pop',
			attribute: 'popindex',
		}),



		// Premium Toggle
		instantsearch.widgets.toggleRefinement({
			container: '#experts_premium',
			attribute: 'PREMIUM',
			on: 1,

			templates: {
				labelText: "<svg style='fill: #9b6bcc'><use href='/s.svg#dot'></use></svg>PRO+ / Direct Msg",
			},
		}),




		// Articles Toggle
		instantsearch.widgets.toggleRefinement({
			container: '#experts_wp',
			attribute: 'has_articles',
			on: true,

			templates: {
				labelText: "<svg style='fill: #b3e5fc'><use href='/s.svg#dot'></use></svg>Experts with Articles",
			},
		}),




		// trips Toggle
		instantsearch.widgets.toggleRefinement({
			container: '#experts_trips',
			attribute: 'trips',
			on: true,

			templates: {
				labelText: "<svg style='fill: #ff5722'><use href='/s.svg#dot'></use></svg>Hired!",
			},
		}),




		// Star Rating
		instantsearch.widgets.ratingMenu({
			container: '#experts_ratings',
			attribute: 'stars_avg'
		}),




		// Pagi Top
		instantsearch.widgets.pagination({
			container: '#experts_pag1',

			padding: 2,
			scrollTo: false,
			templates: {
				previous: '‹',
				next: '›',

			}
		}),




		// Pagi Bottom
		instantsearch.widgets.pagination({
			container: '#experts_pag2',

			padding: 2,
			scrollTo: false,
			templates: {
				previous: '‹',
				next: '›',

			}
		}),





		// hits template
		instantsearch.widgets.hits({

			container: '#experts_hits',

			transformItems(items) { 
				
			    return items.map(item => ({
			      ...item,
			      country_link: item.countryname,
			      catname_link: getCategorySlug(item.catname),
			      f1_link: item.f1_id,
			      f4_link: item.f4_id,
			      f7_link: item.f7_id,
			    }));
			  },

			templates: {

				item: `
   					{{#trips}}							
				        <a href='/{{objectID}}#trips' class='tips trip_label' title='<b>{{f40}} has been hired by a client for an upcoming project.</b><a href=\"/{{objectID}}#trips\" class=\"profile_bar_btn\">Learn More</a>'>
							Hired!
						</a>
   					{{/trips}}							
   					<div class="flxd">

			  			<div class="flx">
							<a href="/{{objectID}}">
								<div class="img_wrap70" title="<b>{{f40}} travels from {{f12}}, {{countryname}}</b><hr><a href='/experts/?departs={{country_link}}'><div class='profile_bar_btn'>More Experts travelling from {{countryname}}</div></a>">
									<img src="https://the-knowledge-brokers.sirv.com/expertbase/pic/{{filename}}?profile=70" loading='lazy' width="70" height="70" alt="{{f40}} - {{singular}} from {{f12}}, {{countryname}}">
									<div class="aflag70 fg fg-{{flag}}"></div>
								</div>
							</a>
							
							{{^celeb}}
								<a href="/unlock-{{objectID}}" class="key_plc" title="<b>Unlock</b> {{f40}}'s full contact details instantly!">
									<svg><use href="/s.svg#key"></use></svg>
								</a>
							{{/celeb}}
						</div>
						<h1>
							<a href="/{{objectID}}">{{{_highlightResult.sitetitle.value}}}</a>
						</h1>
					{{#stars_avg}}	
						<div class="showstars tips" data-stars="{{stars_avg}}" title="Average <b>{{stars_avg}} of 5 Stars</b> by 100% real & verified Clients<p><b><a href='/{{objectID}}#reviews'>Read Reviews</a></b>">
							<svg class='sr' data-rating='1'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
							<svg class='sr' data-rating='2'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
							<svg class='sr' data-rating='3'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
							<svg class='sr' data-rating='4'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
							<svg class='sr' data-rating='5'><polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' style='fill-rule:nonzero;'/></svg>
						</div>
					{{/stars_avg}}							
						<h2 class="h2fetch">
							<a href='/{{objectID}}'>{{{_highlightResult.f40.value}}}</a> - A vetted {{{_highlightResult.singular.value}}} from {{{_highlightResult.f12.value}}}, {{{_highlightResult.countryname.value}}}
						</h2>
					
   				
   				</div>
   				
   				<div class="fx">
					{{#PREMIUM}}
						<a href="/{{objectID}}#queries" class="tips lpro" title="{{f40}} has a <b>Premium Profile</b> with Expertbase.<p><a href='/{{objectID}}#queries'>Write to {{f40}} DIRECT!</a></p><p><a href='/experts/?premium=true'>More Premium Profiles</a>">
							PRO+
						</a>
					{{/PREMIUM}}
										
					
					{{#popindex}}
					<div class="rel">
						<a href="/{{objectID}}" class="tips lorange" title="{{f40}} has a <b>{{popindex}}</b> Profile.">
							<svg><use href="/s.svg#star1"></use></svg>{{popindex}}
						</a>
						<a href="/experts/?sortBy=experts_by_pop" class="filtr" title="Sort by Popularity">
							<svg><use href="/s.svg#suche"></use></svg>
						</span>
					</div>
					{{/popindex}}



					<div class="rel">
						<a href="/{{objectID}}" class="lblck" title="{{f40}} {{params}} is a {{singular}}">
							<svg><use href="/s.svg#user-o"></use></svg>{{{_highlightResult.singular.value}}}
						</a>
						<a href="/experts/{{catname_link}}" class="filtr" title="{{f40}} {{params}} offers expertise as a <b>{{singular}}</b>.">
							<svg><use href="/s.svg#suche"></use></svg>
						</a>
					</div>


					<div class="rel">
						<a href="/{{objectID}}" class="lcty" title="{{f40}} travels from {{f12}}, {{countryname}}">
							<svg><use href="/s.svg#plane"></use></svg>{{{_highlightResult.countryname.value}}}
						</a>
						<a href="/experts/?departs={{country_link}}" class="filtr" title="{{f40}} travels from <b>{{f12}}, {{countryname}}</b>.">
							<svg><use href="/s.svg#suche"></use></svg>
						</a>
					</div>

					
					{{#articles}}
						<div class="rel">
							<a href="/{{objectID}}" class="lart" title="{{f40}} published {{articles}} free full-text Business Article/s.">
								<svg><use href='/s.svg#file-o'></use></svg>ARTICLES <span class='badge bold'>{{articles}}</span>
							</a>
						</div>
					{{/articles}}


					<div class='hr1'></div>
					<div class='tinyheads'>EXPERTISE:</div>
					<div class="rel">
						<a href="/{{objectID}}" class="lgry" title="{{f40}} specialises in {{f1_id}} with {{f2}} Years Experience.">
							<svg><use href="/s.svg#wrench"></use></svg>{{{_highlightResult.f1_id.value}}} - {{f2}} Yrs
						</a>
						<a href="/experts/?expertise={{f1_link}}" class="filtr" title="{{f40}} specialises in <b>{{f1_id}}</b> with {{f2}} Years Experience.">
							<svg><use href="/s.svg#suche"></use></svg>
						</a>
					</div>

					
					{{#f4_id}}
						<div class="rel">
							<a href="/{{objectID}}" class="lgry" title="{{f40}} specialises in {{f4_id}} with {{f5}} Years Experience.">
								<svg><use href="/s.svg#wrench"></use></svg>{{{_highlightResult.f4_id.value}}} - {{f5}} Yrs
							</a>
							<a href="/experts/?expertise={{f4_link}}" class="filtr" title="{{f40}} specialises in <b>{{f4_id}}</b> with {{f5}} Years Experience.">
								<svg><use href="/s.svg#suche"></use></svg>
							</a>
						</div>
					{{/f4_id}}
					
					
					{{#f7_id}}
						<div class="rel">
							<a href="/{{objectID}}" class="lgry" title="{{f40}} specialises in {{f7_id}} with {{f8}} Years Experience.">
								<svg><use href="/s.svg#wrench"></use></svg>{{{_highlightResult.f7_id.value}}} - {{f8}} Yrs
							</a>
							<a href="/experts/?expertise={{f7_link}}" class="filtr" title="{{f40}} specialises in <b>{{f7_id}}</b> with {{f8}} Years Experience.">
								<svg><use href="/s.svg#suche"></use></svg>
							</a>
						</div>
					{{/f7_id}}			
					
					<div class='hr1'></div>
					<div class='tinyheads'>FLUENT IN:</div>
					<div class="rel">
						<a href="/{{objectID}}" class="llang" title="{{f40}} is fluent and can deliver work in English language.">
							<svg><use href='/s.svg#comment'></use></svg>English
						</a>
					</div>


					{{#languages.0}}
						{{#languages}}
							<div class="rel">
								<a href="/{{objectID}}" class="llang" title="{{f40}} is fluent and can deliver work in {{.}} language.">
									<svg><use href='/s.svg#comment'></use></svg>{{.}}
								</a>
								<a href="/experts/?speaks={{.}}" class="filtr" title="{{f40}} is fluent and can deliver work in <b>{{.}}</b> (and <b>English</b>).">
									<svg><use href="/s.svg#suche"></use></svg>
								</a>
							</div>
						{{/languages}}
					{{/languages.0}}
				</div>
					
				<div class="bg-results">
			        <span class="q">{{#helpers.snippet}}{ "attribute": "expertise" } {{/helpers.snippet}}</span>
			        <span class="q"><b>Keywords:</b> {{#helpers.snippet}}{ "attribute": "keywords" } {{/helpers.snippet}}</span>
			        <span class="q"><b>Profile:</b> {{#helpers.snippet}}{ "attribute": "profile" }{{/helpers.snippet}}</span>
			        <span class="q">{{#helpers.snippet}}{ "attribute": "f3" }{{/helpers.snippet}}</span>
			        <span class="q">{{#helpers.snippet}}{ "attribute": "f6" }{{/helpers.snippet}}</span>
			        <span class="q">{{#helpers.snippet}}{ "attribute": "f9" }{{/helpers.snippet}}</span>
			        <span class="q"><b>Clients:</b> {{#helpers.snippet}}{ "attribute": "clients" } {{/helpers.snippet}}</span>
			    </div>`,
				empty: empty,
			},
		})


	]);














	// Execute after Search is complete : Update trips + scroll to top if bottom pagi page was clicked
	s.on('render', () => {


		if (!window.location.hash.substr(1)) {


			$('.q:not(:has(.ais-Snippet-highlighted))').remove();


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

		new $.Zebra_Tooltips($('.tips,.filtr,.img_wrap70,.key_plc'));


	});


s.start();


$(function () {
	$('body').on('click', '.showmore', function () {

		$(this).hide();
		$(this).siblings('.mr').slideDown();
	});

});