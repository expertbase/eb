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
				      No matches for now.
				    </p>
				    <p class="hits-empty-state-description">
				      Try to reset your applied filters.
				    </p>
				  </div>
                <a href="javascript:window.location.href=/^[^?]+/.exec(window.location.href)[0]">▸ Clear All</a><p><p>
                <a href="/">▸ Experts</a> | <a href="/articles">▸ Articles</a> | <a href="/opportunities">▸ Opportunities</a>
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

	!hasRefinements ? $("#wp_clear-filters").hide() : $("#wp_clear-filters").show();

};



	function getSlug(name) {
	  return name.replace(/%2520/g, "+");
	}






// ******************************************************

// Articles 

// ******************************************************



	// Returns a slug from the category name.
	// Spaces are replaced by "+" to make
	// the URL easier to read and other
	// characters are encoded.
	function getCategorySlug(name) {
	  return name.split(' ').map(encodeURIComponent).join('+').replace(/\b\w/g, l => l.toLowerCase());
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
		  
		  	var a="Business Articles | Expertbase";

			if (query && category && is)	{return `[${query}] - ${is} ${category} `+a};
			if (is && category)				{return `${is} ${category} `+a};
			if (is && query)				{return `${is} [${query}] `+a};
			if (query && category)			{return `[${query}] - ${category} `+a};
		    if (is)							{return is+' '+a };
		    if (category)					{return `${category} `+a};
			if (query)						{return `[${query}] `+a};
			
		   
		    return orgtitle;
		  },




		createURL({ qsModule, routeState, location }) {
		    const urlParts = location.href.match(/^(.*?)\/articles/);
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

			if (routeState.query) {	queryParameters.query = encodeURIComponent(routeState.query);}

			if (routeState.page !== 1) { queryParameters.page = routeState.page;}

			if (routeState.is) { queryParameters.is = routeState.is.map(encodeURIComponent);}
			
			if (routeState.sortBy && routeState.sortBy !== 'whitepapers') { queryParameters.sortBy = routeState.sortBy;}
			
			if (routeState.hitsPerPage && routeState.hitsPerPage !== '12') { queryParameters.hitsPerPage = routeState.hitsPerPage;}



			const queryString = qsModule.stringify(queryParameters, {
				addQueryPrefix: true,
				arrayFormat: 'repeat',
			});

			const qu = getSlug(queryString)

			return `${baseUrl}articles/${categoryPath}${qu}`;




		},


		  parseURL({ qsModule, location }) {

			const pathnameMatches = location.pathname.match(/articles\/(.*?)\/?$/);

		    const category = getCategoryName((pathnameMatches && pathnameMatches[1]) || '');

			const {	query = '', page, is = [], sortBy = '', hitsPerPage = '' } = qsModule.parse(location.search.slice(1));

			const allis = Array.isArray(is) ? is : [is].filter(Boolean);


			return {
				query: decodeURIComponent(query),
				page,
				sortBy,
				hitsPerPage,
				category,
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
				category: uiState.whitepapers.menu && uiState.whitepapers.menu.competency,
				is: uiState.whitepapers.refinementList && uiState.whitepapers.refinementList.popularity,
			};
		},

		routeToState(routeState) {
			return {

				whitepapers: {
					query: 			routeState.query,
					page: 			routeState.page,
					sortBy: 		routeState.sortBy,
					hitsPerPage: 	routeState.hitsPerPage,
					menu: {
						competency: routeState.category,
					},
					refinementList: {
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


	
	
	// Main Clear Filters 
	const customClearRefinements = instantsearch.connectors.connectClearRefinements(
		renderClearRefinements
	);
	
	

	// resolve refinement labels

	const encodedLabels = {
		  Category: 'competency',
		  "Reading Time":'reading_time',
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




	
	s.addWidgets([
		
		// searchbox
		instantsearch.widgets.searchBox({
			container: '#wp_searchbox',
			placeholder: "Try 'sales' or 'project management'",
		}),

	
		// hits per page
		instantsearch.widgets.configure({
			hitsPerPage: 12,
		}),


		// Current Refinements Tags
		instantsearch.widgets.currentRefinements({
			container: '#wp_refine',
			includedAttributes: ['query', 'competency', 'popularity', 'reading_time','claps'],
						
			transformItems(items) {
		      return items.map(item => ({
		        ...item,
		        label: getLabelSlug(item.label),
		      }));
		    },


		}),


		// Stats
		instantsearch.widgets.stats({
		  container: '#wp_stats',
		  
		  templates: {
		    text: `
			      {{#hasNoResults}}No results{{/hasNoResults}}
			      {{#hasOneResult}}1 Article{{/hasOneResult}}
			      {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} Articles{{/hasManyResults}}
			      found in {{processingTimeMS}}ms
		    `,
		  },
		  
		}),


		// clear filters
		customClearRefinements({
			container: document.querySelector('#wp_clear-filters'),
			includedAttributes: ['query', 'competency', 'popularity', 'reading_time','claps'],
		}),


		// mobile clear filter
		instantsearch.widgets.clearRefinements({
			container: '.ais-ClearRefinements-button',
			includedAttributes: ['query', 'competency', 'popularity', 'reading_time','claps'],
			templates: {
				resetLabel: 'Clear Filters',
			},
		}),


		// Sort by
		instantsearch.widgets.sortBy({
			container: '#wp_sort-by',
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
					label: 'Pop Desc'
				}
			]
		}),



		// Article Categories
		instantsearch.widgets.menu({
			sortBy: ['count:desc'],
			container: '#wp_category',
			attribute: 'competency',
			showMore: true,
			limit: 15,
			showMoreLimit: 100,
			templates: {
				showMoreText: 
				`{{#isShowingMore}}
			        <svg><use href='/s.svg#chevron-up'></use></svg>Less
			      {{/isShowingMore}}
			      {{^isShowingMore}}
			        <svg><use href='/s.svg#chevron-down'></use></svg>More Categories
			      {{/isShowingMore}}`,
			    item: itm
			},
		}),


		// pop
		instantsearch.widgets.refinementList({
			container: '#wp_popularity',
			attribute: 'popularity',
		}),


		// range slider reading time
		instantsearch.widgets.rangeSlider({
			container: '#wp_reading_time',
			attribute: 'reading_time',
			tooltips: true,
		}),


		// range slider claps
		instantsearch.widgets.rangeSlider({
			container: '#wp_clapped',
			attribute: 'claps',
			tooltips: true,
		}),



		// Pagi Top
		instantsearch.widgets.pagination({
			container: '#wp_pag1',

			padding: 2,
			scrollTo: false,
			templates: {
				previous: '‹',
				next: '›',

			}
		}),


		// Pagi Bottom
		instantsearch.widgets.pagination({
			container: '#wp_pag2',

			padding: 2,
			scrollTo: false,
			templates: {
				previous: '‹',
				next: '›',

			}
		}),


		instantsearch.widgets.hitsPerPage({
			container: '#wp_hits-per-page',
			items: [{
					label: '6 / Page',
					value: 6
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


		// hits template
		instantsearch.widgets.hits({

			container: '#wp_hits',

			transformItems(items) {
			    return items.map(item => ({
			      ...item,
			      comp_link: item.competency.split(' ').map(encodeURIComponent).join('+').replace(/\b\w/g, l => l.toLowerCase())
			    }));
			  },

			templates: {

				item: `
				
			<div class="flxd">
				<div class="flx">	
					<a href="/a{{objectID}}-{{escaped_title}}">
						<div class="img_wrap50">
							<img src="https://the-knowledge-brokers.sirv.com/expertbase/pic/{{filename}}?profile=50" width="50" height="50" loading='lazy' class="tips" title="Meet {{f40}} - {{singular}} from {{f12}}, {{countryname}} the contributor of <b>'{{header}}'</b>">
							<div class="tips aflag50 fg fg-{{flag}}" title="{{f40}} travels from <b>{{f12}}, {{countryname}}</b><br><br><a href='/?departs={{countryname}}'>More Experts from {{countryname}}</a>""></div>
						</div>
					</a>
					{{^celeb}}
						<a href="/unlock-{{siteid}}" class="tips key_plc" title="<b>Unlock</b> {{f40}}'s full contact details instantly!">
							<svg><use href="/s.svg#key"></use></svg>
						</a>
					{{/celeb}}
				</div>	
				<div class="dim"><svg><use href="/s.svg#clock-o"></use></svg>{{reading_time}} min  &nbsp; &nbsp; <svg><use href="/s.svg#rythm"></use></svg>{{claps}}</div>
				<h1>
					<a href="/a{{objectID}}-{{escaped_title}}">{{{_highlightResult.header.value}}}</a>
				</h1>
				<h2 class="h2fetch">
					By <a href="/{{siteid}}" class="tips" title="Visit <b>{{f40}}'s Business Profile</b> Now on Expertbase">{{{_highlightResult.f40.value}}}</a>, a {{singular}} from {{{_highlightResult.f12.value}}}, {{{_highlightResult.countryname.value}}}
				</h2>
		    </div>
		     
			<div class="fx">
				{{#PREMIUM}}
					<a href="/{{objectID}}#queries" class="tips lpro" title="{{f40}} has a <b>Premium Profile</b> with Expertbase.<p><a href='/{{objectID}}#queries'>Write to {{f40}} DIRECT!</a></p><p><a href='/?premium=true'>More Premium Profiles</a>">
						<svg><use href='/s.svg#envelope-o'></use></svg>PRO+
					</a>
				{{/PREMIUM}}
									
				{{#updated}}
					<div class="lgrn" title="{{f40}} has a {{{updated}}} Profile.">
						<svg><use href="/s.svg#bell"></use></svg>{{{updated}}}
					</div>
				{{/updated}}
				
				{{#popularity}}
					<a href="/a{{objectID}}-{{escaped_title}}" class="tips lorange" title="'<b>{{header}}</b>' is a {{popularity}} Article.<p><a href='/a{{objectID}}-{{escaped_title}}'><p>▸ Read Now.</a>">
						<svg><use href="/s.svg#star1"></use></svg>{{popularity}}
					</a>
				{{/popularity}}


				<a href="/articles/{{comp_link}}" class="tips lblck" title="This Article is filed in Category <b>'{{competency}}'</b>. <a href='/articles/{{comp_link}}'><p>▸ More Articles on {{competency}}</a>">
					<svg><use href="/s.svg#folder-open-o"></use></svg>{{{_highlightResult.competency.value}}}
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




	// Execute after Search is complete : Update trips + scroll to top is bottom pagi page was clicked
	s.on('render', () => {

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

		new $.Zebra_Tooltips($('.tips'));


	});


	s.start();






$(function () {
	$('body').on('click', '.showmore', function () {

		$(this).hide();
		$(this).siblings('.mr').slideDown();
	});

});