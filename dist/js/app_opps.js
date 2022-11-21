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
    

const moreless=
      `{{#isShowingMore}}
        <svg><use href='/s.svg#chevron-up'></use></svg>Less
      {{/isShowingMore}}
      {{^isShowingMore}}
        <svg><use href='/s.svg#chevron-down'></use></svg>Show more
      {{/isShowingMore}}`;



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
				      Add an Opportunity 100% Free!
				    </p>
				    <p class="hits-empty-state-description">
				      <a href="/oppwizard" class='apply'>▸ Add an Opp</a>
				    </p>
				  </div>
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

	!hasRefinements ? $("#opp_clear-filters").hide() : $("#opp_clear-filters").show();
};



function getSlug(name) {
  return name.replace(/%2520/g, "+");
}




// ******************************************************

// Opportunities 

// ******************************************************


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




		const orgtitle = document.title;

		const router = instantsearch.routers.history({
		  
		  windowTitle({ category, query, is }) {
		  
		  	var a="Open Opportunities | Expertbase";

			if (query && category && is)	{return `[${query}] - ${is} ${category} `+a};
			if (is && category)				{return `${is} ${category} `+a};
			if (is && query)				{return `${is} [${query}] `+a};
			if (query && category)			{return `[${query}] - ${category} `+a};
		    if (is)							{return is+' '+orgtitle };
		    if (category)					{return `${category} `+a};
			if (query)						{return `[${query}] `+a};
			
		   
		    return orgtitle;
		  },




		createURL({ qsModule, routeState, location }) {
		    const urlParts = location.href.match(/^(.*?)\/opportunities/);
		    const baseUrl = `${urlParts ? urlParts[1] : ''}/`;
	
		    const categoryPath = routeState.category
		      ? `${getCategorySlug(routeState.category)}/`
		      : '';



			// for breadcrumbs 03/21
		    const cat = routeState.category
		      ? `&emsp;<svg xmlns="http://www.w3.org/2000/svg" width="9" viewBox="0 0 11 11" height="9px"><path d="m3.3 11-1.4-1.5 4.2-4-4.2-4 1.4-1.5 5.7 5.5z"></path></svg>&emsp;${routeState.category}`
		      : '';
			$('#cat_here').html(cat);

		    const queryParameters = {};


			if (routeState.query) {queryParameters.query = encodeURIComponent(routeState.query);}

			if (routeState.page !== 1) {queryParameters.page = routeState.page;}

			if (routeState.cat) {queryParameters.cat = routeState.cat.map(encodeURIComponent);}

			if (routeState.country) {queryParameters.country = routeState.country.map(encodeURIComponent);}

			if (routeState.expertise) {queryParameters.expertise = routeState.expertise.map(encodeURIComponent);}

			if (routeState.sectors) {queryParameters.sectors = routeState.sectors.map(encodeURIComponent);}

			if (routeState.language) {queryParameters.language = routeState.language.map(encodeURIComponent);}

			if (routeState.delivery) {queryParameters.delivery = routeState.delivery.map(encodeURIComponent);}

			if (routeState.hitsPerPage && routeState.hitsPerPage !== '6') {queryParameters.hitsPerPage = routeState.hitsPerPage;}

			
			const queryString = qsModule.stringify(queryParameters, {
				addQueryPrefix: true,
				arrayFormat: 'repeat',
			});

			const qu = getSlug(queryString);


			return `${baseUrl}opportunities/${categoryPath}${qu}`;

			
			
		},


		parseURL({
			qsModule,
			location
		}) {

			const pathnameMatches = location.pathname.match(/opportunities\/(.*?)\/?$/);

		    const category = getCategoryName((pathnameMatches && pathnameMatches[1]) || '');


			const { query = '', page, country = [], expertise = [], sectors = [], language = [], delivery = '', hitsPerPage = ''} = qsModule.parse(location.search.slice(1));;


			const allcountry = Array.isArray(country) ? country : [country].filter(Boolean);
			const allexpertise = Array.isArray(expertise) ? expertise : [expertise].filter(Boolean);
			const allsectors = Array.isArray(sectors) ? sectors : [sectors].filter(Boolean);
			const alllanguage = Array.isArray(language) ? language : [language].filter(Boolean);
			const alldelivery = Array.isArray(delivery) ? delivery : [delivery].filter(Boolean);


			return {
				query: decodeURIComponent(query),
				page,
				hitsPerPage,
				category,
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
				category: uiState.opportunities.menu && uiState.opportunities.menu.cat,
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
					menu: {
						cat: routeState.category,
					},
					refinementList: {
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

	
	// Main Clear Filters 
	const customClearRefinements = instantsearch.connectors.connectClearRefinements(
		renderClearRefinements
	);


	// resolve refinement labels

	const encodedLabels = {
		  "Opportunity Type":'cat',
		  "Delivery Type":'delivery',
		  "For Country":"country",
		  "Sector Experience":"sectors",
		  "Expertise Required":"expertise",
  		  'Your Search':'query'
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




	// lets roll the widgets
	s.addWidgets([
		instantsearch.widgets.searchBox({
			container: '#opp_searchbox',
			placeholder: 'Search all Opportunities',
		}),
		
		// hits per page default
		instantsearch.widgets.configure({
			hitsPerPage: 16,
		}),


		// Current Refinements Tags
		instantsearch.widgets.currentRefinements({
			container: '#opp_refine',
			includedAttributes: ['query', 'sectors', 'language', 'expertise', 'cat', 'country', 'delivery'],

			transformItems(items) {
		      return items.map(item => ({
		        ...item,
		        label: getLabelSlug(item.label),
		      }));
		    },

		}),

		
		// Stats
		instantsearch.widgets.stats({
		  container: '#opp_stats',
		  
		  templates: {
		    text: `
			      {{#hasNoResults}}No results{{/hasNoResults}}
			      {{#hasOneResult}}1 Opportunity{{/hasOneResult}}
			      {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} Opps{{/hasManyResults}}
			      found in {{processingTimeMS}}ms
		    `,
		  },
		  
		}),


		// clear filters
		customClearRefinements({
			container: document.querySelector('#opp_clear-filters'),
			includedAttributes: ['query', 'sectors', 'language', 'expertise', 'cat', 'country', 'delivery'],
		}),


		// mobile clear filter
		instantsearch.widgets.clearRefinements({
			container: '.ais-ClearRefinements-button',
			includedAttributes: ['query', 'sectors', 'language', 'expertise', 'cat', 'country', 'delivery'],
			templates: {
				resetLabel: 'Clear Filters',
			},
		}),


		// Opp Type
		instantsearch.widgets.menu({
			container: '#opp_cat',
			attribute: 'cat',
			showMore: true,
			limit: 15,
			showMoreLimit: 50,
			templates: {
				showMoreText: moreless,
			    item: itm
			},
		}),


		// project_country
		instantsearch.widgets.refinementList({
			container: '#opp_country',
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
		}),


		// delivery type
		instantsearch.widgets.refinementList({
			container: '#opp_deltype',
			attribute: 'delivery',
		}),


		// expertise
		instantsearch.widgets.refinementList({
			container: '#opp_expertise',
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
		}),


		// sectors
		instantsearch.widgets.refinementList({
			container: '#opp_sectors',
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
		}),


		// lang
		instantsearch.widgets.refinementList({
			container: '#opp_language',
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
		}),


		// Pagi Top
		instantsearch.widgets.pagination({
			container: '#opp_pag1',

			padding: 2,
			showFirst: false,
			showLast: false,
			scrollTo: false,
			templates: {
				previous: '‹',
				next: '›',

			}
		}),


		// Pagi Bottom
		instantsearch.widgets.pagination({
			container: '#opp_pag2',

			padding: 2,
			showFirst: false,
			showLast: false,
			scrollTo: false,
			templates: {
				previous: '‹',
				next: '›',

			}
		}),

		instantsearch.widgets.hitsPerPage({
			container: '#opp_hits-per-page',
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
		}),



		// hits template
		instantsearch.widgets.hits({

			container: '#opp_hits',


			transformItems(items) {
			    return items.map(item => ({
			      ...item,
			      catname_link: getCategorySlug(item.cat),
			      country_link: getCategorySlug(item.country),
			      language_link: getCategorySlug(item.language),
			    }));
			  },



			templates: {

				item: `
	  		
	  {{#live}}
	  			<div class="circle">
					<div class="flag_opp tips fg48 fg48-{{flag}}" title="{{#online}}This is a <b>Live / Virtual {{cat}} Opportunity</b> requested by a client from {{opp_city}}, {{country}} {{/online}}{{^online}}This Opportunity will take place in <b>{{opp_venue}}</b>{{/online}}<p><a href='/opportunities/?country={{country_link}}'>▸ More Opportunities in {{country}}</a>">
					</div>
				</div>
				<div class="size-13">Apply {{#opp_startdate}}before{{/opp_startdate}} {{opp_applic_closing}}</div>
				<h1>
					<a href="/opportunity-{{objectID}}-{{escaped_title}}">{{{_highlightResult.opp_title.value}}}</a>
				</h1>     


				<div class='divider'></div>
				
				<div class="size-13">Opportunity Type:</div>

				<div class="tips lblck" title="This Opportunity is filed in Category <b>'{{cat}}'</b>. <a href='/opportunities/{{catname_link}}'><p>▸ More Opportunities in {{cat}}</a>">
					<svg><use href="/s.svg#folder-open-o"></use></svg>{{{_highlightResult.cat.value}}}
				</div>
				

				<div class='divider'></div>

				<div class="size-13">Start:</div>
				<div class="relat">
				<div class="tips llang" title="This Opportunity's start date is <b>{{opp_startdate}}</b>">
					<svg><use href='/s.svg#cal'></use></svg>{{{_highlightResult.opp_startdate.value}}}
				</div>
				</div>
				
				<div class="size-13">Duration:</div>
				<div class="relat">
				<div class="tips llang" title="This Opportunity's duration is <b>{{opp_duration}}</b>">
					<svg><use href='/s.svg#clock-o'></use></svg>{{{_highlightResult.opp_duration.value}}}
				</div>
				</div>

				<div class="size-13">Venue:</div>
				<div class="relat">
				<div class="tips {{#online}}lyell{{/online}}{{^online}}llang{{/online}}" title="<span class='flex abs'><svg><use href='/s.svg#info-circle'></use></svg></span>This Opportunity {{#online}}shall be delivered <b>Live & Virtually to the client's audience in {{opp_city}}, {{country}}</b>. Participats may be joining this session from different cities and / or countries.{{/online}}{{^online}}take place live with physical presence requested in <b>{{opp_venue}}</b>{{/online}} <div class='divider15'></div><a href='/opportunities/?country={{country_link}}'>▸ More Opportunities in {{country}}</a>">
					<svg><use href='/s.svg#map-marker'></use></svg>{{{_highlightResult.opp_venue.value}}}<span class="flex"><svg class='size-20'><use href='/s.svg#{{#online}}video{{/online}}{{^online}}plane{{/online}}'></use></svg></span>
				</div>
				</div>
				
				<div class="size-13">Main Delivery Language:</div>
				<div class="relat">
				<div class="tips llang" title="Language of Delivery for this Opportunity shall mainly be <b>{{language}}</b>.<div class='divider15'></div><a href='/opportunities/?language={{language_link}}'>▸ More Opps with delivery in {{language}} Language</a>">
					<svg><use href='/s.svg#comment'></use></svg>{{{_highlightResult.language.value}}} 
				</div>
				</div>

				<div class='divider'></div>


				{{#expertise.0}}
					<div class="showmore"><svg><use href="/s.svg#chevron-down"></use></svg>More Details</div>
				{{/expertise.0}}
				
				<div class="mr softhide">
					{{#expertise.0}}
	   				<div class="fx">
						<div class="size-13">Required Specialisation:</div>
						{{#expertise}}
							<div class="tips lorange" title="This Opportunity requires an applicant to have expertise / experience delivering projects in, or closely related to, <b>{{.}}</b>.<p><a href='/opportunities/?expertise={{.}}'>▸ More Opportunities req. '{{.}}'</a>">
								<svg><use href='/s.svg#wrench'></use></svg>{{.}}
							</div>
						{{/expertise}}
					</div>
					{{/expertise.0}}
		
					<div class='divider'></div>
		
					{{#sectors.0}}
					<div class="fx">
						<div class="size-13">Requested Sector Experience:</div>
						{{#sectors}}
							<div class="tips lgrn" title="The client indicated that Applicants with relevant Industry/Sector Experience in, or closely related to <b>{{.}}</b> may be an advantage.<p><a href='/opportunities/?sectors={{.}}' may be of advantage>▸ More Opportunities req. '{{.}}'</a>">
								<svg><use href='/s.svg#industry'></use></svg>{{.}}
							</div>
						{{/sectors}}
					</div>
					{{/sectors.0}}
				</div>
				

				<div class='divider'></div>


					<a href='/opportunity-{{objectID}}-{{escaped_title}}' class='actionbtn'>▸ More</a>

				<div class="s14">
				    <span class="q">{{#helpers.snippet}}{ "attribute": "opp_description" }{{/helpers.snippet}}</span>
			    </div>     				        
	{{/live}}`,
				empty: empty,
			},
		})
	]);




	// Execute after Search is complete : Update trips + scroll to top is bottom pagi page was clicked
	s.on('render', () => {

		$('.q:not(:has(.ais-Snippet-highlighted))').remove();
		new $.Zebra_Tooltips($('.tips'));


	});


	s.start();



$(function () {
	$('body').on('click', '.showmore', function () {

		$(this).hide();
		$(this).siblings('.mr').slideDown();
	});

});