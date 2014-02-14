<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html ng-app="amstudio">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link type="text/css" rel="stylesheet" href="styles/main.css" />
        <link href='http://fonts.googleapis.com/css?family=Josefin+Sans:100,400' rel='stylesheet' type='text/css'>
        <script type="text/javascript" src="scripts/lib/jquery.min.js"></script>
        <script type="text/javascript" src="scripts/lib/angular.min.js"></script>
        <script type="text/javascript" src="scripts/app.js"></script>
        <script type="text/javascript" src="scripts/controllers.js"></script>
    </head>
    <body>
        <div id ="content">
            <header>
                <div id="logo">Logo</div>
                <navigation>
                    <ul>
                        <li>PORTFOLIO</li>
                        <li>CONTACT</li>
                        <li>ABOUT</li>
                        <li>BLOG</li>
                    </ul>
                </navigation>
            </header>
            <slideshow></slideshow>
            <portfolio></portfolio>
            <div id="contact">

            </div>
            <div id="about">

            </div>
        </div>
        <script type="text/javascript" src="scripts/lib/skrollr.js"></script>
        <script type="text/javascript">
            var s = skrollr.init();
        </script>
        <script type="text/javascript" src="scripts/directives/slideshow.js"></script>
        <script type="text/javascript" src="scripts/directives/portfolio.js"></script>
    </body>
</html>
