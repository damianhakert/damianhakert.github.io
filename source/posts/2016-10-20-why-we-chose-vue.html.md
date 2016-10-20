#Why We Chose Vue

I had a great conversation with a recent interviewee a few weeks ago and he brought up some good points about why one would chose Vue JS. He said, when a major software company releases a their secret sauce, there is going to be hype. That company writes JS different than you, and they are very successful. Is their way of writing JS better than mine? And therefore must I adopt it?

Their secret sauce may be awesome, but don't assume awesomeness just because everyone else gets excited. You wouldn't copy and paste an answer from StackOverflow, without understanding it, so why copy and paste an entire framework. 

Some people get annoyed with all the new JS frameworks that come out every 2 weeks. I enjoy them. I like to think of myself as a JavaScript collector. I download all the new libraries that come out and read their source to see how they solved the problems they claim to solve. I love trying out new frameworks. If you are _ok_ at JavaScript and want to get better, this is a great way to learn a lot of the tricks people use. 

In the end, what I want, most of all, is to write plain old JavaScript. I like that I know the ins and outs of JavaScript. Why read [Secrets of a JavaScript Ninja](https://www.manning.com/books/secrets-of-the-javascript-ninja), if you never get to show your skills? 

This is what Vue JS does. It allows you to write simple JavaScript. Getting started with Vue JS is extremely easy. It's source code is very readable. The documentation is the only thing you'll ever need. You don't need any external libraries. You can use it with or without jQuery. You won't need to install any plugins, even though many are available. I like vanilla Vue personally, but sometimes I add in vue-resource, because it's really nice too. Hooking it up to existing code is very straightforward. Vue uses `Object.defineProperty` to track changes.

It's almost stupid to write a tutorial on it, because it's so straight forward. Most people read the guide and they are ready to go. 

I talk to a lot of JS devs and I find it really interesting that the ones who spend the most time in the Angular world tend to not know JS well. I don't want that to happen to me or our devs. Why should we write "not JavaScript"?

When using Backbone, I was really forcing myself to stay DRY, to do the thing that Backbone would have wanted me to do. With Backbone there are many ways to use it. It's really a blank canvas. 

Vue JS does not make large assumptions about anything either, it only assumes your data will change. With Vue it has the perfect balance of what it will do for you and what you need to do yourself. Vue also has a structure that will result in the best outcome. Backbone felt like anarchy, no one is in charge. Angular feels like a dictatorship, Angular is in charge, and tells you what to do. Vue is like socialism, because you are in control. You own Vue, Vue does not own you. You publicly own your objects, while Vue tries to maximize your programming and minimize human suffering.

To give you an idea of how simple it is:

Here's a simple [Codepen](http://codepen.io/jschatz1/pen/dpQkpx)

```
<div id="journal">
	<input type="text" v-model="message">
	<div>{{message}}</div>
</div>
```
```
(function(w){
	var journal = new Vue({
		el: '#journal',
    	data: {
      		message: ''
    	}
	});
}(window));
```

If you've seen the slew of JS libraries then you should understand everything in this example, without any documentation. Usually that's where the simplicity stops. Nice simple example but in reality the rest is complicated. Not Vue though, the rest is just as simple. 

And that is what I love about Vue JS. It combines the simplicity of using an object to express what you want to show in your view. The data for that view goes in an object called `data`. Any functions you'll write as callbacks for events go into a `methods` object. It knows when things change, and updates it, so you write less code. Best of all, when theres a need, it's most likely already solved, and the answer is in the guide. For example, when you find yourself querying the DOM, just stop, there's usually a better way. 

So what problem does this solve for GitLab? When I joined, all JS was written with JQuery. There is nothing _wrong_ with that except that you'll write a lot more code to solve the problem. We can do better. Once we added in Vue, we could suddenly solve much more complex problems in much less time. On the issues page, the issue can be `closed` or `open`. That status has to update in a few places. In JQuery, we had about 30 or so lines of code to make that work in all the right places. We have to switch around classes and query the DOM. But in Vue, it would be 1 line of code. The rest of the updating happens in the HTML, and it's much more simple to write.

What [Evan You](@youyuxi) knows is that you can't just write a kick ass framework. You need excellent documentation, responses to tons of questions from users to create answers for Google searches. You need to continue to evolve based on user feedback. On top of that, you need a bunch of plugins that solve all the other problems people might have.