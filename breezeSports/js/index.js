(function() {
    var $closeBtn, $heading, $loadBtn, $loading, $players, $playersAway, $playersHome, $stage, $subHeading, $switchBtn, $switcher, $team, $teamListHome, $terrain, $world, ASSET_URL, anim, data, dom, events, init, pos, scenes, state;

    ASSET_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/';

    $stage = null;

    $world = null;

    $terrain = null;

    $team = null;

    $teamListHome = null;

    $players = null;

    $playersHome = null;

    $playersAway = null;

    $switchBtn = null;

    $loadBtn = null;

    $closeBtn = null;

    $heading = null;

    $subHeading = null;

    $loading = null;

    $switcher = null;

    //test JSON object

    // {
    //   name : SPORT_NAME
    //   asset : ASSET_NAME
    //   x : ABSCISSA
    //   y : ORDINATE
    //   coordinator : COORDINATOR_NAME
    //   phoneNo : PHONE_NO
    //   emailID : EMAIL_ID
    //   venue : VENUE_NAME
    //   registration fees : REGISTRATION_FEES
    //   description : EVENT_DESCRIPTION
    //   prize money : PRIZE_MONEY
    // }


    data = {
        players: {

            home: [{
                name: 'Football',
                asset: 'static/football.png',
                prizeMoney: "I. 24000 • II. 14000",
                eventCoordinator: 'Shradhey Prasad',
                rules: '<u>Date : 4.11.16, Friday, 10AM.</u><br>1. Standard rules apply.<br>2. 11 a side football matches.<br>3. Group stages - 25/5/5 minutes, Knockouts - 35/5/35 minutes.',
                venue: 'Football Ground',
                emailID: 'sports.committee@snu.edu.in',
                phone: '+919650331064',
                x: 0,
                y: -300
            }, {
                name: 'Badminton',
                asset: 'static/badminton.png',
                prizeMoney: "   I. 10000 • II. 5000",
                eventCoordinator: 'Bhogeshwar R(M)<br>Sanjana Maurya(F)',
                rules: '<u>Date : 4.11.16, Friday, 10AM.</u> <br>1. Each tie would consist of three matches, First singles, Doubles, Reverse Singles, in that order.<br>2. Each match would be a best of 3 sets (15 points each) during pool stage and 3 sets (21 points each) during semi-finals and finals.<br>3. Time-out of 90 seconds is provided between each set.<br>4. Referee’s decision would be final and binding.<br><b>Service</b><br>1. The shuttle must be hit below the waist with the racquet head below the hand, and the server must have part of both feet stationary in contact with the ground.<br>2. All BWF Rules would be followed. ',
                venue: 'Badminton court',
                emailID: 'sports.committee@snu.edu.in',
                phone: '+91 8686262568(M)<br>+91 9015378953(F)',
                x: -100,
                y: -150
            }, {
                name: 'Cricket',
                asset: 'static/cricket.png',
                prizeMoney: "I. 28000 • II. 14000",
                eventCoordinator: 'Ayush Mehta',
                rules: '<u>Date : 3.11.16, Thursday, 7:00 A.M</u><br>1. ALL ICC RULES TO BE FOLLOWED.<br>2. ALL MATCHES WILL BE OF 15 OVERS EACH EXCEPT FOR FINALS WHICH WILL BE OF 20 OVERS.<br>3.ALL MATCHES WILL BE PLAYED WITH WHITE BALL, SO ALL TEAMS ARE EXPECTED TO COME IN COLORED KITS.<br>',
                venue: 'Cricket Ground',
                emailID: 'sports.committee@snu.edu.in',
                phone: '+91 9805783738',
                x: 100,
                y: -150
            }, {
                name: 'Table Tennis',
                asset: 'static/tabletennis.png',
                prizeMoney: "   I. 10000 • II. 5000",
                eventCoordinator: 'Kashish Vijay(M)<br>Mayuri Jain(F)',
                rules: '<u> Date : 4.11.16, Friday, 10:00 A.M</u><br>1. Standard IITF rules will be followed.<br> 2. 1 tie will consist of 2 singles and 1 doubles match.<br>3.Each match will be of best of five sets for 11 points each.',
                venue: 'Sports complex',
                emailID: 'sports.committee@snu.edu.in',
                phone: '+91  9409228181(M)<br>+91  9818228330(F)',
                x: 200,
                y: 180
            }, {
                name: 'Basketball',
                asset: 'static/basketball.png',
                prizeMoney: "   I. 20000 • II. 12000",
                eventCoordinator: 'Harshil Aggarwal(M)<br>Akshita Singh(F)',
                rules: '<u>Date : 4.11.16, Friday, 10AM.</u><br>1. Each game consists of four quarters of 10 minutes.<br>2. If the scores are tied at the end of the fourth quarter, overtime periods of five minutes will be played until one team has more points than the other (at the end of the 5-minute period).<br>3. All FIBA rules will be followed. ',
                venue: 'Basketball court',
                emailID: 'sports.committee@snu.edu.in',
                phone: '+91 9839562111(M)<br>+91 9910809746(F)',
                x: -200,
                y: 180
            }, {
                name: 'Chess',
                asset: 'static/chess.png',
                prizeMoney: "I. 10000 • II. 5000",
                eventCoordinator: 'Snehith Reddy',
                rules: '<u>Date: 4.11.16, Friday, 10AM.</u><br>1. The game will be played between 2 players from different teams.<br>2. A team consists of 3 players who will play, and 1 substitute may be there.<br>3.Pairing will be done by the Swiss Perfect.<br>4. The game will be played for 60 minutes, i.e. each player gets 30 minutes to finish their game.<br>5. Latest FIDE rules will be followed strictly. In case of any discrepancy, Arbiter’s decision is final.<br>',
                venue: 'Sports complex/D006',
                emailID: 'sports.committee@snu.edu.in',
                phone: '+91 8374247734',
                x: 150,
                y: 50
            }, {
                name: 'Volleyball',
                asset: 'static/volleyball.png',
                prizeMoney: "I. 20000 • II. 12000",
                eventCoordinator: 'Shashi Kiran(M)',
                rules: '<u>Date : 4.11.16, Friday, 10:00 A.M</u><br>1. Each League match will be a best-of-three sets, for 25 points each.<br>2. The knock-out matches will be a best-of-five sets for 25 points each.<br>3. All rules according to FIVB.',       
                venue: 'Volleyball court',
                emailID: 'sports.committee@snu.edu.in',
                phone: '+91 8130868769',
                x: -150,
                y: 50
            }, {
                name: 'Tennis',
                asset: 'static/tennis.png',
                prizeMoney: "   I. 10000 • II. 5000",
                eventCoordinator: 'Anmol Chaudhary(M) <br>Manognya Gudapati(F)',
                rules: '<u>Date : 4.11.16, Friday, 10:00 A.M</u><br>1. Each tie is contested in a best-of-three match format.<br>2. It consists of three matches: Singles match, then a doubles match and if the need be a reverse singles match. First team to secure 2 wins off 3 matches wins the tie.<br>3. All matches will be governed by the International Tennis Federation rules.<br>4. Players will be responsible to furnish their own racquets.<br>5. If a player is injured and cannot continue playing, that match will be marked as retired.<br>6. Spectators have no role in making line calls.<br>7. After completing a match a player is allowed to rest up to 20 min before required to play again.',
                venue: 'Tennis court',
                emailID: 'sports.committee@snu.edu.in',
                phone: '+91 9717828889(M)<br>+91 9560968826(F)',
                x: 0,
                y: -85
                    // }, {
                    //   name: 'Lacrosse',
                    //   asset: 'bm-neuer.jpg',
                    //   prizeMoney: 5000,
                    //   eventCoordinator: 'Prerak',
                    //   rules: 'Standard',
                    //   venue: 'Football Ground',
                    //   emailID: 'emailID',
                    //   phone: 'phone',
                    //   x: 0,
                    //   y: 100
                    // }],
            }],

            //not really needed, all redundant players, remove them or just hide the switch?
            away: [{
                name: 'Football',
                asset: 'bm-neuer.jpg',
                prizeMoney: 5000,
                eventCoordinator: 'Prerak',
                rules: 'Standard',
                venue: 'Football Ground',
                emailID: 'emailID',
                phone: 'phone',
                x: 0,
                y: 410
            }, {
                name: 'Badminton',
                asset: 'bm-neuer.jpg',
                prizeMoney: 5000,
                eventCoordinator: 'Prerak',
                rules: 'Standard',
                venue: 'Football Ground',
                emailID: 'emailID',
                phone: 'phone',
                x: -100,
                y: 300
            }, {
                name: 'Cricket',
                asset: 'bm-neuer.jpg',
                prizeMoney: 5000,
                eventCoordinator: 'Prerak',
                rules: 'Standard',
                venue: 'Football Ground',
                emailID: 'emailID',
                phone: 'phone',
                x: 100,
                y: 300
            }, {
                name: 'Table Tennis',
                asset: 'bm-neuer.jpg',
                prizeMoney: 5000,
                eventCoordinator: 'Prerak',
                rules: 'Standard',
                venue: 'Football Ground',
                emailID: 'emailID',
                phone: 'phone',
                x: 200,
                y: 180
            }, {
                name: 'Basketball',
                asset: 'bm-neuer.jpg',
                prizeMoney: 5000,
                eventCoordinator: 'Prerak',
                rules: 'Standard',
                venue: 'Football Ground',
                emailID: 'emailID',
                phone: 'phone',
                x: -200,
                y: 180
                    // }, {
                    //   name: 'Modric',
                    //   asset: 'rm-modric.jpg',
                    //   origin: 'Croatia',
                    //   height: '1.74m',
                    //   shirt: '19',
                    //   pos: 'Midfield',
                    //   dob: '30',
                    //   goals: 5,
                    //   games: 27,
                    //   x: -200,
                    //   y: 180
                    // }, {
                    //   name: 'Nacho',
                    //   asset: 'rm-nacho.jpg',
                    //   origin: 'Germany',
                    //   height: '1.79',
                    //   shirt: '18',
                    //   pos: 'Defence',
                    //   dob: '25',
                    //   goals: 2,
                    //   games: 25,
                    //   x: 200,
                    //   y: 180
                    // }, {
                    //   name: 'Ramos',
                    //   asset: 'rm-ramos.jpg',
                    //   origin: 'Spain',
                    //   height: '1.83m',
                    //   shirt: '4',
                    //   pos: 'Defence',
                    //   dob: '31',
                    //   goals: 21,
                    //   games: 1,
                    //   x: 100,
                    //   y: 300
                    // }, {
                    //   name: 'Pepe',
                    //   asset: 'rm-pepe.jpg',
                    //   origin: 'Brazil',
                    //   height: '1.88m',
                    //   shirt: '3',
                    //   pos: 'Defence',
                    //   dob: '32',
                    //   goals: 0,
                    //   games: 34,
                    //   x: -100,
                    //   y: 300
                    // }, {
                    //   name: 'Casillas',
                    //   asset: 'rm-casillas.jpg',
                    //   origin: 'Spain',
                    //   height: '1.85m',
                    //   shirt: '1',
                    //   pos: 'Goalie',
                    //   dob: '34',
                    //   goals: 0,
                    //   games: 48,
                    //   x: 0,
                    //   y: 410
            }]
        }
    };

    state = {
        home: true,
        disabHover: false,
        swapSides: function() {
            if (this.home) {
                return this.home = false;
            } else {
                return this.home = true;
            }
        },
        curSide: function() {
            if (this.home) {
                return 'home';
            } else {
                return 'away';
            }
        }
    };

    pos = {
        world: {
            baseX: 0,
            baseY: 0,
            baseZ: -200
        },
        def: {
            goalie: [0, -50]
        }
    };

    dom = {
        addPlayers: function(side) {
            var $el, key, ref, val;
            ref = data.players[side];
            for (key in ref) {
                val = ref[key];
                val.side = side;
                $el = this.addPlayer(val);
                $team.append($el);
            }
            $players = $('.js-player');
            $playersHome = $('.js-player[data-side="home"]');
            return $playersAway = $('.js-player[data-side="away"]');
        },
        addPlayer: function(data) {
            var $el;
            $el = $('<div class="js-player player" data-name="' + data.name + '" data-side="' + data.side + '" data-x="' + data.x + '" data-y="' + data.y + '"></div>');
            $el.append('<div class="player__label"><span>' + data.name + '</span></div>');
            $el.append('<div class="player__img"><img src= ' + data.asset + '><button class="ruleButtons">'+data.name+'</button></div>');
            $el.prepend('<div class="player__card"> </div>');
            $el.prepend('<div class="player__placeholder"></div>');
            // $el.prepend('<div class="player__placeholder"></div>');<h3>' + data.name + '</h3>
            // $el.prepend('<div class="player__placeholder">TEST</div>');
            this.populateCard($el.find('.player__card'), data);
            return $el;
        },
        preloadImages: function(preload) {
            var i, promises;
            promises = [];
            i = 0;
            while (i < preload.length) {
                (function(url, promise) {
                    var img;
                    img = new Image;
                    img.onload = function() {
                        return promise.resolve();
                    };
                    return img.src = url;
                })(preload[i], promises[i] = $.Deferred());
                i++;
            }
            return $.when.apply($, promises).done(function() {
                scenes.endLoading();
                return scenes.loadIn(1600);
            });
        },
        populateCard: function($el, data) {

            return $el.append('<h3>' + data.name + '</h3>' + '<ul class="player__card__list"><li><span>Venue</span><br/>' + '<h2>'+data.venue+'</h2>' + '</li><li><span>Prize money (in INR)</span><br/>' + '<h2>'+data.prizeMoney+'</h2>' + '</li><li><span></span><br/></li></ul><br/><br/><br/>' + '<ul class="player__card__list player__card__list--last"><li><span>Coordinator</span><br/>' + data.eventCoordinator + '</li><li><span>Phone</span><br/>' + data.phone + '</li></ul><br><h3>' + data.rules + '</h3>') /*.append('<ul class = "player__card__list--last"><li><span>Event coordinator</span><br/>'+data.eventCoordinator)*/ ;

        },
        displayNone: function($el) {
            return $el.css('display', 'none');
        }
    };

    events = {
        attachAll: function() {
            $switchBtn.on('click', function(e) {
                var $el;
                e.preventDefault();
                $el = $(this);
                if ($el.hasClass('disabled')) {
                    return;
                }
                scenes.switchSides();
                $switchBtn.removeClass('disabled');
                return $el.addClass('disabled');
            });
            $loadBtn.on('click', function(e) {
                e.preventDefault();
                return scenes.loadIn();
            });
            return $players.on('click', function(e) {
                var $el;
                e.preventDefault();
                $el = $(this);
                if ($('.active').length) {
                    return false;
                }
                $el.addClass('active');
                scenes.focusPlayer($el);
                return setTimeout((function() {
                    return events.attachClose();
                }), 1);
            });
        },
        attachClose: function() {
            return $stage.one('click', function(e) {
                e.preventDefault();
                return scenes.unfocusPlayer();
            });
        }
    };

    scenes = {
        preLoad: function() {
            $teamListHome.velocity({
                opacity: 0
            }, 0);
            $players.velocity({
                opacity: 0
            }, 0);
            $loadBtn.velocity({
                opacity: 0
            }, 0);
            $switcher.velocity({
                opacity: 0
            }, 0);
            $heading.velocity({
                opacity: 0
            }, 0);
            $subHeading.velocity({
                opacity: 0
            }, 0);
            $playersAway.css('display', 'none');
            $world.velocity({
                opacity: 0,
                translateZ: -200,
                translateY: -60
            }, 0);
            return $('main').velocity({
                opacity: 1
            }, 0);
        },
        loadIn: function(delay) {
            var delayInc;
            if (delay == null) {
                delay = 0;
            }
            $world.velocity({
                opacity: 1,
                translateY: 0,
                translateZ: -200
            }, {
                duration: 1000,
                delay: delay,
                easing: 'spring'
            });
            anim.fadeInDir($heading, 300, delay + 600, 0, 30);
            anim.fadeInDir($subHeading, 300, delay + 800, 0, 30);
            anim.fadeInDir($teamListHome, 300, delay + 800, 0, 30);
            anim.fadeInDir($switcher, 300, delay + 900, 0, 30);
            delay += 1200;
            delayInc = 30;
            return anim.dropPlayers($playersHome, delay, delayInc);
        },
        startLoading: function() {
            var images, key, ref, val;
            anim.fadeInDir($loading, 300, 0, 0, -20);
            images = [];
            ref = data.players.home && data.players.away;
            for (key in ref) {
                val = ref[key];
                images.push(ASSET_URL + val.asset);
            }
            return dom.preloadImages(images);
        },
        endLoading: function() {
            return anim.fadeOutDir($loading, 300, 1000, 0, -20);
        },
        arrangePlayers: function() {
            return $players.each(function() {
                var $el;
                $el = $(this);
                return $el.velocity({
                    translateX: parseInt($el.attr('data-x')),
                    translateZ: parseInt($el.attr('data-y'))
                });
            });
        },
        focusPlayer: function($el) {
            var shiftY;
            data = $el.data();
            shiftY = data.y;
            if (shiftY > 0) {
                shiftY = data.y / 2;
            }
            $('.js-player[data-side="' + state.curSide() + '"]').not('.active').each(function() {
                var $unfocus;
                $unfocus = $(this);
                return anim.fadeOutDir($unfocus, 300, 0, 0, 0, 0, null, 0.2);
            });
            $world.velocity({
                translateX: pos.world.baseX - data.x,
                translateY: pos.world.baseY,
                translateZ: pos.world.baseZ - shiftY
            }, 600);
            $terrain.velocity({
                opacity: 0.66
            }, 600);
            return this.showPlayerCard($el, 600, 600);
        },
        unfocusPlayer: function() {
            var $el;
            $el = $('.js-player.active');
            data = $el.data();
            anim.fadeInDir($('.js-player[data-side="' + state.curSide() + '"]').not('.active'), 300, 300, 0, 0, 0, null, 0.2);
            $el.removeClass('active');
            $world.velocity({
                translateX: pos.world.baseX,
                translateY: pos.world.baseY,
                translateZ: pos.world.baseZ
            }, 600);
            $terrain.velocity({
                opacity: 1
            }, 600);
            return this.hidePlayerCard($el, 600, 600);
        },
        hidePlayerCard: function($el, dur, delay) {
            var $card, $image;
            $card = $el.find('.player__card');
            $image = $el.find('.player__img');
            $image.velocity({
                translateY: 0
            }, 300);
            anim.fadeInDir($el.find('.player__label', 200, delay));
            return anim.fadeOutDir($card, 300, 0, 0, -100);
        },
        showPlayerCard: function($el, dur, delay) {
            var $card, $image;
            $card = $el.find('.player__card');
            $image = $el.find('.player__img');
            $image.velocity({
                translateY: '-=150px'
            }, 300);
            anim.fadeOutDir($el.find('.player__label', 200, delay));
            return anim.fadeInDir($card, 300, 200, 0, 100);
        },
        switchSides: function() {
            var $new, $old, delay, delayInc;
            delay = 0;
            delayInc = 20;
            $old = $playersHome;
            $new = $playersAway;
            if (!state.home) {
                $old = $playersAway;
                $new = $playersHome;
            }
            state.swapSides();
            $old.each(function() {
                var $el;
                $el = $(this);
                anim.fadeOutDir($el, 200, delay, 0, -60, 0);
                anim.fadeOutDir($el.find('.player__label'), 200, delay + 700);
                return delay += delayInc;
            });
            $terrain.velocity({
                rotateY: '+=180deg'
            }, {
                delay: 150,
                duration: 1200
            });
            return anim.dropPlayers($new, 1500, 30);
        }
    };

    anim = {
        fadeInDir: function($el, dur, delay, deltaX, deltaY, deltaZ, easing, opacity) {
            if (deltaX == null) {
                deltaX = 0;
            }
            if (deltaY == null) {
                deltaY = 0;
            }
            if (deltaZ == null) {
                deltaZ = 0;
            }
            if (easing == null) {
                easing = null;
            }
            if (opacity == null) {
                opacity = 0;
            }
            $el.css('display', 'block');
            $el.velocity({
                translateX: '-=' + deltaX,
                translateY: '-=' + deltaY,
                translateZ: '-=' + deltaZ
            }, 0);
            return $el.velocity({
                opacity: 1,
                translateX: '+=' + deltaX,
                translateY: '+=' + deltaY,
                translateZ: '+=' + deltaZ
            }, {
                easing: easing,
                delay: delay,
                duration: dur
            });
        },
        fadeOutDir: function($el, dur, delay, deltaX, deltaY, deltaZ, easing, opacity) {
            var display;
            if (deltaX == null) {
                deltaX = 0;
            }
            if (deltaY == null) {
                deltaY = 0;
            }
            if (deltaZ == null) {
                deltaZ = 0;
            }
            if (easing == null) {
                easing = null;
            }
            if (opacity == null) {
                opacity = 0;
            }
            if (!opacity) {
                display = 'none';
            } else {
                display = 'block';
            }
            return $el.velocity({
                opacity: opacity,
                translateX: '+=' + deltaX,
                translateY: '+=' + deltaY,
                translateZ: '+=' + deltaZ
            }, {
                easing: easing,
                delay: delay,
                duration: dur
            }).velocity({
                opacity: opacity,
                translateX: '-=' + deltaX,
                translateY: '-=' + deltaY,
                translateZ: '-=' + deltaZ
            }, {
                duration: 0,
                display: display
            });
        },
        dropPlayers: function($els, delay, delayInc) {
            return $els.each(function() {
                var $el;
                $el = $(this);
                $el.css({
                    display: 'block',
                    opacity: 0
                });
                anim.fadeInDir($el, 800, delay, 0, 50, 0, 'spring');
                anim.fadeInDir($el.find('.player__label'), 200, delay + 250);
                return delay += delayInc;
            });
        }
    };

    init = function() {
        $stage = $('.js-stage');
        $world = $('.js-world');
        $switchBtn = $('.js-switch');
        $loadBtn = $('.js-load');
        $heading = $('.js-heading');
        $switcher = $('.js-switcher');
        $closeBtn = $('.js-close');
        $subHeading = $('.js-subheading');
        $terrain = $('.js-terrain');
        $team = $('.js-team');
        $teamListHome = $('.js-team-home');
        $loading = $('.js-loading');
        dom.addPlayers('home');
        dom.addPlayers('away');
        scenes.preLoad();
        scenes.arrangePlayers();
        events.attachAll();
        return scenes.startLoading();
    };

    $(document).ready(function() {
        return init();
    });

}).call(this);