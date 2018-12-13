import Link from 'next/link';               // import link componets from the next


const Sell = props => (             // no need to import as next will take care of it. 
    <div>                           
        <p>Sell!!!!</p>
        <Link href='/'>                  
            <a>back to Home@</a>
        </Link>
    </div>
);                                 // this is a function components

export default Sell;                      // export the home compoents      