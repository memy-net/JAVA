jQuery(function() {
var $ = jQuery;
var faqTitle = $( &quot;.faq h3&quot; );
var answerFaq = $(&quot;.response&quot;);
faqTitle.click(function(e) {
e.preventDefault();
$(this).toggleClass(&#39;titleopen&#39;).next().slideToggle().toggleClass(&#39;open-close&#39;);
});
$( &quot;#showall&quot; ).click(function(e) {
e.preventDefault();
faqTitle.addClass(&#39;titleopen&#39;);
answerFaq.slideDown().addClass(&#39;open-close&#39;);
});
$( &quot;#hideall&quot; ).click(function(e) {
e.preventDefault();
faqTitle.removeClass(&#39;titleopen&#39;);
answerFaq.slideUp().removeClass(&#39;open-close&#39;);
});
});
