
$(function() {
   
    describe('RSS Feeds', function() {
      //test if there are RSS feeds
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		
		
		


     
		//URL defined and not empty
		
		  it('should each have a URL', () =>{
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


       
		//name defined and not empty
  		it('should each have a name', () =>{
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


  
	 describe("The menu", () => {

        beforeEach(() => {
            body = document.querySelector('body');
        });
       
		 //test if menu is hidden by default
		  it('is hidden', () => {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

		 //test if menu changes visibility when menu icon is clicked
		 it('unhides on click', () => {
            const menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
       });
    });
      
 
	
	 describe("Initial Entries", () => {


        
		 //load feed before test
		   beforeEach( function(done){
            loadFeed(0, () => done());
        });
		 //test when the loadFeed function is called
		    it('loads atleast one element onto the page', function(done) {
            const feed = document.querySelector('.feed');
            const entries = feed.querySelectorAll('.entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });

    });

  
	 describe("New Feed Selection", () => {

       
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
