import Link from 'next/link';               // import link componets from the next


const Home = props => (             // no need to import as next will take care of it. 
    // V  down link to route to the another page 
    <div>                           
        <p>hey!!!!</p>                  
        <Link href='/sell'>                  
            <a>Selll@</a>
        </Link>
    </div>
);                                 // this is a function components

export default Home;                      // export the home compoents      