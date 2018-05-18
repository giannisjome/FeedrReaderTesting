/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
		
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		
		
		


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		//URL defined and not empty
		
		  it('should each have a URL', () =>{
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		//name defined and not empty
  		it('should each have a name', () =>{
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
	 describe("The menu", () => {

        beforeEach(() => {
            body = document.querySelector('body');
        });
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		 //test if menu is hidden by default
		  it('is hidden', () => {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		 //test if menu changes visibility when menu icon is clicked
		 it('unhides on click', () => {
            const menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
       });
    });
      
    /* TODO: Write a new test suite named "Initial Entries" */
	
	 describe("Initial Entries", () => {


        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		 //load feed before test
		   beforeEach( function(done){
            loadFeed(0, () => done());
        });
		 //test when the loadFeed function is called
		    it('loads atleast one element onto the page', function(done) {
            const feed = document.querySelector('.feed');
            const entries = feed.querySelectorAll('.entry')
            expect(entries).not.toBe(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
	 describe("New Feed Selection", () => {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		 //define snapshot variables
		let feed1Snapshot;
        let feed2Snapshot;
		 
		 
		 beforeEach((done) => {
            // load feed 1
            loadFeed(0, () =>{
                // set feed snapshot
                let feed = document.querySelector('.feed');
                feed1Snapshot = feed.innerHTML;
                // load feed 2
                loadFeed(1, () => {
                    // set feed snapshot
                    feed = document.querySelector('.feed');
                    feed2Snapshot = feed.innerHTML;   
                    done();
                });
            });
        });
		 
		 // check if there is different content before and after a new feed is loaded
        it('loads new content when new feed is loaded', (done) => {
            expect(feed1Snapshot == feed2Snapshot).toBe(false);
            done();
        });
    });

		 
}());
