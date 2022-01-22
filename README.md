# MegaMenu
<h2>Basic structure</h2>
  <pre>
  <code>
&lt;nav id=&quot;yourId&quot;&gt;
    &lt;ul&gt;
        &lt;li class=&quot;menu-item parent&quot; data-target=&quot;menu-item-01&quot;&gt;&lt;/li&gt;
        &lt;li class=&quot;menu-item parent&quot; data-target=&quot;menu-item-02&quot;&gt;&lt;/li&gt;
        &lt;li class=&quot;menu-item parent&quot; data-target=&quot;menu-item-03&quot;&gt;&lt;/li&gt;
        &lt;li class=&quot;menu-item parent&quot; data-target=&quot;menu-item-04&quot;&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div id=&quot;childWrapper&quot; class=&quot;child-menu-wrapper&quot;&gt;
        &lt;div id=&quot;menu-item-01&quot; class=&quot;child-menu-item&quot;&gt;&lt;/div&gt;
        &lt;div id=&quot;menu-item-02&quot; class=&quot;child-menu-item&quot;&gt;&lt;/div&gt;
        &lt;div id=&quot;menu-item-03&quot; class=&quot;child-menu-item&quot;&gt;&lt;/div&gt;
        &lt;div id=&quot;menu-item-04&quot; class=&quot;child-menu-item&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/nav&gt;
  </code>
  </pre>
  
  <h2>Usage</h2>
  
  <pre>
  <code>
  const menu = new MegaMenu('yourId', 'mouseenter');
  <p>
  First parameter is an ID of menu main container.<br>
  Second parameter is an event listener, prefered 'click' or 'mouseenter'
  </p>
  </code>
  </pre>
