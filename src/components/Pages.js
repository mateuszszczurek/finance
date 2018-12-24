import React from 'react'

const Pages = ({pages, selectionChange, currentlySelected}) =>
    <div>
        {Array.from({length: pages}, (v, k) => k + 1).map(pageNumber => <button className={pageNumber===currentlySelected ? "selected pages" : "pages"} key={pageNumber}
                                                                                onClick={selectionChange}>{pageNumber}</button>)}
    </div>;

export default Pages;