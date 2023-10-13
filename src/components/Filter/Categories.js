import Filter from "./Filter";

export default function Categories() {
    return (
        <div>
            <h5>choose category</h5>
            {['SEAFOOD', 'ITALIAN', 'APPETAIZER', 'SALADS', 'ALL'].
            map((category) => <Filter key={category} category={category}/>)}
        </div>
    )
};