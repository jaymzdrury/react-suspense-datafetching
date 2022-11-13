## React, Data Fetching w/ Suspense

<img src="https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="React" width="350" />

### Fetch on Render (old appoach)

```JavaScript
useEffect(() => {
    //do something
},[])
```

`useEffect` doesn't fetch until after component has rendered on the screen. This leads to problems.

### Render as you Fetch

```JavaScript
<Suspense fallback={<h1>Loading...</h1>}>
    <div>Data Here</div>
</Suspense>
```

`Suspense` doesn't wait for a response before it starts rendering, showing content sooner.

use `read()` so React can either get the data or suspend the component
