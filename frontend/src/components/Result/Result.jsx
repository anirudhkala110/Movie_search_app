import React from 'react'

function Result({ result, openDetail }) {
    return (
        <>

            <div className="result m-3" onClick={e => openDetail(result.imdbID)}>
                <div className=" border border-dark border-3 px-5 bg-dark pt-3">
                    <img src={result.Poster} alt="" />
                </div>
                <div className=" bg-dark text-light p-3 ">
                    <h3>{result.Title}</h3>
                </div>
            </div>

        </>
    )
}

export default Result