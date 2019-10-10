import { elements } from '../base';

export const renderView = () => {
	const markup = `
		<section id="portfolio-page" class="dynamic-content main-content">
            <h1>Portfolio</h1>

            <article class="maverickcatering">
              <a href="http://maverickcatering.com">
                <img class="img-responsive img-border img-left hidden-xs" src="http://images.shaunbloom.com/maverick-thumb.png" alt="maverickcatering.com"></a>
              
              <div class="description">
                 <div class="title">MaverickCatering.com</div>
                 <a href="http://maverickcatering.com"><i class="fa fa-eye"><span>view</span></i></a>
                 A local catering company hired me to rebuild their website into a much more professional looking site. The site is fully responsive and should look good on any device regardless of size or layout. Check it out and use them for your next event!!
              </div>
            </article>

            <article class="jqueryVersion">
              <a href="http://jquery.shaunbloom.com">
                <img class="img-responsive img-border img-left hidden-xs" src="http://images.shaunbloom.com/jquery-thumb.png" alt="jquery.shaunbloom.com"></a>
              
              <div class="description">
                 <div class="title">ShaunBloom.com (Jquery)</div>
                 <a href="http://jquery.shaunbloom.com"><i class="fa fa-eye"><span>view</span></i></a>
                 This is my personal site that I rebuilt about 5yrs ago while trying to get a better grasp on Jquery, HTML and CSS3. It's basically a single page app, so no page reloads of any kind. The site is built to run with or without javascript turned on, and works in all browsers back to IE7. I wanted the site to look and function exactly the same across all browsers. Next steps.... make it completely mobile friendly.
              </div>
            </article>

            <article class="angularVersion">
              <a href="http://angular.shaunbloom.com">
                <img class="img-responsive img-border img-left hidden-xs" src="http://images.shaunbloom.com/angular-thumb.png" alt="angular.shaunbloom.com"></a>
              
              <div class="description">
                <div class="title">ShaunBloom.com (Angular)</div>
                <a href="http://angular.shaunbloom.com"><i class="fa fa-eye"><span>view</span></i></a>
                After completing a coding challenge in Angular, I decided I would try to recreate my personal website in Angular and make it look, feel and act the same as the original Jquery version. All animation and effects are done using Angular, CSS and HTML only. Jquery made it so easy to do all of the flashy animations on the site so rebuilding it in Angular was definitely a good challenge and fun! Take a look.......
              </div>
            </article>

            <article class="reactVersion">
              <a href="http://react.shaunbloom.com">
                <img class="img-responsive img-border img-left hidden-xs" src="http://images.shaunbloom.com/react-thumb.png" alt="react.shaunbloom.com"></a>
              
              <div class="description">
                <div class="title">ShaunBloom.com (React)</div>
                <a href="http://react.shaunbloom.com"><i class="fa fa-eye"><span>view</span></i></a>
                 At my last job we dove into ReactJS to rebuild our sites. I thoroughly enjoyed wokimg with ReactJS so I decided that it was time to rebuild my web site using Facebook's pride and joy. Rebuilding this site in Angular was a far cry easier than doing it in ReactJS, but I always love a good challenge so I took it on. This rebuild took a bit longer than the Angular version, but works just as well and is again, a replica of the Jquery version originaly built 5yrs ago. React rocks.........
              </div>
            </article>

            <article class="redfloor">
              <a href="http://www.redfloorarcade.com" target="new">
                <img class="img-responsive img-border img-left hidden-xs" src="http://www.redfloorarcade.com/img/logos/Arcade.B1.200.png" alt="www.redfloorarcade.com"></a>
              
              <div class="description">
                <div class="title">Red Floor Arcade</div>
                <a href="http://www.redfloorarcade.com" target="new"><i class="fa fa-eye"><span>view</span></i></a>
                Built this simple site for a local custom multicade arcade builder. The site is a simple business card extention offering all the information you can't get to fit on a little card. The site is built fully responsive using bootstrap and completely mobile friendly. The idea eventually is to add shopping cart support and allow customers to purchase parts or accessories directly through <a href="http://www.redfloorarcade.com"></a>.
              </div>
            </article>

            <article class="tune">
              <a href="http://www.shaunbloom.com/tune" target="new">
                <img class="img-responsive img-border img-left hidden-xs" src="http://images.shaunbloom.com/tune-thumb.png" alt="Tune"></a>
              
              <div class="description">
                <div class="title">Tune Coding Challenge</div>
                <a href="http://www.shaunbloom.com/tune" target="new"><i class="fa fa-eye"><span>view</span></i></a>
                 This was actually a coding challenge I built for a job interview. The idea was to recreate visually, exactly what they had sent me as well as wire it up to all of the data. The data came in two JSON files, one with 83 users and the other with 10k records of data for all 83 users. I finished the challenge, and for a bonus I jacked the data set up to 40k records to prove the efficiency of my code, added pagination, live charting, a load spinner and responsive design. Did I mention I did it in Angular as my first Angular project? It's true.....
              </div>
            </article>

            <article class="failTuba">
              <a href="http://www.failtuba.com" target="new">
                <img class="img-responsive img-border img-left hidden-xs" src="http://www.failtuba.com/fail-thumb.jpg" alt="Fail Tuba"></a>
                
              <div class="description">
                <div class="title">Fail Tuba</div>
                <a href="http://www.failtuba.com" target="new"><i class="fa fa-eye"><span>view</span></i></a>
                This is a simple site I created for fun. The idea is having a quick bookmark that allows you to top off any fail with the appropriate sound effect. Next time you need to take that fail over the top, this is the site for you. Share away and don't forget to use www.failtuba.com in all of your social media fail post, comments, and everywhere else. Or just play it durning the long day when the boss says, "I'm going to need you to stay a little late today"............
              </div>
            </article>

            <article class="deathTrumpet">
              <a href="http://www.deathtrumpet.com" target="new">
                <img class="img-responsive img-border img-left hidden-xs" src="http://www.deathtrumpet.com/death-thumb.jpg" alt="Death Trumpet"></a>
                
              <div class="description">
                <div class="title">Death Trumpet</div>
                <a href="http://www.deathtrumpet.com" target="new"><i class="fa fa-eye"><span>view</span></i></a>
                 This is a simple site I created for fun. The idea is having a quick bookmark that allows you to top off any sadness or death with the appropriate sound effect. Next time you need to take it over the top, this is the site for you. Share away and don't forget to use www.deathtrumpet.com in all of your social media post, comments, and everywhere else. Or just play it when all that BS legacy code finally goes bye bye........ Let's lay it to rest properly!
              </div>
            </article>

            <article class="scaryViolin">
              <a href="http://www.scaryviolin.com" target="new">
                <img class="img-responsive img-border img-left hidden-xs" src="http://www.scaryviolin.com/scary-thumb.jpg" alt="Scary Violin"></a>
                
                <div class="description">
                  <div class="title">Scary Violin</div>
                  <a href="http://www.scaryviolin.com" target="new"><i class="fa fa-eye"><span>view</span></i></a>
                  This is a simple site I created for fun. The idea is having a quick bookmark that allows you to top off any particular scary moment with the appropriate sound effect. Next time your coworker sneaks up beind you and startles you, take it over the top with www.scaryviolin.com. Share away and don't forget to use www.scaryviolin.com in all of your post, comments and everyewhere else. Or just play it when all that BS legacy code finally goes bye bye........ Let's lay it to rest properly!
                </div>
            </article>
        </section>
	`;

	elements.dynamicContent.insertAdjacentHTML('afterbegin', markup);
};