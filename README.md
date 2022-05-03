# Node.js CRUD with Supabase

## Resources
Supabase `https://supabase.com/`

nodejs `https://nodejs.org/es/`

express

## Dependencies
```
    npm install @supabase/supabase-js express dotenv
```

### Dev Dependencies
```
    npm i -D nodemon
```

### Configure supabase
```javascript
    const { createClient } = supabase
    const supabase = createClient('public-url', 'public-anon-key')
    module.exports = supabase
```

### Examples
``` javascript
    const main = async ()=>{
        const {data,error} = await supabase
            .from('table-name')
            .select('*')
    }
    main();
```

```javascript
    const main = async ()=>{
        const {data,error} = await supabase
            .from('table-name')
            .insert([{name:"",description:""}])
    }
    main();
```

````javascript
    const { data, error } = await supabase
        .from('table-name')
        .update({ name: 'Middle Earth' })
        .match({ id: 2 })
```

`Note`: Other commands here: `https://supabase.com/docs/reference/javascript/supabase-client` 

you can find more in the option *Database* and *Filters*
