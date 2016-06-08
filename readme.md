Read me
=============

For our IT2805 Web Technologies project, we have created a responsive, dynamic, and user friendly ten-page website for a fictional student association called “Baldur, Linjeforeningen for ballsport”. The user is able to register as a student and view general information about the association, such as upcoming events, career opportunities, frequently asked questions, and contact information. In addition, some of the website’s content, such as upcoming events, will be restricted depending on whether the user is currently logged in as a valid user or not. The technologies we have used, including how we have achieved the simulated effect of back-end functionality, will be further elaborated on in the proceeding sections. 

##Technologies:

HTML5
CSS3 (Bootstrap)
Javascript (JQuery, JQuery-cookie)

###Regex
Regular expressions were used to obtain live validation on the “Register”-page, allowing the user to receive instant feedback on whether the password in a valid pattern. The password must match the following conditions: 8 characters or longer, at least one upper-case character, at least one lower-case character, at least one symbol and at least one number. The textboxes’ borders change to green as soon as the given password matches the pattern. In addition, we have used regular expressions to manipulate URLs.

###XML & Ajax
XML was used to define content for the page. This includes career opportunities and upcoming events. All events and career opportunities are stored in their own, separate XML-files. Ajax is used to fetch the XML-files, and then JQuery is used to parse data from the XML to it’s own respective content page. 


###JSON
Json is used to simulate backend. Where a site with backend would typically send a REST call to store or fetch data from a server, content is written or read to json files stored in local storage.

###Cookies
Cookies are used to enable user login. This could have been done through sessions, but using cookies enables the user to stay logged in more reliably, given that he/she has cookies enabled,


##Multimedia:

In the original project description we discussed the possibility of adding youtube integration. But as the project progressed we decided that we wanted to generate our own multimedia. As such we have included a self made introduction video, that describes the purpose of the page, and left out the youtube integration.

##Interaction and dynamic features:

For us it was important to create a responsive website that offered a slick, minimalistic and user friendly design. In our opinion the best way of achieving this is to use a css framework as a base. We have therefore elected to use a custom bootstrap theme as a base. Although using bootstrap as a base gave us a lot of responsive features and a good design, we felt the need to tailor the css to our need and vision for the website. This involves loading a custom css file after bootstrap, that tailors the behavior of the website to our need, as well as adding some new ones. 

In addition to the css we have ensured that the site content dynamically changes depending on whether or not the user is logged in. This involves changing the right side, the content of upcoming events, and the sitemap. If the user is logged out the right side menu shows a login frame, with an option to register. If the user is logged in, two options are shown: log out and profile. A user is only able to see upcoming events if he/she is logged in. The sitemap changes dynamically in order to reflect the changes that happens when the user is logged in.

##Future work:

Although most of the features from the original description is implemented, there are some minor features we have not implemented. In the future we would like to be able to allow users to register to events. We would also want to make the contact page operational, meaning that it sends a mail to the admin when used. 

##References:

Base theme: http://bootswatch.com/cosmo/
JavaScript: http://jquery.com/, https://github.com/carhartl/jquery-cookie 


###Bilder:
Squash [http://upload.wikimedia.org/wikipedia/commons/7/74/Squash_court.JPG]
Tennis	[http://static.sportskeeda.com/wp-content/uploads/2014/07/tennis-balls-1404816292.jpg]
Anatomi [http://upload.wikimedia.org/wikipedia/commons/b/b4/Head_ap_anatomy.jpg]
OL [http://s3.amazonaws.com/digitaltrends-uploads-prod/2013/12/Kim-Jong-Un-7.jpg]

###Accenture [http://accenture.no]
- [Ciber (ciber.no)](http://ciber.no)
- [Facebook](http://facebook.com)
- [Knowit (knowit.no)](http://knowit.no)
- [MazeMap Indoor Maps and Navigation (www.mazemap.com)](https://www.mazemap.com)
- [Visma (visma.no)](http://visma.no)


	 
  
