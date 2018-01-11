(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
	var tes = 'let';
	console.log(tes);
})();

// import Pjax from 'pjax-api';

// new Pjax({
// 	areas: [
// 		// try to use the first query.
// 		'#header, #primary',
// 		// fallback, retrying with the second query.
// 		'#container',
// 		// fallback.
// 		'body'
// 	]
// });


var sc = $(window).scrollTop(),
    $target = $('.main');

$(window).on('scroll', function () {
	sc = $(window).scrollTop() * 0.395;

	$target.css({
		'background-position-x': -(3570 - 1390 - sc) + 'px'
	});
	console.log(sc);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczZcXHJ1bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUMsYUFBWTtBQUNaLEtBQUksTUFBTSxLQUFWO0FBQ0EsU0FBUSxHQUFSLENBQVksR0FBWjtBQUNBLENBSEEsR0FBRDs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSSxLQUFLLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBVDtBQUFBLElBQ0MsVUFBVSxFQUFFLE9BQUYsQ0FEWDs7QUFHQSxFQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0FBQ2xDLE1BQUssRUFBRSxNQUFGLEVBQVUsU0FBVixLQUF3QixLQUE3Qjs7QUFFQSxTQUFRLEdBQVIsQ0FBWTtBQUNYLDJCQUF5QixFQUFHLE9BQU8sSUFBUixHQUFnQixFQUFsQixJQUF3QjtBQUR0QyxFQUFaO0FBR0EsU0FBUSxHQUFSLENBQVksRUFBWjtBQUNBLENBUEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpIHtcclxuXHRsZXQgdGVzID0gJ2xldCc7XHJcblx0Y29uc29sZS5sb2codGVzKTtcclxufSgpKTtcclxuXHJcblxyXG4vLyBpbXBvcnQgUGpheCBmcm9tICdwamF4LWFwaSc7XHJcblxyXG4vLyBuZXcgUGpheCh7XHJcbi8vIFx0YXJlYXM6IFtcclxuLy8gXHRcdC8vIHRyeSB0byB1c2UgdGhlIGZpcnN0IHF1ZXJ5LlxyXG4vLyBcdFx0JyNoZWFkZXIsICNwcmltYXJ5JyxcclxuLy8gXHRcdC8vIGZhbGxiYWNrLCByZXRyeWluZyB3aXRoIHRoZSBzZWNvbmQgcXVlcnkuXHJcbi8vIFx0XHQnI2NvbnRhaW5lcicsXHJcbi8vIFx0XHQvLyBmYWxsYmFjay5cclxuLy8gXHRcdCdib2R5J1xyXG4vLyBcdF1cclxuLy8gfSk7XHJcblxyXG5cclxubGV0IHNjID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG5cdCR0YXJnZXQgPSAkKCcubWFpbicpO1xyXG5cclxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0c2MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKiAwLjM5NTtcclxuXHJcblx0JHRhcmdldC5jc3Moe1xyXG5cdFx0J2JhY2tncm91bmQtcG9zaXRpb24teCc6IC0oKDM1NzAgLSAxMzkwKSAtIHNjKSArICdweCdcclxuXHR9KTtcclxuXHRjb25zb2xlLmxvZyhzYyk7XHJcbn0pO1xyXG4iXX0=
